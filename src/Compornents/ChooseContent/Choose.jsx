import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Choose() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);
  return (
          
    <section className="py-16"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-bold text-blue-800 text-center mb-12">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center ">
                <div className="text-5xl mb-4">🚗</div>
                <h4 className="text-xl font-semibold mb-2">Wide Selection</h4>
                <p className="text-gray-600">
                  From compact cars to luxury SUVs, we have it all.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💸</div>
                <h4 className="text-xl font-semibold mb-2">Affordable Rates</h4>
                <p className="text-gray-600">
                  Competitive pricing with no hidden fees.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🕒</div>
                <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
                <p className="text-gray-600">
                  We're here to assist you anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Choose