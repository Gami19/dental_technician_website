'use client';

import { useContent } from './ContentProvider';
import FeatureCard from './FeatureCard';
import { ImageByKey } from './ImageByKey';
import { CardIcon, featureGridClassName } from './CardIcon';
import {
  resolveCardList,
  type CardItem,
  type FeatureCardItem,
  type IconListItem,
} from '@/lib/card-list';
import Link from 'next/link';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

function isFeatureCardItem(item: CardItem): item is FeatureCardItem {
  return 'description' in item && !('text' in item) && !('imageKey' in item);
}

function isIconListItem(item: CardItem): item is IconListItem {
  return 'text' in item;
}

export function HomeContent() {
  const { data } = useContent();
  const features = resolveCardList('home.features', data);
  const cadcamPoints = resolveCardList('home.cadcam', data);

  return (
    <>
      {features.showSection && (
        <section className="py-20 bg-gray-50" data-preview-section="home.features">
          <div className="container mx-auto px-4">
            <div className={`text-center ${features.showHeadingOnly ? '' : 'mb-16'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4" data-preview-key="home.features.title">
                {c(data, 'home.features.title', '私たちの強み')}
              </h2>
              <p className="text-xl text-gray-600" data-preview-key="home.features.subtitle">
                {c(data, 'home.features.subtitle', '他にはない技術力と専門性で、最高品質の歯科技工物をお届けします')}
              </p>
            </div>
            {!features.showHeadingOnly && (
              <div className={featureGridClassName(features.items.length)}>
                {features.items.map((item) => {
                  if (!isFeatureCardItem(item)) return null;
                  return (
                    <FeatureCard
                      key={item.id}
                      icon={<CardIcon name={item.icon} size={48} />}
                      title={item.title}
                      description={item.description}
                      titlePreviewKey={`home.features.item.${item.id}.title`}
                      descriptionPreviewKey={`home.features.item.${item.id}.description`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 bg-white" data-preview-section="home.cadcam">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span data-preview-key="home.cadcam.title_line1">
                  {c(data, 'home.cadcam.title_line1', 'CAD/CAMが実現する')}
                </span>
                <br />
                <span className="text-blue-600" data-preview-key="home.cadcam.title_line2">
                  {c(data, 'home.cadcam.title_line2', 'ミクロン単位の精度')}
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-preview-key="home.cadcam.paragraph">
                {c(data, 'home.cadcam.paragraph', '最新のCAD（歯科設計ソフトウェア）とCAM（切削機械）を組み合わせることで、従来の手作業では不可能だった精密な加工を実現。患者様一人ひとりの口腔内状況に完璧に適合するテレスコープ義歯を製作いたします。')}
              </p>
              {/* ポイントリスト: 0枚かつ hide のときは非表示。heading のときはリストのみ省略 */}
              {cadcamPoints.items.length > 0 && (
                <div className="space-y-4">
                  {cadcamPoints.items.map((item) => {
                    if (!isIconListItem(item)) return null;
                    return (
                      <div key={item.id} className="flex items-start space-x-3">
                        <CardIcon name={item.icon} className="text-blue-600 mt-1" size={24} />
                        <div>
                          <h4
                            className="font-semibold text-gray-900"
                            data-preview-key={`home.cadcam.item.${item.id}.title`}
                          >
                            {item.title}
                          </h4>
                          <p
                            className="text-gray-600"
                            data-preview-key={`home.cadcam.item.${item.id}.text`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="relative">
              <ImageByKey
                imageKey="home_cadcam"
                alt="CAD/CAM Technology"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white" data-preview-section="home.cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-preview-key="home.cta.title">
            {c(data, 'home.cta.title', 'まずはお気軽にご相談ください')}
          </h2>
          <p className="text-xl mb-8 opacity-90" data-preview-key="home.cta.subtitle">
            {c(data, 'home.cta.subtitle', '製品の詳細、料金についてなど、どのようなことでもお答えいたします。')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <span data-preview-key="home.cta.btn_products">
                {c(data, 'home.cta.btn_products', '製品紹介を見る')}
              </span>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all"
            >
              <span data-preview-key="home.cta.btn_contact">
                {c(data, 'home.cta.btn_contact', 'お問い合わせ')}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
