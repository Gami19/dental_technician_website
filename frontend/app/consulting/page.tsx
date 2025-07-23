import { Users, Lightbulb, Cog, BookOpen, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              歯科技工士・歯科医院向け<br />
              <span className="text-blue-200">コンサルティング</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              豊富な経験と専門知識を活かし、技術向上とビジネス成功をサポートします
            </p>
          </div>
        </div>
      </section>

      {/* お悩み解決セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">このようなお悩みはありませんか？</h2>
            <p className="text-xl text-gray-600">
              技術的な課題から経営面でのご相談まで、幅広くサポートいたします
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "CAD/CAM活用",
                description: "導入したが、うまく活用できていない",
                icon: <Cog className="text-red-500" size={32} />
              },
              {
                title: "テレスコープ義歯",
                description: "導入を検討しているが、ノウハウがない",
                icon: <Lightbulb className="text-red-500" size={32} />
              },
              {
                title: "品質向上",
                description: "自費診療の技工物のクオリティを上げたい",
                icon: <BookOpen className="text-red-500" size={32} />
              },
              {
                title: "デジタル化",
                description: "デジタルワークフローを構築したい",
                icon: <Users className="text-red-500" size={32} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                これらの課題を解決します！
              </h3>
              <p className="text-gray-700">
                豊富な経験と実績を基に、お客様に最適なソリューションをご提案いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">提供できるコンサルティング内容</h2>
            <p className="text-xl text-gray-600">専門性の高いサービスで、お客様の成功をサポートします</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Cog className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CAD/CAM導入・活用サポート</h3>
              </div>
              <p className="text-gray-600 mb-6">
                CAD/CAM機器の選定から導入、効果的な活用方法まで、
                トータルでサポートいたします。投資効果を最大化できるようご提案します。
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">機器選定コンサルティング</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">導入計画の策定支援</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">スタッフ教育・研修</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">運用最適化サポート</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Lightbulb className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">テレスコープ義歯の設計・製作指導</h3>
              </div>
              <p className="text-gray-600 mb-6">
                希少な技術であるテレスコープ義歯の設計・製作技術を、
                実践的な指導でお伝えします。基礎から応用まで段階的に学べます。
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">基礎理論の理解</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">設計手法の習得</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">製作技術の指導</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">症例検討・フィードバック</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">デジタルワークフローの構築支援</h3>
              </div>
              <p className="text-gray-600 mb-6">
                口腔内スキャナーから技工物完成まで、
                効率的なデジタルワークフローの構築をサポートします。
                業務効率化と品質向上を同時に実現します。
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">現状分析・課題抽出</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">最適フロー設計</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">システム統合支援</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">効果測定・改善提案</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <BookOpen className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">難症例へのアドバイス</h3>
              </div>
              <p className="text-gray-600 mb-6">
                これまでの豊富な経験を活かし、
                難症例への対応方法や技術的な課題解決をサポートします。
                個別の症例に応じたアドバイスを提供します。
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">症例分析・診断</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">治療計画の提案</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">技術的解決策の検討</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">継続的なフォローアップ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* コンサルタント紹介 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">コンサルタント紹介</h2>
            <p className="text-xl text-gray-600">豊富な経験と実績を持つ専門家がサポートします</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                    alt="代表コンサルタント"
                    className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover mb-6"
                  />
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">田中 健一</h3>
                  <p className="text-blue-600 font-semibold mb-4">代表・歯科技工士</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">経歴・資格</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 歯科技工士免許（1995年取得）</li>
                        <li>• CAD/CAM技術認定講師</li>
                        <li>• 日本歯科技工学会 専門認定技工士</li>
                        <li>• テレスコープ義歯製作歴 20年以上</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">実績・得意分野</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• テレスコープ義歯製作数 500症例以上</li>
                        <li>• CAD/CAM導入支援実績多数</li>
                        <li>• 歯科技工士向け講習会講師</li>
                        <li>• デジタル技工ワークフロー構築支援</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">メッセージ</h4>
                <p className="text-gray-600 leading-relaxed">
                  歯科技工の世界は常に進歩し続けています。新しい技術や材料が次々と登場する中で、
                  確実に成果を出すためには適切な知識と経験が不可欠です。
                  私の20年以上の経験を活かし、皆様の技術向上と事業成功をサポートいたします。
                  どのような課題でも、まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金・契約形態 */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">料金・契約形態</h2>
            <p className="text-xl text-gray-600">お客様のニーズに合わせて柔軟に対応いたします</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Phone className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">単発相談</h3>
                <p className="text-gray-600 text-sm mb-4">
                  個別の課題や疑問について、電話・オンラインでご相談いただけます
                </p>
                <div className="text-2xl font-bold text-blue-600">¥15,000〜</div>
                <div className="text-sm text-gray-500">60分あたり</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-blue-500">
                <BookOpen className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">技術指導パッケージ</h3>
                <p className="text-gray-600 text-sm mb-4">
                  特定技術の習得を目指す、3ヶ月集中指導プログラム
                </p>
                <div className="text-2xl font-bold text-blue-600">¥180,000〜</div>
                <div className="text-sm text-gray-500">3ヶ月コース</div>
                <div className="mt-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">人気</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Users className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">継続サポート</h3>
                <p className="text-gray-600 text-sm mb-4">
                  長期的なサポートで、持続的な成長をサポートします
                </p>
                <div className="text-2xl font-bold text-blue-600">¥50,000〜</div>
                <div className="text-sm text-gray-500">月額</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">まずは無料相談から</h3>
              <p className="text-gray-600 mb-6">
                内容に応じて個別にお見積もりいたします。<br />
                初回相談（30分）は無料ですので、まずはお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                  お問い合わせ
                </Link>
                <a 
                  href="tel:03-XXXX-XXXX" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
                >
                  電話で相談
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}