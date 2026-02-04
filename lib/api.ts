export interface Announcement {
    id: string
    title: string
    content: string
    createdAt: string
    updatedAt: string
}

export interface ApiResponse<T> {
    success: boolean
    data?: T
    error?: string
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

