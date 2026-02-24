'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { previewDataApi, type PublicImage } from '@/lib/api'

type PreviewDataContextValue = {
  isPreview: boolean
  previewContent: Record<string, string> | null
  previewImages: Record<string, PublicImage> | null
  previewLoading: boolean
}

const PreviewDataContext = createContext<PreviewDataContextValue>({
  isPreview: false,
  previewContent: null,
  previewImages: null,
  previewLoading: false,
})

export function usePreviewData() {
  return useContext(PreviewDataContext)
}

function getPreviewParams(): { isPreview: boolean; token: string | null } {
  if (typeof window === 'undefined') return { isPreview: false, token: null }
  const params = new URLSearchParams(window.location.search)
  const preview = params.get('preview') === '1'
  const token = params.get('token')
  return { isPreview: !!preview && !!token, token }
}

export function PreviewDataProvider({ children }: { children: React.ReactNode }) {
  const [isPreview, setIsPreview] = useState(false)
  const [previewContent, setPreviewContent] = useState<Record<string, string> | null>(null)
  const [previewImages, setPreviewImages] = useState<Record<string, PublicImage> | null>(null)
  const [previewLoading, setPreviewLoading] = useState(false)

  const fetchPreview = useCallback((token: string) => {
    setPreviewLoading(true)
    previewDataApi
      .getPreviewData(token)
      .then((data) => {
        setPreviewContent(data.content ?? {})
        setPreviewImages(data.images ?? {})
      })
      .catch(() => {
        setPreviewContent(null)
        setPreviewImages(null)
      })
      .finally(() => setPreviewLoading(false))
  }, [])

  useEffect(() => {
    const { isPreview: isP, token } = getPreviewParams()
    setIsPreview(!!isP)
    if (!isP || !token) {
      setPreviewContent(null)
      setPreviewImages(null)
      setPreviewLoading(false)
      return
    }
    fetchPreview(token)
  }, [fetchPreview])

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type !== 'PREVIEW_UPDATED') return
      const { token } = getPreviewParams()
      if (token) fetchPreview(token)
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [fetchPreview])

  return (
    <PreviewDataContext.Provider
      value={{
        isPreview,
        previewContent,
        previewImages,
        previewLoading,
      }}
    >
      {children}
    </PreviewDataContext.Provider>
  )
}
