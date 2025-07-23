import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">デンタル ラボ AQUA</h3>
            <p className="text-gray-300 mb-4">
              CAD/CAMを活用した高精度テレスコープ義歯の専門ラボです。
              デジタル技工のコンサルティングサービスも提供しています。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>096-329-2426</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@precision-lab.jp</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-400" />
                <span>平日 9:00-18:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-300">
              <li>テレスコープ義歯製作</li>
              <li>CAD/CAMコンサルティング</li>
              <li>デジタルワークフロー構築</li>
              <li>技術指導・サポート</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 デンタル ラボ AQUA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}