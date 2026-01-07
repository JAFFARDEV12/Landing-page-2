import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gamma-dark">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gamma-blue/20 to-aqua-marine/20"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gamma-blue rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-aqua-marine rounded-full blur-[120px] opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gamma-blue/20 rounded-full border border-gamma-blue/30">
            <span className="text-aqua-marine text-sm font-bold">New: Fresh Seasonal Menu</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block text-aqua-marine">Culinary Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
            Experience premium food solutions crafted with passion, quality ingredients, and innovation. 
            Join the revolution in culinary excellence and sustainable dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-aqua-marine text-gamma-dark border-none px-10 py-4 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-aqua-marine/90 hover:scale-105 hover:shadow-2xl hover:shadow-aqua-marine/50 font-roboto w-full sm:w-auto">
              Order Now
            </button>
            <button className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:border-aqua-marine hover:text-aqua-marine hover:scale-105 font-roboto w-full sm:w-auto">
              View Menu
            </button>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-aqua-marine mb-2">50K+</div>
            <div className="text-gray-300 text-sm font-normal">Happy Customers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-aqua-marine mb-2">100+</div>
            <div className="text-gray-300 text-sm font-normal">Menu Items</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-aqua-marine mb-2">25+</div>
            <div className="text-gray-300 text-sm font-normal">Award-Winning Chefs</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

