import type { Metadata } from 'next';
import { AboutContent } from '@/components/AboutContent';

export const metadata: Metadata = {
  title: '会社概要',
  description: 'デンタル ラボ アクア の理念、対応内容、デジタル技工への取り組みをご紹介します。',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
