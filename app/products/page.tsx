import { CheckCircle, Monitor, Cog, Clock, Award, Microscope } from 'lucide-react';
import Link from 'next/link';
import { ImageByKey } from '@/components/ImageByKey';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              CAD/CAMによる高精度<br />
              <span className="text-blue-200">テレスコープ義歯</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              国内でも製作者がほとんどいない希少な技術力で、
              インプラントに代わる新しい選択肢をご提供します。
            </p>
          </div>
        </div>
      </section>

      {/* テレスコープ義歯とは */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">テレスコープ義歯とは？</h2>
              <p className="text-xl text-gray-600">
                二重冠構造により、確実な固定力と取り外し可能な利便性を両立した義歯システムです
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <ImageByKey
                  imageKey="products_telescope"
                  alt="テレスコープ義歯の構造"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">基本構造と仕組み</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Cog className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">内冠（インナーキャップ）</h4>
                      <p className="text-gray-600">残存歯に装着する内側の冠</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Cog className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">外冠（アウターキャップ）</h4>
                      <p className="text-gray-600">義歯と一体化された外側の冠</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Microscope className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">精密嵌合</h4>
                      <p className="text-gray-600">二つの冠の精密な嵌合により確実な固定を実現</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* インプラントとの比較 */}
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
                      <td className="py-4 px-4 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">不要</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">必要</span>
                      </td>
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

      {/* 選ばれる理由 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">当ラボが選ばれる理由</h2>
            <p className="text-xl text-gray-600">圧倒的な技術力と豊富な経験で、最高品質をお約束します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">圧倒的な精度と適合性</h3>
              <p className="text-gray-600 mb-6">
                CAD（歯科設計ソフト）による精密な設計プロセスと、
                CAM（切削機械）によるミクロン単位の加工技術を組み合わせ、
                完璧な適合性を実現します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Monitor size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">IOSデータに完全対応</h3>
              <p className="text-gray-600 mb-6">
                口腔内スキャナーからのデータ受付が可能で、
                デジタルワークフローの利便性を最大限に活用できます。
                従来の印象採得の手間を大幅に削減します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">豊富な経験と実績</h3>
              <p className="text-gray-600 mb-6">
                これまで数多くのテレスコープ義歯を手掛け、
                難症例にも対応してきた実績があります。
                常に最新技術を取り入れ、品質向上に努めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 製作の流れ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">製作の流れ</h2>
            <p className="text-xl text-gray-600">ご依頼から納品までのステップをご紹介します</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "ご依頼・データ送付",
                  description: "IOSデータまたは印象をお送りください。オンラインでの受付も可能です。",
                  icon: <Monitor size={32} />
                },
                {
                  step: "02", 
                  title: "CAD設計",
                  description: "3Dデータによる詳細な解析と精密な設計を行います。必要に応じて設計内容をご確認いただきます。",
                  icon: <Cog size={32} />
                },
                {
                  step: "03",
                  title: "CAM製作",
                  description: "最新の切削機械により、ミクロン単位の精度で加工を行います。品質管理も徹底しています。",
                  icon: <Microscope size={32} />
                },
                {
                  step: "04",
                  title: "最終チェック・納品",
                  description: "厳格な品質チェックを経て納品いたします。アフターサポートも充実しています。",
                  icon: <CheckCircle size={32} />
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="text-blue-600">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金について */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">料金について</h2>
            <p className="text-xl text-gray-600 mb-8">
              料金は症例の複雑さや使用材料により異なります。<br />
              まずはお気軽にお問い合わせください。
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">お見積もり無料</h3>
              <p className="text-gray-600 mb-6">
                詳細な症例情報をお聞かせいただければ、
                正確なお見積もりをご提供いたします。
                料金についてのご質問もお気軽にどうぞ。
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}