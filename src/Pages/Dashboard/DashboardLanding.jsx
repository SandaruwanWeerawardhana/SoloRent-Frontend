import { useState, useEffect } from "react";

function DashboardLanding() {
  const [vehicleData, setVehicleData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = fetch(
      "http://localhost:8081/api/solorent/vehicle/get-all"
    ).then((res) => res.json());

    const fetchBookings = fetch(
      "http://localhost:8081/api/solorent/booking/get-all"
    ).then((res) => res.json());

    Promise.all([fetchVehicles, fetchBookings])
      .then(([vehicles, bookings]) => {
        setVehicleData(vehicles);
        setBookingData(bookings);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-1 mb-4 mt-4 gap-4">
        {/* <div className="col-start-2">
          <div className="bg-white rounded-lg border border-gray-500 text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-6 w-full max-w-xs">
            <div className="mb-4">
              <h1 className="text-green-800 font-bold">Total Booking</h1>
            </div>
            <div className="mb-2">
              {loading ? (
                <span className="text-3xl font-bold text-gray-800">
                  Loading...
                </span>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  {bookingData.length}
                </span>
              )}
            </div>
          </div>
        </div> */}
{/* 
        <div className="col-start-3">
          <div className="bg-white rounded-lg border border-gray-500 text-center shadow-sm hover:shadow-md transition-shadow duration-300 p-6 w-full max-w-xs">
            <div className="mb-4">
              <h1 className="text-green-800 font-bold">Total Vehicle</h1>
            </div>
            <div className="mb-2">
              {loading ? (
                <span className="text-3xl font-bold text-gray-800">
                  Loading...
                </span>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  {vehicleData.length}
                </span>
              )}
            </div>
          </div>
        </div> */}
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <caption className="p-5 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Vehicle Details
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" className="px-6 py-3">
                Register Number
              </th>
              <th scope="col" className="px-6 py-3">
                Price Per Day
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((row) => (
              <tr
                key={row.vehicleID}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.vehicleID}
                </th>
                <td className="px-6 py-4"> {row.brand} </td>
                <td className="px-6 py-4"> {row.fuelType} </td>
                <td className="px-6 py-4"> {row.registerNumber} </td>
                <td className="px-6 py-4"> {row.pricePerDay} </td>
                <td className="px-6 py-4">
                  <img src={row.imageURl} alt="" className="w-20 h-auto" />
                </td>
                <td className="px-6 py-4"> {row.description} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardLanding;
