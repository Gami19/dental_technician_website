import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Microscope, Cpu, Wrench, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* 強みセクション */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">私たちの強み</h2>
            <p className="text-xl text-gray-600">他にはない技術力と専門性で、最高品質の歯科技工物をお届けします</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award size={48} />}
              title="希少な技術力"
              description="国内でも製作者がほとんどいないテレスコープ義歯の専門ラボとして、豊富な経験と実績を誇ります。"
            />
            <FeatureCard
              icon={<Users size={48} />}
              title="インプラントに代わる選択肢"
              description="外科手術を伴わない、患者様への負担が少ない補綴治療をご提案。より多くの患者様に適用可能です。"
            />
            <FeatureCard
              icon={<Cpu size={48} />}
              title="デジタル技工への対応"
              description="IOS（口腔内スキャナー）データに対応し、CAD/CAMで高精度な技工物を製作いたします。"
            />
          </div>
        </div>
      </section>

      {/* CAD/CAM技術紹介 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                CAD/CAMが実現する<br />
                <span className="text-blue-600">ミクロン単位の精度</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                最新のCAD（歯科設計ソフトウェア）とCAM（切削機械）を組み合わせることで、
                従来の手作業では不可能だった精密な加工を実現。
                患者様一人ひとりの口腔内状況に完璧に適合するテレスコープ義歯を製作いたします。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Microscope className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">精密設計</h4>
                    <p className="text-gray-600">3Dデータによる詳細な解析と設計</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">高精度加工</h4>
                    <p className="text-gray-600">ミクロン単位での切削加工技術</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">短納期対応</h4>
                    <p className="text-gray-600">デジタル化により製作期間を大幅短縮</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
                alt="CAD/CAM Technology"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お知らせ</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    重要
                  </span>
                  <h3 className="text-lg font-semibold mt-2">年末年始休業のお知らせ</h3>
                  <p className="text-gray-600 mt-1">12月29日〜1月3日まで休業いたします</p>
                </div>
                <span className="text-gray-500 text-sm">2024.12.15</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    学会
                  </span>
                  <h3 className="text-lg font-semibold mt-2">日本歯科技工学会で発表いたします</h3>
                  <p className="text-gray-600 mt-1">「CAD/CAMを活用したテレスコープ義歯の精度向上について」</p>
                </div>
                <span className="text-gray-500 text-sm">2024.11.28</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl mb-8 opacity-90">
            製品の詳細、コンサルティングサービス、料金についてなど、
            どのようなことでもお答えいたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              製品紹介を見る
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}