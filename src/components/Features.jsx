import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'Farm-to-Table Fresh',
      description: 'Sourced directly from local farms, ensuring the freshest ingredients in every dish.'
    },
    {
      title: 'Master Chef Recipes',
      description: 'Crafted by award-winning chefs with decades of culinary expertise and innovation.'
    },
    {
      title: 'Sustainable Practices',
      description: 'Committed to eco-friendly operations and supporting local farming communities.'
    },
    {
      title: 'Custom Catering',
      description: 'Personalized menu options for events, corporate functions, and special occasions.'
    },
    {
      title: 'Nutritional Excellence',
      description: 'Balanced meals designed by nutritionists to support your health and wellness goals.'
    },
    {
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service ensuring your food arrives hot and fresh.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gamma-dark mb-4">Everything You Need to Savor</h2>
          <p className="text-xl text-slate-600 font-normal max-w-2xl mx-auto">
            Premium features designed to elevate your dining experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-medium"
            >
              <h3 className="text-2xl font-bold text-gamma-dark mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

