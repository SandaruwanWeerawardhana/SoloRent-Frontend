import React, { useEffect } from "react";

const TransferServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 leading-relaxed">
      <section
        className="animate-on-scroll bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white px-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown">
            Our Transfer Services
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <section className="animate-on-scroll text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl">
            SR Rent A Car offers chauffeur-driven Airport Transfers and Hotel
            Transfers in Sri Lanka. We offer our service for Colombo
            International Airport (CMB) & all hotels in Sri Lanka. Our helpful
            chauffeurs and the luxury fleet will ensure you get a professional
            luxury service.
          </p>
        </section>

        <div className="flex flex-col md:flex-row gap-8 mb-16 md:mb-24">
          <div className="animate-on-scroll flex-1 bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-4 border-red-200">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold mb-4">Airport Transfers</h3>
            <p>
              We provide efficient and reliable airport transfers in Sri Lanka.
              We take pride in our Meet and Greet Service from the Colombo
              International Airport (CMB).
            </p>
          </div>

          <div className="animate-on-scroll flex-1 bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-4 border-red-200">
            <div className="text-4xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold mb-4">Hotel Transfers</h3>
            <p>
              Our well-maintained luxurious vehicle fleet allows you to choose
              your specific vehicle category from our vehicle fleet for seamless
              hotel transfers.
            </p>
          </div>

          <div className="animate-on-scroll flex-1 bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-4 border-red-200">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-4">Luxury Service</h3>
            <p>
              Our extravagant chauffeur-driven cars will transport you to your
              desired location in comfort and style, with professional drivers
              assisting you throughout your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferServices;
