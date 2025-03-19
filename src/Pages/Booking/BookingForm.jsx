import React from "react";
import "./booking.css";
import TextField from "../../Compornents/InputFields/TextField";
import DatePicker from "../../Compornents/InputFields/DatePicker";


function BookingForm() {
  return (
    <>
  
      <section class="bg-white mt-5 rounded-3">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16 bg-blue-200 rounded-3">
          <h2 class="mb-4 text-5xl font-bold text-gray-900 dark:text-black text-center ">
            Reserve A Vehicle
          </h2>

          <img
            class="card-image img mx-auto rounded-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2dzdPhtM5Gqr7eVlcisgEnafe60vYJQMyg&s"
            alt="image description"
          />
          <h2 className="text-center p-1 pt-4">Honda</h2>
          <hr className="mt-3 mb-3 " />
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

              <TextField titleName="Your Name" placeholder="Your Name" />

              <TextField titleName="Your Email Address" placeholder="Your Email" />

              <TextField titleName="Your Contact Number" placeholder="Your Contact Number" />

              <TextField titleName="Vehicle Pickup Time" placeholder="Pickup Time" />

              <DatePicker title="Pickup Location" placeholder="Pickup Location" />

              <DatePicker title="Drop Off Location" placeholder="Drop Off Location" />

              <DatePicker title="Vehicle Pickup Date" placeholder="Pickup Location" />

              <DatePicker title="Vehicle Drop Off  Date" placeholder="Drop Off Location" />

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Your Other Requirement
                </label>
                <textarea
                  id="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Special Requirement"
                ></textarea>
              </div>
            </div>

            <div className="mt-3 justify-content-around">
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Clear</button>

            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Make A Reservation</button>

            </div>
          </form>
        </div>
      </section>
      
    </>
  );
}

export default BookingForm;
