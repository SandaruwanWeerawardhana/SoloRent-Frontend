import React from "react";

function Offer() {
  const offer = [
    {
      imgage:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Rent A Car",
      des: "Solo Rent A Car is an independent car rental company in SriLanka since 2024. We offer luxurious customer service for you atthe most affordable rental car rates.",
    },
    {
      imgage:
        "https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Airport Transfer",
      des: "SR Rent A Car offer chauffeur-driven Airport Transfer and Hotel Transfer in Sri Lanka. We offer our service ColomboInternational Airport & all hotels in Sri Lanka",
    },
    {
      imgage:
        "https://images.pexels.com/photos/31473845/pexels-photo-31473845/free-photo-of-happy-newlyweds-driving-convertible-in-albuquerque.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Wedding Rental",
      des: "Your wedding day is the most memorable day which you’ll remember for the rest of your life. You try your very best to make it perfect with many items.",
    },
  ];

  return (
    <section className="m-auto bg-sky-100 py-8">
    <div className="text-center text-3xl sm:text-4xl md:text-5xl pt-5">
      <span>What</span> <br />
      <span className="text-[#ff5733] mb-4">We Offer</span>
    </div>
    <div className="flex flex-wrap justify-center text-center gap-6 px-4 sm:px-6 lg:px-8 mt-8">
      {offer.map((e) => (
        <div key={e.title} className="flex justify-center">
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl border-4 border-indigo-500">
            <img className="w-full h-40 sm:h-48 md:h-56 object-cover" src={e.imgage} alt={e.title} />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {e.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{e.des}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Offer;
