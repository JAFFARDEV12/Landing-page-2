import React from 'react'
import logo1 from './logo 1.png'
import logo2 from './logo 2.png'

const Footer = () => {
  return (
    <footer className="bg-gamma-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
             <img 
              src={logo2} 
              alt="Logo" 
              className="hidden lg:block h-20 w-auto"
            />
            <img 
              src={logo1} 
              alt="Logo" 
              className="hidden md:block lg:hidden h-10 w-auto"
            />
            <img 
              src={logo1} 
              alt="Logo" 
              className="block md:hidden h-8 w-auto"
            />
            <p className="text-gray-400 text-sm font-normal">
              Premium culinary experiences crafted with passion and excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Our Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Specialties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Catering</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Our Chefs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Locations</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-normal mb-4 md:mb-0">© 2026 Paiment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-aqua-marine transition-colors text-sm font-normal">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

