'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-blue-600 py-4 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
            Moonrise
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Home
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/pages/about" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              About
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/pages/content" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Content
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/pages/pricing" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Pricing
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/pages/booking" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Booking
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="mobile-menu-button p-2 text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="hidden md:hidden mt-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-white font-medium hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/pages/about" className="text-white font-medium hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link href="/pages/content" className="text-white font-medium hover:text-blue-200 transition-colors">
              Content
            </Link>
            <Link href="/pages/pricing" className="text-white font-medium hover:text-blue-200 transition-colors">
              Pricing
            </Link>
            <Link href="/pages/booking" className="text-white font-medium hover:text-blue-200 transition-colors">
              Booking
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
