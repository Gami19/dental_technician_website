'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { imageApi, type PublicImage } from '@/lib/api'

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
    fetchImages()
  }, [fetchImages])

  return (
    <ImagesContext.Provider value={{ data, loading, refetch: fetchImages }}>
      {children}
    </ImagesContext.Provider>
  )
}
