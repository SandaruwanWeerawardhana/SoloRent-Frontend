import { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import revenueData from "../../Data/revanue.json";
import sourceData from "../../Data/source.json";

function DashboardLanding() {
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
  return (
    <>
      <div className="grid grid-cols-4  gap-4 ">
        {/* <div className="col-span-4 row-span-3">
         
        </div> */}
        <div className="col-span-2 row-span-3 row-start-2">

        <div className="w-50 h-25 p-2">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      "rgba(43, 63, 229, 0.8)",
                      "rgba(250, 192, 19, 0.8)",
                      "rgba(253, 135, 135, 0.8)",
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Revenue Source",
                  },
                },
              }}
            />
          </div>

        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-4">



        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-white">
          <caption class="p-5 text-lg font-semibold text-center rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Vehicle Details
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Brand
              </th>
              <th scope="col" class="px-6 py-3">
                Fuel Type
              </th>
              <th scope="col" class="px-6 py-3">
                Register Number
              </th>
              <th scope="col" class="px-6 py-3">
                Price Per Day
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.vehicleID}
                </th>
                <td class="px-6 py-4"> {row.brand} </td>
                <td class="px-6 py-4"> {row.fuelType} </td>
                <td class="px-6 py-4"> {row.registerNumber} </td>
                <td class="px-6 py-4"> {row.pricePerDay} </td>
                <td class="px-6 py-4">
                  <img src={row.imageURl} alt="" className="w-100 h-5 " />
                </td>
                <td class="px-6 py-4"> {row.description} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardLanding;
