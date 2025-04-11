'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@moonrise.com</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Address: 123 Beauty Street</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/about" className="hover:text-blue-200 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/pricing" className="hover:text-blue-200 transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/pages/booking" className="hover:text-blue-200 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Moonrise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
