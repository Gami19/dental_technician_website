import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ImagesProvider } from '@/components/ImagesProvider';
import { ContentProvider } from '@/components/ContentProvider';

const inter = Inter({ subsets: ['latin'] });
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'デンタル ラボ AQUA - CAD/CAM テレスコープ義歯専門ラボ',
  description: 'CAD/CAMを活用した高精度テレスコープ義歯の専門ラボ。IOSデータ対応、デジタル技工コンサルティングサービスも提供。',
  keywords: 'テレスコープ義歯, CAD/CAM, 歯科技工, デジタル技工, コンサルティング',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        <ImagesProvider>
          <ContentProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ContentProvider>
        </ImagesProvider>
      </body>
    </html>
  );
}