import Hero from '@/components/Hero';
import { Announcements } from '@/components/Annoucements';
import { HomeContent } from '@/components/HomeContent';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeContent />
      <Announcements />
    </div>
  );
}