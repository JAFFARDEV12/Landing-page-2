import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Paiment transformed our dining experience. The quality of ingredients and chef expertise is unmatched. Every meal is a culinary masterpiece.",
      author: "Sarah Johnson",
      role: "Food Critic, Culinary Magazine",
      company: "Culinary Magazine"
    },
    {
      quote: "We've been ordering from Paiment for our corporate events for over a year. The catering service is exceptional and our clients are always impressed!",
      author: "Michael Chen",
      role: "Event Manager, Corporate Events Inc.",
      company: "Corporate Events Inc."
    },
    {
      quote: "The freshness of ingredients and attention to dietary needs is outstanding. Paiment has become our go-to for healthy, delicious meals.",
      author: "Emily Rodriguez",
      role: "Nutritionist, Wellness Center",
      company: "Wellness Center"
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-gamma-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-300 font-normal">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-aqua-marine/50 transition-all duration-300"
            >
              <div className="text-aqua-marine text-4xl mb-4">"</div>
              <p className="text-gray-200 mb-6 leading-relaxed font-normal italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-white">{testimonial.author}</div>
                <div className="text-gray-400 text-sm font-normal">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

