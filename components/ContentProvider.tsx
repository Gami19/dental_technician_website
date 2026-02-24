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
  const [data, setData] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  const fetchContent = useCallback(async () => {
    setLoading(true)
    try {
      const result = await contentApi.getPublicContent()
      setData(result)
    } catch {
      setData({})
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isPreview) {
      if (previewContent !== null) {
        setData(previewContent)
        setLoading(false)
      } else if (!previewLoading) {
        setData({})
        setLoading(false)
      } else {
        setLoading(true)
      }
    } else {
      fetchContent()
    }
  }, [isPreview, previewContent, previewLoading, fetchContent])

  return (
    <ContentContext.Provider value={{ data, loading, refetch: fetchContent }}>
      {children}
    </ContentContext.Provider>
  )
}
