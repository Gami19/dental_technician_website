'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { previewDataApi, type PublicImage, type PreviewAnnouncement } from '@/lib/api'

type PreviewDataContextValue = {
  isPreview: boolean
  previewContent: Record<string, string> | null
  previewImages: Record<string, PublicImage> | null
  previewAnnouncements: PreviewAnnouncement[] | null
  previewLoading: boolean
}

const PreviewDataContext = createContext<PreviewDataContextValue>({
  isPreview: false,
  previewContent: null,
  previewImages: null,
  previewAnnouncements: null,
  previewLoading: false,
})

export function usePreviewData() {
  return useContext(PreviewDataContext)
}

function getIsPreviewFromUrl(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return params.get('preview') === '1'
}

export function PreviewDataProvider({ children }: { children: React.ReactNode }) {
  const [isPreview, setIsPreview] = useState(false)
  const [previewToken, setPreviewToken] = useState<string | null>(null)
  const [previewContent, setPreviewContent] = useState<Record<string, string> | null>(null)
  const [previewImages, setPreviewImages] = useState<Record<string, PublicImage> | null>(null)
  const [previewAnnouncements, setPreviewAnnouncements] = useState<PreviewAnnouncement[] | null>(null)
  const [previewLoading, setPreviewLoading] = useState(false)

  const fetchPreview = useCallback((token: string) => {
    setPreviewLoading(true)
    previewDataApi
      .getPreviewData(token)
      .then((data) => {
        setPreviewContent(data.content ?? {})
        setPreviewImages(data.images ?? {})
        setPreviewAnnouncements(data.announcements ?? [])
      })
      .catch((err: Error & { status?: number }) => {
        setPreviewContent(null)
        setPreviewImages(null)
        setPreviewAnnouncements(null)
        // 401（トークン期限切れ・無効）のとき、親（管理画面）に再取得を依頼
        if (err?.status === 401 && window.parent !== window) {
          const adminOrigin = (() => {
            try {
              const url = process.env.NEXT_PUBLIC_ADMIN_API_URL
              return url ? new URL(url).origin : '*'
            } catch {
              return '*'
            }
          })()
          window.parent.postMessage({ type: 'PREVIEW_TOKEN_EXPIRED' }, adminOrigin)
        }
      })
      .finally(() => setPreviewLoading(false))
  }, [])

  useEffect(() => {
    const isP = getIsPreviewFromUrl()
    setIsPreview(isP)
    if (!isP) {
      setPreviewToken(null)
      setPreviewContent(null)
      setPreviewImages(null)
      setPreviewAnnouncements(null)
      setPreviewLoading(false)
      return
    }
    if (window.parent !== window) {
      const adminOrigin = (() => {
        try {
          const url = process.env.NEXT_PUBLIC_ADMIN_API_URL
          return url ? new URL(url).origin : '*'
        } catch {
          return '*'
        }
      })()
      window.parent.postMessage({ type: 'PREVIEW_READY' }, adminOrigin)
    }
  }, [])

  useEffect(() => {
    const adminOrigin = (() => {
      try {
        const url = process.env.NEXT_PUBLIC_ADMIN_API_URL
        return url ? new URL(url).origin : null
      } catch {
        return null
      }
    })()

    const handler = (event: MessageEvent) => {
      if (adminOrigin && event.origin !== adminOrigin) return

      if (event.data?.type === 'PREVIEW_TOKEN' && typeof event.data?.token === 'string') {
        setPreviewToken(event.data.token)
        fetchPreview(event.data.token)
      } else if (event.data?.type === 'PREVIEW_UPDATED' && previewToken) {
        fetchPreview(previewToken)
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [fetchPreview, previewToken])

  return (
    <PreviewDataContext.Provider
      value={{
        isPreview,
        previewContent,
        previewImages,
        previewAnnouncements,
        previewLoading,
      }}
    >
      {children}
    </PreviewDataContext.Provider>
  )
}
