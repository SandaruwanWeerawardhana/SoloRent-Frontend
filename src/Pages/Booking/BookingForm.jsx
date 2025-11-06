import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./booking.css";
import TextField from "../../Compornents/InputFields/TextField";
import DatePicker from "../../Compornents/InputFields/DatePicker";
import Swal from "sweetalert2";

function BookingForm() {
  const location = useLocation();
  const vehicle = location.state?.vehicle;

const initialState = {
  customerName: "",
  email: "",
  contact: "",
  vehicleID: vehicle?.id || null,
  startDate: "",
  endDate: "",
  pickupTime: "",
  pickupLocation: "",
  returnLocation: "",
  description: "",
  bookingStatus: "PENDING",
};

const [inputData, setinputData] = useState(initialState);

  console.log("Submitting data:", inputData);

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
        "http://localhost:8081/api/solorent/booking/add",
        requestOptions
      );

      if (response.ok) {
        Swal.fire({
          title: "Booking added successfully!",
          icon: "success",
        });
        setinputData(initialState);
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        Swal.fire({
          title: "Booking added fail!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Booking added fail!",
        icon: "error",
      });
    }
  };

  return (
    <div className="">
      <section className="bg-white rounded-3 bookingsize mb">
        <div className="py-8 px-4 bg-blue-100 rounded-3 ">
          {vehicle ? (
            <div>
              <div className="rounded-3"> 
                <img
                  className="card-image img mx-auto"
                  src={vehicle.imageURl}
                  alt={vehicle.brand}
                />
              </div>
               
              <h2 className="text-center p-1 pt-4 text-3xl">{vehicle.brand}</h2>
            </div>
          ) : (
            <p className="text-center text-red-500">
              No vehicle data received.
            </p>
          )}

          <hr className="mt-3 mb-3 " />
            <form action="#" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextField
                  titleName="Your Name"
                  placeholder="Your Name"
                  name="customerName"
                  value={inputData.customerName}
                  onChange={handleChange}
                />

                <TextField
                  titleName="Your Email Address"
                  placeholder="Your Email"
                  name="email"
                  value={inputData.email}
                  onChange={handleChange}
                />

                <TextField
                  titleName="Your Contact Number"
                  placeholder="Your Contact Number"
                  name="contact"
                  value={inputData.contact}
                  onChange={handleChange}
                />

                <TextField
                  titleName="Vehicle Pickup Time"
                  placeholder="Pickup Time"
                  name="pickupTime"
                  value={inputData.pickupTime}
                  onChange={handleChange}
                />

                <TextField
                  titleName="Pickup Location"
                  placeholder="Pickup Location"
                  name="pickupLocation"
                  value={inputData.pickupLocation}
                  onChange={handleChange}
                />

                <TextField
                  titleName="Drop Off Location"
                  placeholder="Drop Off Location"
                  name="returnLocation"
                  value={inputData.returnLocation}
                  onChange={handleChange}
                />

                <DatePicker
                  title="Vehicle Pickup Date"
                  placeholder="Vehicle Pickup Date"
                  name="startDate"
                  value={inputData.startDate}
                  onChange={handleChange}
                />

                <DatePicker
                  title="Vehicle Drop Off Date"
                  placeholder="Vehicle Drop Off Date"
                  name="endDate"
                  value={inputData.endDate}
                  onChange={handleChange}
                />

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Your Other Requirement
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    name="description"
                    value={inputData.description}
                    onChange={handleChange}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Special Requirement"
                  ></textarea>
                </div>
              </div>

              <div className="mt-3 justify-content-around">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() =>
                    setinputData({
                      customerName: "",
                      email: "",
                      contact: "",
                      vehicleID: "",
                      startDate: "",
                      endDate: "",
                      pickupTime: "",
                      pickupLocation: "",
                      returnLocation: "",
                      description: "",
                      bookingDateTime: "",
                      bookingStatus: "PENDING",
                    })
                  }
                >
                  Clear
                </button>

                <button
                  type="submit"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Make A Reservation
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
  );
}

export default BookingForm;
