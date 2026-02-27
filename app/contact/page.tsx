"use client";

import { useState } from 'react';
import { Send, Phone, Mail, Clock, CreditCard } from 'lucide-react';
import { contactApi } from '@/lib/api';
import { useContent } from '@/components/ContentProvider';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

export default function ContactPage() {
  const { data: contentData } = useContent();
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
    privacyAgreed: false,
    _hp: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await contactApi.submit(formData);
      alert(result.message);
      setFormData({
        inquiryType: '',
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        message: '',
        privacyAgreed: false,
        _hp: '',
      });
    } catch (error) {
      alert(error instanceof Error ? error.message : '送信中にエラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
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
      <section
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24"
        data-preview-section="contact.hero"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              <span data-preview-key="contact.hero.title">
                {c(contentData, 'contact.hero.title', 'お問い合わせ')}
              </span>
            </h1>
            <p className="text-xl opacity-90 leading-relaxed" data-preview-key="contact.hero.subtitle">
              {c(contentData, 'contact.hero.subtitle', '製品の製作依頼、コンサルティングのご相談など、お気軽にお問い合わせください')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50" data-preview-section="contact.info">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Phone className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2" data-preview-key="contact.info.phone_title">
                  {c(contentData, 'contact.info.phone_title', 'お電話でのお問い合わせ')}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-1" data-preview-key="contact.info.phone_number">
                  {c(contentData, 'contact.info.phone_number', '096-329-2426')}
                </div>
                <div className="text-sm text-gray-600" data-preview-key="contact.info.phone_hours">
                  {c(contentData, 'contact.info.phone_hours', '平日 9:00-18:00')}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <Mail className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2" data-preview-key="contact.info.email_title">
                  {c(contentData, 'contact.info.email_title', 'メールでのお問い合わせ')}
                </h3>
                <div className="text-lg text-blue-600 mb-1" data-preview-key="contact.info.email_address">
                  {c(contentData, 'contact.info.email_address', 'info@precision-lab.jp')}
                </div>
                <div className="text-sm text-gray-600" data-preview-key="contact.info.email_note">
                  {c(contentData, 'contact.info.email_note', '24時間受付')}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                <CreditCard className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2" data-preview-key="contact.info.payment_title">
                  {c(contentData, 'contact.info.payment_title', '決済方法について')}
                </h3>
                <div className="text-sm text-gray-600 whitespace-pre-line" data-preview-key="contact.info.payment_text">
                  {c(contentData, 'contact.info.payment_text', 'クレジットカード決済\n銀行振込に対応')}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2" data-preview-key="contact.info.notice_title">
                    {c(contentData, 'contact.info.notice_title', '重要なお知らせ')}
                  </h4>
                  <p className="text-gray-600 text-sm" data-preview-key="contact.info.notice_text">
                    {c(contentData, 'contact.info.notice_text', '料金のお見積もり、決済方法につきましても、お問い合わせいただいた後、担当者より個別にご連絡させていただきます。製作内容や納期についてもお気軽にご相談ください。')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" data-preview-section="contact.form">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="contact.form.title">
                {c(contentData, 'contact.form.title', 'お問い合わせフォーム')}
              </h2>
              <p className="text-xl text-gray-600" data-preview-key="contact.form.subtitle">
                {c(contentData, 'contact.form.subtitle', '下記フォームに必要事項をご入力の上、送信してください')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="_hp">記入しないでください</label>
                  <input type="text" id="_hp" name="_hp" value={formData._hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_inquiry">
                      {c(contentData, 'contact.form.label_inquiry', 'お問い合わせ種別 *')}
                    </span>
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
                    <option value="products">{c(contentData, 'contact.form.option_products', '製品について（テレスコープ義歯製作依頼など）')}</option>
                    <option value="consulting">{c(contentData, 'contact.form.option_consulting', 'コンサルティングについて')}</option>
                    <option value="other">{c(contentData, 'contact.form.option_other', 'その他')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_company">
                      {c(contentData, 'contact.form.label_company', '医院名・ラボ名 *')}
                    </span>
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

                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_contact">
                      {c(contentData, 'contact.form.label_contact', 'ご担当者名 *')}
                    </span>
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

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_email">
                      {c(contentData, 'contact.form.label_email', 'メールアドレス *')}
                    </span>
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

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_phone">
                      {c(contentData, 'contact.form.label_phone', '電話番号')}
                    </span>
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

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    <span data-preview-key="contact.form.label_message">
                      {c(contentData, 'contact.form.label_message', 'お問い合わせ内容 *')}
                    </span>
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
                    <span className="font-semibold" data-preview-key="contact.form.label_privacy">
                      {c(contentData, 'contact.form.label_privacy', 'プライバシーポリシーに同意する *')}
                    </span>
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
                    disabled={!formData.privacyAgreed || isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
                  >
                    <Send size={20} />
                    <span data-preview-key="contact.form.btn_submit">
                      {c(contentData, 'contact.form.btn_submit', 'お問い合わせを送信')}
                    </span>
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    <span data-preview-key="contact.form.required_note">
                      {c(contentData, 'contact.form.required_note', '* は必須項目です。送信後、2営業日以内にご回答いたします。')}
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" data-preview-section="contact.faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-preview-key="contact.faq.title">
              {c(contentData, 'contact.faq.title', 'よくある質問')}
            </h2>
            <p className="text-xl text-gray-600" data-preview-key="contact.faq.subtitle">
              {c(contentData, 'contact.faq.subtitle', 'お問い合わせ前に、こちらもご確認ください')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'contact.faq.faq1_q', a: 'contact.faq.faq1_a' },
              { q: 'contact.faq.faq2_q', a: 'contact.faq.faq2_a' },
              { q: 'contact.faq.faq3_q', a: 'contact.faq.faq3_a' },
              { q: 'contact.faq.faq4_q', a: 'contact.faq.faq4_a' },
              { q: 'contact.faq.faq5_q', a: 'contact.faq.faq5_a' },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-3 mt-0.5">Q</span>
                  <span data-preview-key={faq.q}>
                    {c(contentData, faq.q, '')}
                  </span>
                </h3>
                <p className="text-gray-600 ml-12">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">A</span>
                  <span data-preview-key={faq.a}>
                    {c(contentData, faq.a, '')}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}