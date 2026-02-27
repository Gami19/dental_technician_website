"use client";

import { useState, useEffect, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useImages } from './ImagesProvider';
import { useContent } from './ContentProvider';

const SLIDE_IMAGE_KEYS = ['hero_slide_1', 'hero_slide_2', 'hero_slide_3'] as const;
const FALLBACK_IMAGES = [
  "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg",
  "https://images.pexels.com/photos/7659411/pexels-photo-7659411.jpeg",
  "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
];
const SLIDE_TEXT_KEYS = [
  { title: 'home.hero.slide1_title', subtitle: 'home.hero.slide1_subtitle', description: 'home.hero.slide1_description' },
  { title: 'home.hero.slide2_title', subtitle: 'home.hero.slide2_subtitle', description: 'home.hero.slide2_description' },
  { title: 'home.hero.slide3_title', subtitle: 'home.hero.slide3_subtitle', description: 'home.hero.slide3_description' },
];
const SLIDE_DEFAULT_TEXTS = [
  { title: 'CAD/CAMが可能にする、適合精度。', subtitle: 'テレスコープ義歯を、あなたの医院へ。', description: '国内でも製作者がほとんどいない高精度テレスコープ義歯の製作可能なラボです。' },
  { title: 'インプラントに代わる選択肢', subtitle: '患者様への負担を最小限に', description: '外科手術を伴わない、安全で確実な補綴治療をご提案します。' },
  { title: 'IOSにも対応したデジタルソリューション', subtitle: '最新技術で最高の結果を', description: '口腔内スキャナーデータに完全対応したデジタルワークフローを提供します。' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data: imagesData } = useImages();
  const { data: contentData } = useContent();

  const slides = useMemo(() =>
    SLIDE_IMAGE_KEYS.map((imageKey, i) => ({
      title: contentData[SLIDE_TEXT_KEYS[i].title] || SLIDE_DEFAULT_TEXTS[i].title,
      subtitle: contentData[SLIDE_TEXT_KEYS[i].subtitle] || SLIDE_DEFAULT_TEXTS[i].subtitle,
      description: contentData[SLIDE_TEXT_KEYS[i].description] || SLIDE_DEFAULT_TEXTS[i].description,
      image: imagesData[imageKey]?.url ?? FALLBACK_IMAGES[i],
    })),
    [imagesData, contentData]
  );
  const ctaLabel = contentData['home.hero.cta_label'] || '製品について詳しく';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-preview-section="home.hero"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        data-preview-image-keys="hero_slide_1 hero_slide_2 hero_slide_3"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          data-preview-keys="home.hero.slide1_title home.hero.slide2_title home.hero.slide3_title"
        >
          {slides[currentSlide].title}
        </h1>
        <p
          className="text-xl md:text-2xl mb-6 text-blue-200"
          data-preview-keys="home.hero.slide1_subtitle home.hero.slide2_subtitle home.hero.slide3_subtitle"
        >
          {slides[currentSlide].subtitle}
        </p>
        <p
          className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
          data-preview-keys="home.hero.slide1_description home.hero.slide2_description home.hero.slide3_description"
        >
          {slides[currentSlide].description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <span data-preview-key="home.hero.cta_label">{ctaLabel}</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}