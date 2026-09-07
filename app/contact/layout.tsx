import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '製作依頼、納期や料金に関するご相談はこちらからお問い合わせください。',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
