'use client';

import { MapPin, Phone, Mail, Clock, Award, Microscope, Monitor, Wrench } from 'lucide-react';
import { ImageByKey } from '@/components/ImageByKey';
import { useContent } from './ContentProvider';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

export function AboutContent() {
  const { data } = useContent();
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24"
        data-preview-section="about.hero"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span data-preview-key="about.hero.title">
                {c(data, 'about.hero.title', 'デンタル ラボ AQUA')}
              </span>
              <br />
              <span className="text-blue-200" data-preview-key="about.hero.subtitle">
                {c(data, 'about.hero.subtitle', 'ラボ紹介')}
              </span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed" data-preview-key="about.hero.description">
              {c(data, 'about.hero.description', '技術へのこだわりと、患者様への想いが詰まったラボです')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-preview-section="about.greeting">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImageByKey imageKey="about_greeting" alt="代表者" className="rounded-xl shadow-lg w-full max-w-md mx-auto" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="about.greeting.title">
                  {c(data, 'about.greeting.title', '代表者からのご挨拶')}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p data-preview-key="about.greeting.paragraph1">
                    {c(data, 'about.greeting.paragraph1', '当ラボのホームページをご覧いただき、誠にありがとうございます。代表の池上和宏と申します。')}
                  </p>
                  <p data-preview-key="about.greeting.paragraph2">
                    {c(data, 'about.greeting.paragraph2', '私は歯科技工士として25年間、常に「患者様に最高の笑顔を届けたい」という想いで技工物の製作に取り組んでまいりました。特にテレスコープ義歯については、インプラント治療が適用できない患者様にも、快適で機能的な補綴治療を提供できる素晴らしい技術だと確信しております。')}
                  </p>
                  <p data-preview-key="about.greeting.paragraph3">
                    {c(data, 'about.greeting.paragraph3', '近年のデジタル技術の進歩により、CAD/CAMを活用することで従来以上の精度と品質を実現できるようになりました。この技術を多くの歯科医院様、歯科技工士の皆様にお伝えし、共に歯科医療の発展に貢献したいと考えております。')}
                  </p>
                  <p data-preview-key="about.greeting.paragraph4">
                    {c(data, 'about.greeting.paragraph4', 'お困りのことがございましたら、どのようなことでもお気軽にご相談ください。皆様との出会いを心よりお待ちしております。')}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-gray-900" data-preview-key="about.greeting.name">
                    {c(data, 'about.greeting.name', '池上 和宏')}
                  </div>
                  <div className="text-blue-600 font-semibold" data-preview-key="about.greeting.role">
                    {c(data, 'about.greeting.role', 'CEO・歯科技工士')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-preview-section="about.lab_info">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="about.lab_info.title">
              {c(data, 'about.lab_info.title', 'ラボ概要')}
            </h2>
            <p className="text-xl text-gray-600" data-preview-key="about.lab_info.subtitle">
              {c(data, 'about.lab_info.subtitle', '私たちの基本情報をご紹介します')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" data-preview-key="about.lab_info.basic_title">
                    {c(data, 'about.lab_info.basic_title', '基本情報')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">ラボ名</div>
                        <div className="text-gray-600" data-preview-key="about.lab_info.lab_name">
                          {c(data, 'about.lab_info.lab_name', 'デンタル ラボ AQUA')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">代表者</div>
                        <div className="text-gray-600" data-preview-key="about.lab_info.representative">
                          {c(data, 'about.lab_info.representative', '池上 和宏（歯科技工士）')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">所在地</div>
                        <div className="text-gray-600 whitespace-pre-line" data-preview-key="about.lab_info.address">
                          {c(data, 'about.lab_info.address', '〒860-0048\n熊本県熊本市西区池上町１１２８−１３')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">TEL / FAX</div>
                        <div className="text-gray-600" data-preview-key="about.lab_info.tel">
                          {c(data, 'about.lab_info.tel', 'TEL: 096-329-2426')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600" data-preview-key="about.lab_info.email">
                          {c(data, 'about.lab_info.email', 'info@precision-lab.jp')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">営業時間</div>
                        <div className="text-gray-600 whitespace-pre-line" data-preview-key="about.lab_info.hours">
                          {c(data, 'about.lab_info.hours', '平日 9:00〜18:00\n土曜 9:00〜13:00\n日祝日 休業')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" data-preview-key="about.lab_info.services_title">
                    {c(data, 'about.lab_info.services_title', '主要サービス')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700" data-preview-key="about.lab_info.service1">
                        {c(data, 'about.lab_info.service1', 'テレスコープ義歯およびCAD/CAM')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700" data-preview-key="about.lab_info.service2">
                        {c(data, 'about.lab_info.service2', 'IOSデータ対応デジタル技工')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-preview-section="about.equipment">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="about.equipment.title">
              {c(data, 'about.equipment.title', '設備紹介')}
            </h2>
            <p className="text-xl text-gray-600" data-preview-key="about.equipment.subtitle">
              {c(data, 'about.equipment.subtitle', '最新の機器により、高品質な技工物を製作しています')}
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Monitor className="text-blue-600" size={32} />
                    <h3 className="text-xl font-bold text-gray-900" data-preview-key={`about.equipment.equipment${n}_title`}>
                      {c(data, `about.equipment.equipment${n}_title`, '')}
                    </h3>
                  </div>
                  <ImageByKey
                    imageKey={n === 1 ? 'about_equipment_cad' : n === 2 ? 'about_equipment_cam' : n === 3 ? 'about_equipment_scanner' : n === 4 ? 'about_equipment_meter' : n === 5 ? 'about_equipment_furnace' : 'about_equipment_quality'}
                    alt={c(data, `about.equipment.equipment${n}_title`, '')}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-2">
                    <div className="font-semibold text-gray-900" data-preview-key={`about.equipment.equipment${n}_product`}>
                      {c(data, `about.equipment.equipment${n}_product`, '')}
                    </div>
                    <p className="text-gray-600 text-sm" data-preview-key={`about.equipment.equipment${n}_description`}>
                      {c(data, `about.equipment.equipment${n}_description`, '')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
