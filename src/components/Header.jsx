import React, { useState, useEffect } from 'react'
import logo1 from './logo 1.png'
import logo2 from './logo 2.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg shadow-gamma-blue/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="logo">
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
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gamma-dark no-underline font-normal text-base transition-colors duration-300 hover:text-gamma-blue">Menu</a>
          <a href="#partners" className="text-gamma-dark no-underline font-normal text-base transition-colors duration-300 hover:text-gamma-blue">Locations</a>
          <a href="#testimonials" className="text-gamma-dark no-underline font-normal text-base transition-colors duration-300 hover:text-gamma-blue">Reviews</a>
            <button className="bg-gamma-blue text-white border-none px-6 py-2.5 rounded-lg font-bold text-base cursor-pointer transition-all duration-300 hover:bg-gamma-dust hover:scale-105 font-roboto">
            Order Now
          </button>
        </nav>
        <button 
          className="md:hidden text-gamma-dark p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 pt-20">
              <a 
                href="#features" 
                className="text-gamma-dark no-underline font-normal text-base py-3 border-b border-gray-medium transition-colors duration-300 hover:text-gamma-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#partners" 
                className="text-gamma-dark no-underline font-normal text-base py-3 border-b border-gray-medium transition-colors duration-300 hover:text-gamma-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
              <a 
                href="#testimonials" 
                className="text-gamma-dark no-underline font-normal text-base py-3 border-b border-gray-medium transition-colors duration-300 hover:text-gamma-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <button 
                className="bg-gamma-blue text-white border-none px-6 py-3 rounded-lg font-bold text-base cursor-pointer transition-all duration-300 hover:bg-gamma-dust mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

