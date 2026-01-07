import React from 'react'

const Stats = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-medium">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gamma-blue mb-2">500K+</div>
            <div className="text-gray-600 text-sm font-normal">Meals Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gamma-blue mb-2">50+</div>
            <div className="text-gray-600 text-sm font-normal">Locations Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gamma-blue mb-2">24/7</div>
            <div className="text-gray-600 text-sm font-normal">Delivery Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gamma-blue mb-2">4.9/5</div>
            <div className="text-gray-600 text-sm font-normal">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

