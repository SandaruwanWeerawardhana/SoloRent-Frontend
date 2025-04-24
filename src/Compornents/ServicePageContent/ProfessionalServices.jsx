import { content } from "flowbite-react/tailwind";
import React, { useEffect } from "react";

const ProfessionalServices = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".service-feature");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const data = [
    {
      icon: "👍",
      title: "Quality Customer Services",
      des: "At SR Transfers, customer satisfaction is our priority. We ensure a smooth, comfortable, and stress-experience with top-class services tailored to your needs.",
    },
    {
      icon: "⏱️",
      title: "Reliable Services",
      des: "We understand the importance of time. Our transfer services are punctual, prompt, and reliable. Our team monitors flight arrivals to ensure timely pickups without delays.",
    },
    {
      icon: "👨‍✈️",
      title: " Well Trained Team",
      des: "Our professional drivers have extensive knowledge of Colombo and other popular cities in Sri Lanka, ensuring a smooth and enjoyable journey for you.",
    },
    {
      icon: "🛡️",
      title: "High Safety Concerns",
      des: "Your safety is our priority. We ensure secure, well-maintained vehicles and highly trained drivers for a safe and stress-free journey.",
    },
    {
      icon: "🌙",
      title: "24/7 Availability",
      des: "We offer 24/7 transfer services, ensuring that we are available at any time, even on weekends and public holidays",
    },

    {
      icon: "🚗",
      title: "Professional Chauffeurs",
      des: "Our drivers are not just skilled professionals but also courteous hosts who will make your journey comfortable and memorable.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Highly Professional Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
            We provide exceptional, exquisite transfer services to all our
            customers visiting or leaving Sri Lanka. Our outstanding and
            affordable Sri Lanka private transfers are fast, reliable,
            comfortable, and convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((e) => (
            <div className="service-feature opacity-0 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 text-4xl mb-4 text-center">{e.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {e.title}
              </h3>
              <p className="text-gray-600 text-center">{e.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServices;
