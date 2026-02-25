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
  const [data, setData] = useState<ImagesData>({})
  const [loading, setLoading] = useState(true)

  const fetchImages = useCallback(async () => {
    setLoading(true)
    try {
      const result = await imageApi.getPublicImages()
      setData(result)
    } catch {
      setData({})
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isPreview) {
      if (previewImages !== null) {
        setData(previewImages)
        setLoading(false)
      } else if (!previewLoading) {
        setData({})
        setLoading(false)
      } else {
        setLoading(true)
      }
    } else {
      fetchImages()
    }
  }, [isPreview, previewImages, previewLoading, fetchImages])

  return (
    <ImagesContext.Provider value={{ data, loading, refetch: fetchImages }}>
      {children}
    </ImagesContext.Provider>
  )
}
