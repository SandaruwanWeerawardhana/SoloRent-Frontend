import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Vehicle() {
  const [inputData, setinputData] = useState({
    brand: "",
    fuelType: "",
    registerNumber: "",
    pricePerDay: "",
    description: "",
    imageURl: "",
  });

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const token = localStorage.getItem("token");
    console.log("accessToken" + token);

    try {
      await axios.post(
        "http://localhost:8081/api/solorent/vehicle/add",
        inputData,
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        }
      );
  
        Swal.fire({
          title: "Vehicle registered successfully!",
          icon: "success",
        });
     
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error registering Vehicle!",
        icon: "error",
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 mb-5">
      <div className="py-7 px-4 mx-auto max-w-2xl lg:py-9">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white text-center ">
          Vehicle Register
        </h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="brand"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={inputData.brand}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Vehicle brand"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fuel
              </label>
              <select
                name="fuelType"
                value={inputData.fuelType}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option>Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="Year"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Vehicle Register Number
              </label>
              <input
                type="text"
                name="registerNumber"
                value={inputData.registerNumber}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=" Register Number"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price Per Date
              </label>
              <input
                type="text"
                name="pricePerDay"
                value={inputData.pricePerDay}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Price Per Date"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Image
              </label>
              <input
                type="text"
                name="imageURl"
                value={inputData.imageURl}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Image link"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                value={inputData.description}
                onChange={handleChange}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="text-white bg-[#2557D6] hover:bg-[#2057D6] focus:ring-4 focus:ring-[#2557D6]/50 font-medium rounded-lg text-4sm px-5 py-2.5 items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 w-full text-center dark:bg-[#2557D6] dark:hover:bg-[#2057D6]"
            >
              Add Vehicle
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Vehicle;
