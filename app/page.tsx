import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Announcements } from '@/components/Annoucements';
import { ImageByKey } from '@/components/ImageByKey';
import { HomeContent } from '@/components/HomeContent';
import { Microscope, Wrench, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeContent />
      <Announcements />
    </div>
  );
}