'use client';

import { CheckCircle, Monitor, Cog, Clock, Award, Microscope } from 'lucide-react';
import Link from 'next/link';
import { ImageByKey } from '@/components/ImageByKey';
import { useContent } from './ContentProvider';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

export function ProductsContent() {
  const { data } = useContent();
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24"
        data-preview-section="products.hero"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span data-preview-key="products.hero.title_line1">
                {c(data, 'products.hero.title_line1', 'CAD/CAMによる高精度')}
              </span>
              <br />
              <span className="text-blue-200" data-preview-key="products.hero.title_line2">
                {c(data, 'products.hero.title_line2', 'テレスコープ義歯')}
              </span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed" data-preview-key="products.hero.subtitle">
              {c(data, 'products.hero.subtitle', '国内でも製作者がほとんどいない希少な技術力で、インプラントに代わる新しい選択肢をご提供します。')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-preview-section="products.telescope">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="products.telescope.section_title">
                {c(data, 'products.telescope.section_title', 'テレスコープ義歯とは？')}
              </h2>
              <p className="text-xl text-gray-600" data-preview-key="products.telescope.section_subtitle">
                {c(data, 'products.telescope.section_subtitle', '二重冠構造により、確実な固定力と取り外し可能な利便性を両立した義歯システムです')}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <ImageByKey imageKey="products_telescope" alt="テレスコープ義歯の構造" className="rounded-xl shadow-lg w-full" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-preview-key="products.telescope.structure_title">
                  {c(data, 'products.telescope.structure_title', '基本構造と仕組み')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2"><Cog className="text-blue-600" size={20} /></div>
                    <div>
                      <h4 className="font-semibold text-gray-900" data-preview-key="products.telescope.inner_cap_title">
                        {c(data, 'products.telescope.inner_cap_title', '内冠（インナーキャップ）')}
                      </h4>
                      <p className="text-gray-600" data-preview-key="products.telescope.inner_cap_desc">
                        {c(data, 'products.telescope.inner_cap_desc', '残存歯に装着する内側の冠')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2"><Cog className="text-blue-600" size={20} /></div>
                    <div>
                      <h4 className="font-semibold text-gray-900" data-preview-key="products.telescope.outer_cap_title">
                        {c(data, 'products.telescope.outer_cap_title', '外冠（アウターキャップ）')}
                      </h4>
                      <p className="text-gray-600" data-preview-key="products.telescope.outer_cap_desc">
                        {c(data, 'products.telescope.outer_cap_desc', '義歯と一体化された外側の冠')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2"><Microscope className="text-blue-600" size={20} /></div>
                    <div>
                      <h4 className="font-semibold text-gray-900" data-preview-key="products.telescope.precision_title">
                        {c(data, 'products.telescope.precision_title', '精密嵌合')}
                      </h4>
                      <p className="text-gray-600" data-preview-key="products.telescope.precision_desc">
                        {c(data, 'products.telescope.precision_desc', '二つの冠の精密な嵌合により確実な固定を実現')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">インプラントとの比較</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">項目</th>
                      <th className="text-center py-4 px-4 font-semibold text-blue-600">テレスコープ義歯</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-600">インプラント</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 font-medium">外科手術</td>
                      <td className="py-4 px-4 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">不要</span></td>
                      <td className="py-4 px-4 text-center"><span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">必要</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">治療期間</td>
                      <td className="py-4 px-4 text-center text-green-600 font-medium">2-3週間</td>
                      <td className="py-4 px-4 text-center text-gray-600">3-6ヶ月</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">適用症例</td>
                      <td className="py-4 px-4 text-center text-green-600 font-medium">幅広い</td>
                      <td className="py-4 px-4 text-center text-gray-600">限定的</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">メンテナンス</td>
                      <td className="py-4 px-4 text-center text-green-600 font-medium">容易</td>
                      <td className="py-4 px-4 text-center text-gray-600">専門的</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50" data-preview-section="products.reasons">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="products.reasons.title">
              {c(data, 'products.reasons.title', '当ラボが選ばれる理由')}
            </h2>
            <p className="text-xl text-gray-600" data-preview-key="products.reasons.subtitle">
              {c(data, 'products.reasons.subtitle', '圧倒的な技術力と豊富な経験で、最高品質をお約束します')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4"><Award size={48} /></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" data-preview-key="products.reasons.reason1_title">
                {c(data, 'products.reasons.reason1_title', '圧倒的な精度と適合性')}
              </h3>
              <p className="text-gray-600 mb-6" data-preview-key="products.reasons.reason1_text">
                {c(data, 'products.reasons.reason1_text', 'CAD（歯科設計ソフト）による精密な設計プロセスと、CAM（切削機械）によるミクロン単位の加工技術を組み合わせ、完璧な適合性を実現します。')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4"><Monitor size={48} /></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" data-preview-key="products.reasons.reason2_title">
                {c(data, 'products.reasons.reason2_title', 'IOSデータに完全対応')}
              </h3>
              <p className="text-gray-600 mb-6" data-preview-key="products.reasons.reason2_text">
                {c(data, 'products.reasons.reason2_text', '口腔内スキャナーからのデータ受付が可能で、デジタルワークフローの利便性を最大限に活用できます。従来の印象採得の手間を大幅に削減します。')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4"><Clock size={48} /></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" data-preview-key="products.reasons.reason3_title">
                {c(data, 'products.reasons.reason3_title', '豊富な経験と実績')}
              </h3>
              <p className="text-gray-600 mb-6" data-preview-key="products.reasons.reason3_text">
                {c(data, 'products.reasons.reason3_text', 'これまで数多くのテレスコープ義歯を手掛け、難症例にも対応してきた実績があります。常に最新技術を取り入れ、品質向上に努めています。')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-preview-section="products.flow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="products.flow.title">
              {c(data, 'products.flow.title', '製作の流れ')}
            </h2>
            <p className="text-xl text-gray-600" data-preview-key="products.flow.subtitle">
              {c(data, 'products.flow.subtitle', 'ご依頼から納品までのステップをご紹介します')}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: '01', keyTitle: 'step1_title', keyDesc: 'step1_desc', icon: <Monitor size={32} /> },
                { step: '02', keyTitle: 'step2_title', keyDesc: 'step2_desc', icon: <Cog size={32} /> },
                { step: '03', keyTitle: 'step3_title', keyDesc: 'step3_desc', icon: <Microscope size={32} /> },
                { step: '04', keyTitle: 'step4_title', keyDesc: 'step4_desc', icon: <CheckCircle size={32} /> },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg">{item.step}</div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-blue-600">{item.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900" data-preview-key={`products.flow.${item.keyTitle}`}>
                          {c(data, `products.flow.${item.keyTitle}`, '')}
                        </h3>
                      </div>
                      <p className="text-gray-600" data-preview-key={`products.flow.${item.keyDesc}`}>
                        {c(data, `products.flow.${item.keyDesc}`, '')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-preview-section="products.price">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="products.price.title">
              {c(data, 'products.price.title', '料金について')}
            </h2>
            <p className="text-xl text-gray-600 mb-8" data-preview-key="products.price.subtitle">
              {c(data, 'products.price.subtitle', '料金は症例の複雑さや使用材料により異なります。まずはお気軽にお問い合わせください。')}
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4" data-preview-key="products.price.box_title">
                {c(data, 'products.price.box_title', 'お見積もり無料')}
              </h3>
              <p className="text-gray-600 mb-6" data-preview-key="products.price.box_text">
                {c(data, 'products.price.box_text', '詳細な症例情報をお聞かせいただければ、正確なお見積もりをご提供いたします。料金についてのご質問もお気軽にどうぞ。')}
              </p>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block">
                <span data-preview-key="products.price.btn_text">
                  {c(data, 'products.price.btn_text', 'お問い合わせはこちら')}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
