'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { contentApi } from '@/lib/api'
import { usePreviewData } from './PreviewDataProvider'

const ContentContext = createContext<{
  data: Record<string, string>
  loading: boolean
  refetch: () => Promise<void>
}>({ data: {}, loading: true, refetch: async () => {} })

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const { isPreview, previewContent, previewLoading } = usePreviewData()
  const [publicData, setPublicData] = useState<Record<string, string>>({})
  const [publicLoading, setPublicLoading] = useState(true)

  const fetchContent = useCallback(async () => {
    setPublicLoading(true)
    try {
      const result = await contentApi.getPublicContent()
      setPublicData(result)
    } catch {
      setPublicData({})
    } finally {
      setPublicLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isPreview) {
      return
    }
    const timer = window.setTimeout(() => {
      void fetchContent()
    }, 0)
    return () => window.clearTimeout(timer)
  }, [isPreview, previewContent, previewLoading, fetchContent])

  const data = isPreview ? (previewContent ?? {}) : publicData
  const loading = isPreview
    ? previewLoading && previewContent === null
    : publicLoading

  return (
    <ContentContext.Provider value={{ data, loading, refetch: fetchContent }}>
      {children}
    </ContentContext.Provider>
  )
}
