"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, Microscope, Cpu, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CAD/CAMが可能にする、適合精度。",
      subtitle: "テレスコープ義歯を、あなたの医院へ。",
      description: "国内でも製作者がほとんどいない高精度テレスコープ義歯の製作可能なラボです。",
      image: "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg"
    },
    {
      title: "インプラントに代わる選択肢",
      subtitle: "患者様への負担を最小限に",
      description: "外科手術を伴わない、安全で確実な補綴治療をご提案します。",
      image: "https://images.pexels.com/photos/7659411/pexels-photo-7659411.jpeg"
    },
    {
      title: "IOSにも対応したデジタルソリューション",
      subtitle: "最新技術で最高の結果を",
      description: "口腔内スキャナーデータに完全対応したデジタルワークフローを提供します。",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-blue-200">
          {slides[currentSlide].subtitle}
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {slides[currentSlide].description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/products" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2"
          >
            <span>製品について詳しく</span>
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