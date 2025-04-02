import { useState, useEffect }  from "react";
import "./booking.css";
import { Link } from "react-router-dom";

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
  },[]);

  return (
    <>
      <div className="grid-container container float-start">
        <div class="card-container container">
          {data.map((el) => (
            <div class="card container">
              <div class="card-image">
                <img
                  src={el.imageURl}
                  alt={el.brand}
                />
              </div>
              <div class="card-content">
                <h2>{el.brand}</h2>
                <div class="tabs mt-4">
                  <table>
                    <tr>
                      <td>FUEL TYPE</td>
                      <td>PRICE PER DAY</td>
                      <td>TERMS & CONDITIONS</td>
                    </tr>
                    <br />
                    <tr className="m-3">
                      <td>{el.fuelType}</td>
                      <td>{el.pricePerDay}</td>
                      <td>{el.status}</td>
                    </tr>
                  </table>
                </div>
                <Link to="/bookingform">
                  <button class="select-btn">Select</button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default booking;
