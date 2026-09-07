import './globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PreviewDataProvider } from '@/components/PreviewDataProvider';
import { ImagesProvider } from '@/components/ImagesProvider';
import { ContentProvider } from '@/components/ContentProvider';

const inter = Inter({ subsets: ['latin'] });
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dentallab-aqua.com'),
  title: {
    default: 'デンタル ラボ アクア - CAD/CAM テレスコープ義歯専門ラボ',
    template: '%s | デンタル ラボ アクア',
  },
  description: 'CAD/CAMを活用した高精度テレスコープ義歯の専門ラボ',
  keywords: 'テレスコープ義歯, CAD/CAM, 歯科技工, デジタル技工',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        <PreviewDataProvider>
          <ImagesProvider>
            <ContentProvider>
              <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            </ContentProvider>
          </ImagesProvider>
        </PreviewDataProvider>
      </body>
    </html>
  );
}