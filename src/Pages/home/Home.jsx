import React, { useState, useRef, useEffect } from "react";
import BodyContent from "../../Compornents/BodyContent/BodyContent";
import logo from "../../assets/logo.png";
import p1 from "../../assets/carsousel/p1.jpg";
import p2 from "../../assets/carsousel/p2.jpg"; 
import p3 from "../../assets/carsousel/p3.jpg";
import p4 from "../../assets/carsousel/p4.jpg";
import p5 from "../../assets/carsousel/p5.jpg";
import p6 from "../../assets/carsousel/p6.jpg";
import { Link } from "react-router-dom";
import FooterContent from "../../Compornents/FooterContent/FooterContent";
import ChatWindow from "../../Compornents/ChatContent/Chatwindow";
import { MessageCircleIcon, ArrowDown } from "lucide-react";
import Faq from "../../Compornents/FAQ/Faq";
import Offer from "../../Compornents/OfferContent/Offer";
import Choose from "../../Compornents/ChooseContent/Choose";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BodyContent>
        <section className="relative  justify-content-center bg-black">
          <div className="absolute h-100 inset-0 overflow-hidden opacity-50 ">
            <div className="mx-auto w-full  max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1550px]  rounded-3xl overflow-hidden bg-black">
              <div
                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {[p1,p2,p3,p4,p5,p6].map(
                  (img, index) => (
                    <div key={index} className="flex-none w-full h-full">
                      <img
                        src={img}
                        alt="Carousel image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div data-aos="fade-down">
              <div className="mt-10 my-20  mb-20">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center  sm:mb-6 lg:mb-8 text-white leading-tight tracking-tight max-w-4xl mx-auto  border-2 border-blue-500 p-3 mb-5">
                  Sri Lanka Rent Car
                </h1>

                <div className="text-center text-9xl pt-5 my-5 ">
                  <Link to="/booking">
                    <button class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-150 active:scale-95 h-10 py-2 inline-flex  ">
                      <div class="flex items-center fw-bold ">
                        <span class=" text-white lg:inline p-1">
                          Reserve your Vehicle Now
                        </span>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-50">
              <svg className="size-6 animate-bounce text-white rounded ">
                <ArrowDown />
              </svg>
            </div>
          </div>
        </section>

        <div data-aos="fade-up" data-aos-duration="3000">
          <Choose />
          <Offer />
          {/* ======================================================================================================== */}
          
          <Faq />
        </div>

        <div className="fixed bottom-6 right-6 m-5">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all "
            >
              <MessageCircleIcon size={24} />
            </button>
            {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
          </div>

        <FooterContent src={logo}></FooterContent>
      </BodyContent>
    </>
  );
}

export default Home;
