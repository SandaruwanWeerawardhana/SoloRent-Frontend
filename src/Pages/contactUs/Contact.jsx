import React, { useState } from "react";
import "./contact.css";
import BodyContent from "../../Compornents/BodyContent/BodyContent";
import logo from "../../assets/logo.png";
import FooterContent from "../../Compornents/FooterContent/FooterContent";
import Map from "../../Compornents/MapContent/Map";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    massage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/solorent/massage/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Message sent successfully!",
          icon: "success",
        });
        setFormData({ name: "", email: "", contact: "", massage: "" });
      } else {
        Swal.fire({
          title: "Failed to send message.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <BodyContent>
        <div className="hero">
          <div className="container2">
            <h1>Contact Us</h1>
            <p>We're here to help with all your car rental needs</p>
          </div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="icon">📍</div>
              <div className="info-content">
                <h3>Mathugama</h3>
                <p>635/01 Aluthgama road,</p>
                <p>Mathugama</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📱</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>
                  <a href="">0704679789</a>
                </p>
                <p>
                  <a href="">0345865217</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:support@premiumcars.com">
                    solorent@premiumcars.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🕒</div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form ">
            <h2>Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="contact"
                  className="form-control"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="massage"
                  className="form-control"
                  value={formData.massage}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit ">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <Map></Map>
        <FooterContent src={logo}></FooterContent>
      </BodyContent>
    </>
  );
}
