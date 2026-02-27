"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useContent } from './ContentProvider';

function c(data: Record<string, string>, key: string, fallback: string) {
  return data[key] || fallback;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useContent();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" data-preview-section="common.nav">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <span data-preview-key="common.nav.site_name">
              {c(data, 'common.nav.site_name', 'デンタル ラボ AQUA')}
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              <span data-preview-key="common.nav.menu_home">
                {c(data, 'common.nav.menu_home', 'ホーム')}
              </span>
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              <span data-preview-key="common.nav.menu_products">
                {c(data, 'common.nav.menu_products', '製品紹介')}
              </span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              <span data-preview-key="common.nav.menu_about">
                {c(data, 'common.nav.menu_about', 'ラボ紹介')}
              </span>
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <span data-preview-key="common.nav.menu_contact">
                {c(data, 'common.nav.menu_contact', 'お問い合わせ')}
              </span>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                <span data-preview-key="common.nav.menu_home">
                  {c(data, 'common.nav.menu_home', 'ホーム')}
                </span>
              </Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                <span data-preview-key="common.nav.menu_products">
                  {c(data, 'common.nav.menu_products', '製品紹介')}
                </span>
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                <span data-preview-key="common.nav.menu_about">
                  {c(data, 'common.nav.menu_about', 'ラボ紹介')}
                </span>
              </Link>
              <Link href="/contact" className="block px-3 py-2 bg-blue-600 text-white rounded-lg mx-3 text-center" onClick={() => setIsOpen(false)}>
                <span data-preview-key="common.nav.menu_contact">
                  {c(data, 'common.nav.menu_contact', 'お問い合わせ')}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}