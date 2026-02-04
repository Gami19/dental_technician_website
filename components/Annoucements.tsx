'use client';

import { useEffect, useState } from 'react';
import { announcementApi, Announcement } from '@/lib/api';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

const TYPE_LABELS: Record<string, string> = {
  general: '通常',
  holiday: '休業日',
  special: '特別営業',
};

export function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const data = await announcementApi.getPublicAnnouncements();
        setAnnouncements(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError('お知らせの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お知らせ</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            読み込み中...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お知らせ</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center text-red-600">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (announcements.length === 0) {
    return (
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お知らせ</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            現在お知らせはありません
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">お知らせ</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Badge
                    variant={
                      announcement.type === 'holiday'
                        ? 'destructive'
                        : announcement.type === 'special'
                          ? 'default'
                          : 'secondary'
                    }
                    className="rounded-full"
                  >
                    {TYPE_LABELS[announcement.type ?? 'general'] ?? '通常'}
                  </Badge>
                  <h3 className="text-lg font-semibold mt-2 text-gray-900">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 mt-1 whitespace-pre-wrap">
                    {announcement.content}
                  </p>
                </div>
                <span className="text-gray-500 text-sm ml-4 whitespace-nowrap">
                  {format(new Date(announcement.createdAt), 'yyyy.MM.dd')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}