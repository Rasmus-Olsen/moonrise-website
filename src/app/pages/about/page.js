import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded with a passion for beauty and creativity, Moonrise has grown to become
            a leading name in professional makeup and styling services. Our journey began
            with a simple mission: to help everyone feel confident and beautiful.
          </p>
          <p className="text-gray-700">
            Today, we continue to deliver exceptional service with a team of skilled
            professionals who are dedicated to bringing out your natural beauty.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Quality:</span>
              <span className="text-gray-700">We use only premium products and techniques</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Creativity:</span>
              <span className="text-gray-700">Each client receives a unique, personalized experience</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Professionalism:</span>
              <span className="text-gray-700">Our team is highly trained and certified</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
