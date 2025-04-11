'use client';

import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-blue-600 py-4 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
            Moonrise
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Home
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              About
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/contact" className="text-white font-medium hover:text-blue-200 transition-colors relative group">
              Contact
              <span className="absolute inset-x-0 bottom-[-4px] h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
