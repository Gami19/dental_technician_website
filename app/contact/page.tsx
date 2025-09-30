"use client";

import { useState } from 'react';
import { Send, Phone, Mail, Clock, CreditCard } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
    privacyAgreed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(result.message);
        // フォームをリセット
        setFormData({
          inquiryType: '',
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          message: '',
          privacyAgreed: false
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('送信中にエラーが発生しました。もう一度お試しください。');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              製品の製作依頼、コンサルティングのご相談など、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ情報 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Phone className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">お電話でのお問い合わせ</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">096-329-2426</div>
                <div className="text-sm text-gray-600">平日 9:00-18:00</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">メールでのお問い合わせ</h3>
                <div className="text-lg text-blue-600 mb-1">info@precision-lab.jp</div>
                <div className="text-sm text-gray-600">24時間受付</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <CreditCard className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">決済方法について</h3>
                <div className="text-sm text-gray-600">
                  クレジットカード決済<br />
                  銀行振込に対応
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">重要なお知らせ</h4>
                  <p className="text-gray-600 text-sm">
                    料金のお見積もり、決済方法につきましても、お問い合わせいただいた後、
                    担当者より個別にご連絡させていただきます。
                    製作内容や納期についてもお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <p className="text-xl text-gray-600">
                下記フォームに必要事項をご入力の上、送信してください
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* お問い合わせ種別 */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                    お問い合わせ種別 *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="products">製品について（テレスコープ義歯製作依頼など）</option>
                    <option value="consulting">コンサルティングについて</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                {/* 医院名・ラボ名 */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
                    医院名・ラボ名 *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：〇〇歯科医院"
                  />
                </div>

                {/* ご担当者名 */}
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-gray-900 mb-2">
                    ご担当者名 *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：info@example.com"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例：03-1234-5678"
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="具体的なご要望やご質問をお聞かせください。症例の詳細、納期のご希望、料金についてのご質問など、どのようなことでもお気軽にお書きください。"
                  />
                </div>

                {/* プライバシーポリシー同意 */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacyAgreed"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacyAgreed" className="text-sm text-gray-700">
                    <span className="font-semibold">プライバシーポリシーに同意する *</span>
                    <br />
                    お預かりした個人情報は、お問い合わせへの回答および当社サービスの案内のみに使用し、
                    第三者への提供は行いません。詳細は
                    <a href="#" className="text-blue-600 hover:underline">プライバシーポリシー</a>
                    をご確認ください。
                  </label>
                </div>

                {/* 送信ボタン */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={!formData.privacyAgreed}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
                  >
                    <Send size={20} />
                    <span>お問い合わせを送信</span>
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    * は必須項目です。送信後、2営業日以内にご回答いたします。
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">よくある質問</h2>
            <p className="text-xl text-gray-600">お問い合わせ前に、こちらもご確認ください</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "IOSデータはどのような形式で送付すればよいですか？",
                answer: "STL、PLY、OBJ形式に対応しております。主要なIOSメーカーのデータを受け付けておりますので、詳細はお問い合わせください。"
              },
              {
                question: "製作期間はどのくらいかかりますか？",
                answer: "症例にもよりますが、通常2-3週間での納品が可能です。お急ぎの場合はご相談ください。"
              },
              {
                question: "料金はどのように決まりますか？",
                answer: "症例の複雑さ、使用材料、納期などにより決定いたします。まずはお見積もりをご依頼ください。"
              },
              {
                question: "コンサルティングは遠方でも対応可能ですか？",
                answer: "はい、オンラインでのコンサルティングも行っております。全国どこからでも対応可能です。"
              },
              {
                question: "支払い方法はどのようなものがありますか？",
                answer: "クレジットカード決済、銀行振込に対応しております。分割払いについてもご相談ください。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-3 mt-0.5">Q</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600  ml-12">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">A</span>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}