import React, { useState } from "react";

function vehicle() {
  const [inputData, setinputData] = useState({
    brand: "",
    fuelType: "",
    year: "",
    pricePerDay: "",
    description: "",
    imageURl: "",
    status: "AVAILABLE",
  });

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8080/api/solorent/vehicle/add",
        requestOptions
      );

      if (response.ok) {
        alert("registered successfully!");
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Failed to register admin.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error registering admin.");
    }
  };

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white text-center ">
            Vehicle Register
          </h2>
          <form action="#" onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={inputData.brand}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Vehicle brand"
                  required=""
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  name="fuelType"
                  value={inputData.fuelType}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
              <div class="w-full">
                <label
                  for="Year"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Vehicle Register Number
                </label>
                <input
                  type="text"
                  name="year"
                  value={inputData.year}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Manufacturer Year"
                />
              </div>
              <div class="w-full">
                <label
                  for="Price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price Per Date
                </label>
                <input
                  type="text"
                  name="pricePerDay"
                  value={inputData.pricePerDay}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Price Per Date"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="file_input"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="imageURl"
                  value={inputData.imageURl}
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Image link"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  value={inputData.description}
                  onChange={handleChange}
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div class="flex items-center justify-between mt-6">
              <button
                type="submit"
                class="text-white bg-[#2557D6] hover:bg-[#2057D6] focus:ring-4 focus:ring-[#2557D6]/50font-medium rounded-lg text-4sm px-5 py-2.5  items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 w-full text-center dark:bg-[#2557D6] dark:hover:bg-[#2057D6] dark:focus:ring-[#2557D6]/50"
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default vehicle;
