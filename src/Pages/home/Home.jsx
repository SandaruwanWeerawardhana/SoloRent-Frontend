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

                <div className="text-center text-5xl pt-5 ">
                  <button
                    type="button"
                    class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                  >
                    Reserve your Vehicle Now
                  </button>
                </div>
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

        {/* ========================================== Card ===================================== */}
        <div class="text-center text-5xl pt-5 ">
          <h1>Why</h1> <br />
          <h1 className="text-[#ff5733] mb-4">We Special</h1>
        </div>
        <dir className="grid grid-cols-2 m-4 mt-5 justify-center w-25 ">
          <div class="px-5">
            <img
              class="w-100  rounded-lg "
              src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="leading-relaxed text-xl align-content-center px-4 mt-5 pt-4 px-3">
            <p>
              SOLO Rent A Car is a locally owned and operated car rental company
              in Sri Lanka that provides affordable options for all travelers.
              The SOLO Rent Team has been welcoming visitors from all over the
              world since 2024. We understand what our clients expect and
              deliver because we know what it’s like to be a consumer. We offer
              a fleet of clean, reliable, and safe new and pre-owned vehicles
              that have been meticulously maintained and are suitable for all
              Sri Lankan roads. We take safety very seriously, making it easier
              for you to relax and enjoy a family vacation.
            </p>
          </div>
        </dir>

        {/* ======================================================================================================== */}
        <br />
        <br />
    
        <div class="grid grid-cols-4 gap-2 m-4 mt-5" >
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="ImageCardsize">
              <img
                class="h-100 w-100 rounded-lg"
                src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div class="">
              <a href="#">
                <h5 class="text-xl text-gray-900 dark:text-white text-center">
                  10 Year Experience
                </h5>
              </a>
            </div>
          </div>

          <div class="w-100 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="ImageCardsize">
              <img
                class="h-100 w-100 rounded-lg"
                src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl text-gray-900 dark:text-white text-center">
                  Affortable Price
                </h5>
              </a>
            </div>
          </div>

          <div class="w-100 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="ImageCardsize">
              <img
                class="h-100  rounded-lg"
                src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl dark:text-white text-center">
                  Insurance Coverage
                </h5>
              </a>
            </div>
          </div>

          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="ImageCardsize">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="poto"
              />
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl text-gray-900 dark:text-white text-center">
                  20/7 Access
                </h5>
              </a>
            </div>
          </div>
        </div>
      

        <br />
        <br />

        {/* ========================================== FOOTER ===================================== */}

        <footer class="bg-white dark:bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="#" class="flex items-center">
                  <img src={logo} class="h-15 me-8" alt="SoloRent Logo" />
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                    Service
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        Rent Car
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        Wedding Rental
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        Transfers
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                    Contact us
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="" class="hover:underline ">
                        Whatsapp
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        Email
                      </a>
                    </li>
                    <li class="mb-4">
                      <a href="" class="hover:underline">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                    Legal
                  </h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="#" class="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2025{" "}
                <a href="" class="hover:underline">
                  Solo Rent
                </a>
                . All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" class="text-white hover:text-blue-500">
                  <svg
                    class="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-white hover:text-green-500 ms-5">
                  <svg
                    class="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                  <span class="sr-only">Whatsap</span>
                </a>

                <a
                  href="#"
                  class="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-orange-500 dark:hover:text-orange ms-5"
                >
                  <svg
                    class="w-7 h-7 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>

                  <span class="sr-only">Google Map</span>
                </a>
                <a
                  href="#"
                  class="text-white hover:text-gray-900 dark:hover:text-white ms-5"
                >
                  <svg
                    class="w-7 h-7"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </BodyContent>
    </>
  );
}

export default Home;
