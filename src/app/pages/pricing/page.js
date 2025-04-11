import React from 'react';

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Package */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Basic Package</h2>
          <p className="text-3xl font-bold mb-4">$99</p>
          <ul className="space-y-2 mb-6">
            <li>Basic Makeup Application</li>
            <li>Natural Look</li>
            <li>45 Minutes Session</li>
            <li>Basic Product Selection</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Book Now
          </button>
        </div>

        {/* Premium Package */}
        <div className="border rounded-lg p-6 shadow-sm bg-gray-50">
          <h2 className="text-2xl font-semibold mb-4">Premium Package</h2>
          <p className="text-3xl font-bold mb-4">$149</p>
          <ul className="space-y-2 mb-6">
            <li>Full Makeup Application</li>
            <li>Custom Look Design</li>
            <li>1 Hour Session</li>
            <li>Premium Product Selection</li>
            <li>False Lashes Included</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Book Now
          </button>
        </div>

        {/* Bridal Package */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Bridal Package</h2>
          <p className="text-3xl font-bold mb-4">$299</p>
          <ul className="space-y-2 mb-6">
            <li>Complete Bridal Makeup</li>
            <li>Trial Session Included</li>
            <li>2 Hours on Wedding Day</li>
            <li>Luxury Product Selection</li>
            <li>Touch-up Kit</li>
            <li>False Lashes Included</li>
          </ul>
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
