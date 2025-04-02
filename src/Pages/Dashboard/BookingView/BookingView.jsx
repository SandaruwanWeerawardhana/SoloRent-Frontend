import { useState, useEffect } from "react";

function BookingView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/solorent/booking/get-all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-white">
          <caption class="p-5 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Booking
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Contact
              </th>
              <th scope="col" class="px-6 py-3">
                Vehicle ID
              </th>
              <th scope="col" class="px-6 py-3">
                Start Date
              </th>
              <th scope="col" class="px-6 py-3">
                End Date
              </th>
              <th scope="col" class="px-6 py-3">
                Pickup Location
              </th>
              <th scope="col" class="px-6 py-3">
                Booking Date & Time
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              {/* <th scope="col" class="px-6 py-3">
                Total Price
              </th> */}
              <th scope="col" class="px-6 py-3">
                Action
              </th>
              {/* <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {row.bookingID}
                </th>
                <td class="px-6 py-4"> {row.customerName} </td>
                <td class="px-6 py-4"> {row.email} </td>
                <td class="px-6 py-4"> {row.contact} </td>
                <td class="px-6 py-4"> {row.vehicleID} </td>
                <td class="px-6 py-4"> {row.startDate} </td>
                <td class="px-6 py-4"> {row.endDate} </td>
                <td class="px-6 py-4"> {row.pickupLocation} </td>
                <td class="px-6 py-4"> {row.returnLocation} </td>
                <td class="px-6 py-4"> {row.bookingStatus} </td>
                {/* <td class="px-6 py-4"> [] </td> */}

                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookingView;
