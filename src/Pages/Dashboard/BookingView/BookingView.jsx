import { useState, useEffect } from "react";
import { Beer } from "lucide-react";

// Prefer environment variable for API base; falls back to localhost in dev
const API_BASE = import.meta.env?.VITE_API_BASE_URL || "http://localhost:8081";

function BookingView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/solorent/booking/get-all`, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        setData(Array.isArray(json) ? json : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to load bookings");
        }
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {error && (
        <div className="p-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded">
          {error}
        </div>
      )}
      {!error && (
        <table className="w-full text-sm text-left rtl:text-right text-white">
          <caption className="p-5 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Booking
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-2">ID</th>
              <th scope="col" className="px-6 py-3">Customer Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Contact</th>
              <th scope="col" className="px-6 py-3">Vehicle ID</th>
              <th scope="col" className="px-6 py-3">Start Date</th>
              <th scope="col" className="px-6 py-3">End Date</th>
              <th scope="col" className="px-6 py-3">Pickup Location</th>
              <th scope="col" className="px-6 py-3">Booking Date & Time</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300" colSpan={11}>Loading…</td>
              </tr>
            ) : (
              data.map((row, idx) => (
                <tr key={row.bookingID ?? idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {row.bookingID}
                  </th>
                  <td className="px-6 py-4">{row.customerName}</td>
                  <td className="px-6 py-4">{row.email}</td>
                  <td className="px-6 py-4">{row.contact}</td>
                  <td className="px-6 py-4">{row.vehicleID}</td>
                  <td className="px-6 py-4">{row.startDate}</td>
                  <td className="px-6 py-4">{row.endDate}</td>
                  <td className="px-6 py-4">{row.pickupLocation}</td>
                  <td className="px-6 py-4">{row.returnLocation}</td>
                  <td className="px-3 py-4">{row.bookingStatus}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="font-medium text-red-600 hover:text-red-800 inline-flex items-center gap-1"
                      onClick={() => {console.log("Action clicked")}}
                    >
                      <Beer className="h-4 w-4" />
                      Action
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingView;
