import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Moonrise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Experience the Magic</h2>
          <p className="text-gray-700">
            Step into a world of enchanting beauty and professional care. At Moonrise,
            we specialize in creating stunning looks that enhance your natural beauty.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Professional Makeup</li>
            <li>Bridal Services</li>
            <li>Special Events</li>
            <li>Personal Styling</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
