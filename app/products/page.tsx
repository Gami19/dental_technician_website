import type { Metadata } from 'next';
import { ProductsContent } from '@/components/ProductsContent';

export const metadata: Metadata = {
  title: '製品案内',
  description: 'CAD/CAM テレスコープ義歯を中心に、デンタル ラボ アクア の製品・技工サービスをご紹介します。',
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
