'use client'

import { useImages } from './ImagesProvider'
import type { ImageKey } from '@/lib/image-keys'

type ImageByKeyProps = {
  imageKey: ImageKey
  alt?: string
  className?: string
  /** 画像がない場合のフォールバックURL */
  fallbackSrc?: string
  /** 背景画像として使う場合 */
  asBackground?: boolean
}

/**
 * API から取得した key に対応する画像を表示するクライアントコンポーネント。
 * 読み込み中・画像がない場合はフォールバックまたはプレースホルダーを表示。
 */
export function ImageByKey({
  imageKey,
  alt: altOverride,
  className = '',
  fallbackSrc,
  asBackground = false,
}: ImageByKeyProps) {
  const { data, loading } = useImages()
  const img = data[imageKey]
  const url = img?.url ?? fallbackSrc ?? ''
  const alt = altOverride ?? img?.alt ?? ''

  if (loading && !fallbackSrc) {
    return (
      <div
        className={`animate-pulse bg-gray-200 rounded ${className}`}
        data-preview-image-key={imageKey}
        aria-hidden
      />
    )
  }

  if (!url) {
    return (
      <div
        className={`bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm ${className}`}
        data-preview-image-key={imageKey}
        aria-hidden
      >
        画像なし
      </div>
    )
  }

  if (asBackground) {
    return (
      <div
        className={`bg-cover bg-center ${className}`}
        style={{ backgroundImage: `url(${url})` }}
        data-preview-image-key={imageKey}
        role="img"
        aria-label={alt || undefined}
      />
    )
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      data-preview-image-key={imageKey}
    />
  )
}
