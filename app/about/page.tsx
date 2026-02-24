import { MapPin, Phone, Mail, Clock, Award, Microscope, Monitor, Wrench } from 'lucide-react';
import { ImageByKey } from '@/components/ImageByKey';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              デンタル ラボ AQUA<br />
              <span className="text-blue-200">ラボ紹介</span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              技術へのこだわりと、患者様への想いが詰まったラボです
            </p>
          </div>
        </div>
      </section>

      {/* ご挨拶 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImageByKey
                  imageKey="about_greeting"
                  alt="代表者"
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">代表者からのご挨拶</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    当ラボのホームページをご覧いただき、誠にありがとうございます。
                    代表の池上和宏と申します。
                  </p>
                  <p>
                    私は歯科技工士として25年間、常に「患者様に最高の笑顔を届けたい」という想いで
                    技工物の製作に取り組んでまいりました。特にテレスコープ義歯については、
                    インプラント治療が適用できない患者様にも、快適で機能的な補綴治療を
                    提供できる素晴らしい技術だと確信しております。
                  </p>
                  <p>
                    近年のデジタル技術の進歩により、CAD/CAMを活用することで
                    従来以上の精度と品質を実現できるようになりました。
                    この技術を多くの歯科医院様、歯科技工士の皆様にお伝えし、
                    共に歯科医療の発展に貢献したいと考えております。
                  </p>
                  <p>
                    お困りのことがございましたら、どのようなことでもお気軽にご相談ください。
                    皆様との出会いを心よりお待ちしております。
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-gray-900">池上 和宏</div>
                  <div className="text-blue-600 font-semibold">CEO・歯科技工士</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ラボ概要 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ラボ概要</h2>
            <p className="text-xl text-gray-600">私たちの基本情報をご紹介します</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">基本情報</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">ラボ名</div>
                        <div className="text-gray-600">デンタル ラボ AQUA</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">代表者</div>
                        <div className="text-gray-600">池上 和宏（歯科技工士）</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">所在地</div>
                        <div className="text-gray-600">
                          〒860-0048<br />
                          熊本県熊本市西区池上町１１２８−１３<br />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">TEL / FAX</div>
                        <div className="text-gray-600">
                          TEL: 096-329-2426<br />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">info@precision-lab.jp</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="text-blue-600 mt-1" size={24} />
                      <div>
                        <div className="font-semibold text-gray-900">営業時間</div>
                        <div className="text-gray-600">
                          平日 9:00〜18:00<br />
                          土曜 9:00〜13:00<br />
                          日祝日 休業
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gray-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">主要サービス</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">テレスコープ義歯およびCAD/CAM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">IOSデータ対応デジタル技工</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 設備紹介 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">設備紹介</h2>
            <p className="text-xl text-gray-600">最新の機器により、高品質な技工物を製作しています</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Monitor className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">CADソフトウェア</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_cad"
                  alt="CADソフトウェア"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">exocad DentalCAD</div>
                  <p className="text-gray-600 text-sm">
                    業界標準のCADソフトウェアで、精密な設計を行います。
                    テレスコープ義歯の複雑な構造も正確に設計可能です。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Wrench className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">CAM（切削機）</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_cam"
                  alt="CAM切削機"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Roland DWX-52DCi</div>
                  <p className="text-gray-600 text-sm">
                    高精度5軸切削機により、ミクロン単位の精密加工を実現。
                    チタンからジルコニアまで、あらゆる材料に対応します。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Microscope className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">3Dスキャナー</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_scanner"
                  alt="3Dスキャナー"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">3Shape E4</div>
                  <p className="text-gray-600 text-sm">
                    高解像度3Dスキャナーで、印象の精密なデジタル化を行います。
                    IOSデータとの統合により、完全デジタルワークフローを実現。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">測定機器</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_meter"
                  alt="測定機器"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">デジタルマイクロメーター</div>
                  <p className="text-gray-600 text-sm">
                    完成した技工物の精度を厳密にチェック。
                    設計値との誤差をμm単位で検証し、品質を保証します。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Wrench className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">焼成炉</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_furnace"
                  alt="焼成炉"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">Programat P700</div>
                  <p className="text-gray-600 text-sm">
                    セラミックの焼成に最適化された高精度炉。
                    プログラム制御により、安定した品質を実現します。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Monitor className="text-blue-600" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">品質管理システム</h3>
                </div>
                <ImageByKey
                  imageKey="about_equipment_quality"
                  alt="品質管理システム"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">デジタル記録システム</div>
                  <p className="text-gray-600 text-sm">
                    全ての製作工程をデジタル記録。
                    トレーサビリティを確保し、継続的な品質改善を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}