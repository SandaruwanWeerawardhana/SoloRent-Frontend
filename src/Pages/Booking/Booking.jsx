import { useState, useEffect } from "react";
import "./booking.css";
import { Link } from "react-router-dom";
import { Fuel } from "lucide-react";

function booking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/solorent/vehicle/get-all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    {
      id: "all",
      name: "All Cars",
    },
    {
      id: "suv",
      name: "SUVs",
    },
    {
      id: "luxury",
      name: "Luxury",
    },
    {
      id: "economy",
      name: "Economy",
    },
  ];

  const filteredCars =
  activeCategory === 'all'
    ? data
    : data.filter((car) => car.category === activeCategory)

  return (
    <>
      <section className="py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explore The Category
            </p>
          </div>
          <hr className="border-2 border-blue-800"/>
          <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} ${category.id === categories[0].id ? 'rounded-l-md' : category.id === categories[categories.length - 1].id ? 'rounded-r-md' : ''} border border-gray-300`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
         
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {filteredCars.map((e) => (
              <div
                key={e.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={e.imageURl}
                    alt={e.brand}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {e.brand}
                    </h3>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Fuel className="h-4 w-4 mr-1" />
                      <span>{e.fuelType}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        Rs.{e.pricePerDay}
                      </span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                    <Link to="/bookingform" state={{vehicle:e}}>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Rent Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default booking;
