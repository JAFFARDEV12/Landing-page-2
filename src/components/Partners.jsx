import React from 'react'

const Partners = () => {
  const partnerLogos = [
    'aws.png',
    'logo-paysafe.svg',
    'Worldpay_logo_c_rgb.svg',
    'Finix.png',
    'geocomply.png',
    'sumsub.png',
    'pragmatic play.png',
    'optimove.png',
    'customerio.svg',
    'intercom.jpg',
    'chargebacks911.svg',
    'seon-full-1.svg'
  ]

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gamma-dark mb-4">Trusted by Food Lovers</h2>
          <p className="text-xl text-slate-600 font-normal">
            Join the community revolutionizing their dining experience
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partnerLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-gray-light rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-110"
            >
            <a>
            {`Partner ${index + 1}`}
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners


