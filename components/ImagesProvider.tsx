'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { imageApi, type PublicImage } from '@/lib/api'
import { usePreviewData } from './PreviewDataProvider'

type ImagesData = Record<string, PublicImage>

const ImagesContext = createContext<{
  data: ImagesData
  loading: boolean
  refetch: () => Promise<void>
}>({ data: {}, loading: true, refetch: async () => {} })

export function useImages() {
  const ctx = useContext(ImagesContext)
  if (!ctx) throw new Error('useImages must be used within ImagesProvider')
  return ctx
}

export function ImagesProvider({ children }: { children: React.ReactNode }) {
  const { isPreview, previewImages, previewLoading } = usePreviewData()
  const [publicData, setPublicData] = useState<ImagesData>({})
  const [publicLoading, setPublicLoading] = useState(true)

  const fetchImages = useCallback(async () => {
    setPublicLoading(true)
    try {
      const result = await imageApi.getPublicImages()
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
      void fetchImages()
    }, 0)
    return () => window.clearTimeout(timer)
  }, [isPreview, previewImages, previewLoading, fetchImages])

  const data = isPreview ? (previewImages ?? {}) : publicData
  const loading = isPreview
    ? previewLoading && previewImages === null
    : publicLoading

  return (
    <ImagesContext.Provider value={{ data, loading, refetch: fetchImages }}>
      {children}
    </ImagesContext.Provider>
  )
}
