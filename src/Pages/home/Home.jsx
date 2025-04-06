import React, { useState, useRef, useEffect } from "react";
import BodyContent from "../../Compornents/BodyContent/BodyContent";
import logo from "../../assets/logo.png";
import "./home.css";
import family from "../../assets/carsousel/family.jpg";
import first from "../../assets/carsousel/first.jpg";
import friends from "../../assets/carsousel/friends.jpg";
import frontview from "../../assets/carsousel/frontview.jpg";
import sideview from "../../assets/carsousel/sideview.jpg";
import { Link } from "react-router-dom";
import FooterContent from "../../Compornents/FooterContent";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 5;
  const autoScrollInterval = useRef(null);

  const moveSlide = (direction) => {
    setCurrentIndex((prev) => (prev + direction + totalItems) % totalItems);
  };

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      moveSlide(1);
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoScroll();
  };

  return (
    <>
      <BodyContent>
        <div
          className="carousel-container container mx-auto relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel-items"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {[family, friends, frontview, sideview, first].map((img, index) => (
              <div key={index} className="carousel-item">
                <img src={img} alt={"Image"} />

                {/* <div className="text-center text-5xl pt-5 ">
                  <button
                    type="button"
                    class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                  >
                    Reserve your Vehicle Now
                  </button>
                </div> */}
              </div>
            ))}
          </div>
          <button
            className="carousel-button prev"
            onClick={() => moveSlide(-1)}
          >
            ❮
          </button>
          <button className="carousel-button next" onClick={() => moveSlide(1)}>
            ❯
          </button>
        </div>

        <div className="text-center text-5xl pt-5 ">
          <Link to="/booking">
            <button
              type="button"
              class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
            >
              Reserve your Vehicle Now
            </button>
          </Link>
        </div>
{/* ======================================================================================================== */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-bold text-center mb-12">
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
{/* ======================================================================================================== */}
        <section className="best-event bg-sky-100">
          <div className="text-center text-5xl pt-5 ">
            <span>What</span> <br />
            <span className="text-[#ff5733] mb-4">We Offer</span>
          </div>
          <div class="bento-event-grid ">
            <div class="best-event ">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl border-4 border-indigo-500/100 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Rent A Car
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Solo Rent A Car is an independent car rental company in Sri
                    Lanka since 2024. We offer luxurious customer service for
                    you at the most affordable rental car rates.
                  </p>
                </div>
              </div>
            </div>

            <div class="best-event">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl border-4 border-indigo-500/100 ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Airport Transfer
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    SR Rent A Car offer chauffeur-driven Airport Transfer and
                    Hotel Transfer in Sri Lanka. We offer our service for
                    Colombo International Airport & all hotels in Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            <div class="best-event">
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl border-4 border-indigo-500/100 ">
                {/* Car Image */}
                <img
                  className="w-full h-48 object-cover"
                  src="https://images.pexels.com/photos/31473845/pexels-photo-31473845/free-photo-of-happy-newlyweds-driving-convertible-in-albuquerque.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Wedding Rental
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Your wedding day is the most memorable day which you’ll
                    remember for the rest of your life. You try your very best
                    to make it perfect with many items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ======================================================================================================== */}
     
        <FooterContent src={logo}></FooterContent>
      </BodyContent>
    </>
  );
}

export default Home;
