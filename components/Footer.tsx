'use client';

import { Phone, Mail, Clock } from 'lucide-react';
import { useContent } from './ContentProvider';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

export default function Footer() {
  const { data } = useContent();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              {c(data, 'common.footer.site_name', 'デンタル ラボ AQUA')}
            </h3>
            <p className="text-gray-300 mb-4">
              {c(data, 'common.footer.description', 'CAD/CAMを活用した高精度テレスコープ義歯の専門ラボです。')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {c(data, 'common.footer.contact_title', 'お問い合わせ')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>{c(data, 'common.footer.phone', '096-329-2426')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>{c(data, 'common.footer.email', 'info@precision-lab.jp')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-400" />
                <span>{c(data, 'common.footer.hours', '平日 9:00-18:00')}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {c(data, 'common.footer.services_title', 'サービス')}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>{c(data, 'common.footer.service1', 'テレスコープ義歯製作')}</li>
              <li>{c(data, 'common.footer.service2', 'CAD/CAMによる補綴製作')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>{c(data, 'common.footer.copyright', '© 2024 デンタル ラボ AQUA. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}