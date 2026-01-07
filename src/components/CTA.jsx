import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-gamma-blue to-gamma-dust relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">Ready to Taste Excellence?</h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed font-normal">
          Join thousands of food lovers enjoying Paiment's premium culinary experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gamma-blue border-none px-10 py-4 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-gray-light hover:scale-105 hover:shadow-2xl font-roboto">
            Order Now
          </button>
          <button className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-gamma-blue hover:scale-105 font-roboto">
            Book a Table
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA

