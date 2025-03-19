import React from "react";
import "./booking.css";
import { Link } from "react-router-dom";


function booking() {
  return (
    <>
      <div className="grid-container container">
        <div class="card-container container">

          <div class="card">
            <div class="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
                alt="Nissan Sunny"
              />
            </div>
            <div class="card-content">
              <h2>NISSAN SUNNY</h2>
              <div class="tabs mt-4">
                <table>
                  <tr>
                    <td>FUEL TYPE</td>
                    <td>PRICE PER DAY</td>
                    <td>TERMS & CONDITIONS</td>
                  </tr>
                  <br />
                  <tr className="m-3">
                    <td>petrol</td>
                    <td>85555</td>
                    <td>sdss</td>
                  </tr>
                </table>
                
              </div>
            <Link to="/bookingform">
            <button class="select-btn">Select</button>
            </Link>
             
            </div>
          </div>

{/* ========================================================================================================= */}
          <div class="card">
            <div class="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
                alt="Nissan Sunny"
              />
            </div>
            <div class="card-content">
              <h2>NISSAN SUNNY</h2>
              <p class="category">( Standard Cars )</p>
              <p class="info">
                <strong>Info:</strong> Flexible cancellation with every booking.
              </p>
              <div class="tabs">
                <button class="active">BASIC INFO</button>
                <button>RATES</button>
                <button>TERMS & CONDITIONS</button>
              </div>
              <button class="select-btn">Select</button>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
                alt="Nissan Sunny"
              />
            </div>
            <div class="card-content">
              <h2>NISSAN SUNNY</h2>
              <p class="category">( Standard Cars )</p>
              <p class="info">
                <strong>Info:</strong> Flexible cancellation with every booking.
              </p>
              <div class="tabs">
                <button class="active">BASIC INFO</button>
                <button>RATES</button>
                <button>TERMS & CONDITIONS</button>
              </div>
              <button class="select-btn">Select</button>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
                alt="Nissan Sunny"
              />
            </div>
            <div class="card-content">
              <h2>NISSAN SUNNY</h2>
              <p class="category">( Standard Cars )</p>
              <p class="info">
                <strong>Info:</strong> Flexible cancellation with every booking.
              </p>
              <div class="tabs">
                <button class="active">BASIC INFO</button>
                <button>RATES</button>
                <button>TERMS & CONDITIONS</button>
              </div>
              <button class="select-btn">Select</button>
            </div>
          </div>

          <div class="card">
            <div class="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibkXkmxZVCfBPEMPzeMX7PZOc0M16mGmO6Q&s"
                alt="Nissan Sunny"
              />
            </div>
            <div class="card-content">
              <h2>NISSAN SUNNY</h2>
              <p class="category">( Standard Cars )</p>
              <p class="info">
                <strong>Info:</strong> Flexible cancellation with every booking.
              </p>
              <div class="tabs">
                <button class="active">BASIC INFO</button>
                <button>RATES</button>
                <button>TERMS & CONDITIONS</button>
              </div>
              <button class="select-btn">Select</button>
            </div>
          </div>
          {/* ===================================================================== */}
          
        </div>
      </div>

   
    </>
  );
}

export default booking;
