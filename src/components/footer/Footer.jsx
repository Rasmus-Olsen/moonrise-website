'use client';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-gray-300 text-sm">
            {new Date().getFullYear()} Moonrise. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-300 text-sm hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
