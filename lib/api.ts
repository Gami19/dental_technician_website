export interface Announcement {
  id: string
  title: string
  content: string
  date?: string | null
  endDate?: string | null
  type?: string | null
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
}

export interface ContactFormData {
  inquiryType: string
  companyName: string
  contactName: string
  email: string
  phone?: string
  message: string
  privacyAgreed: boolean
  _hp?: string
}

// admin側のAPIベースURL
const ADMIN_API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export const announcementApi = {
    // 公開用お知らせ一覧取得
    getPublicAnnouncements: async (): Promise<Announcement[]> => {
        const response = await fetch(`${ADMIN_API_BASE_URL}/api/announcements/public`, {
          cache: 'no-store',
        })
        
        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Failed to fetch announcements')
        }
        
        const result: ApiResponse<Announcement[]> = await response.json()
        return result.data || []
      },
}

export interface PublicImage {
  url: string
  alt: string | null
}

export const imageApi = {
  getPublicImages: async (): Promise<Record<string, PublicImage>> => {
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL
    if (!baseUrl) return {}
    const response = await fetch(`${baseUrl}/api/images/public`, {
      cache: 'no-store',
    })
    if (!response.ok) return {}
    const result = await response.json()
    return result.data || {}
  },
}

export const contactApi = {
  submit: async (data: ContactFormData) => {
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL
    if (!baseUrl) throw new Error('API URL が設定されていません')
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    if (!result.success) {
      throw new Error(result.error || '送信に失敗しました')
    }
    return result
  },
}
