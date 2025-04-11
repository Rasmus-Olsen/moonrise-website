import React from 'react';

export default function Content() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Content</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
          <div className="space-y-6">
            <article className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Makeup Trends 2025</h3>
              <p className="text-gray-700 mb-2">
                Discover the latest makeup trends that are taking the beauty world by storm.
                From natural glows to bold statements, we cover it all.
              </p>
              <a href="#" className="text-black hover:underline">Read more →</a>
            </article>
            
            <article className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Bridal Beauty Guide</h3>
              <p className="text-gray-700 mb-2">
                Everything you need to know about bridal makeup, from trials to the big day.
                Tips and tricks for a perfect wedding look.
              </p>
              <a href="#" className="text-black hover:underline">Read more →</a>
            </article>
            
            <article className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Skincare Essentials</h3>
              <p className="text-gray-700 mb-2">
                The foundation of great makeup is great skincare. Learn about our
                recommended routine for glowing skin.
              </p>
              <a href="#" className="text-black hover:underline">Read more →</a>
            </article>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Beauty Tips</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Perfect Base</h3>
                <p className="text-gray-700">Learn how to create the perfect base for your makeup</p>
              </li>
              <li>
                <h3 className="font-semibold">Eye Techniques</h3>
                <p className="text-gray-700">Master the art of eye makeup application</p>
              </li>
              <li>
                <h3 className="font-semibold">Lip Care</h3>
                <p className="text-gray-700">Tips for perfect lip application and care</p>
              </li>
              <li>
                <h3 className="font-semibold">Product Selection</h3>
                <p className="text-gray-700">How to choose the right products for your skin type</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
