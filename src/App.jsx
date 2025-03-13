import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarContent from "./Compornents/NavbarContent/NavbarContent.jsx";
import "./index.css";
import Home from "./Pages/home/Home.jsx";
import Contact from "./Pages/contactUs/Contact.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import Booking from "./Pages/Booking/booking.jsx";
import AdminLogin from "./Pages/Dashboard/Admin/AdminLogin.jsx";
import Vehicle from "./Pages/Dashboard/Vehicle/vehicle.jsx";

function App() {
  return (
    <>
      {/* <Router>
        <NavbarContent />
        <Routes>
          <Route path="/login" element={<AdminLogin/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router> */}

      {/* <AdminLogin></AdminLogin> */}

      <Vehicle></Vehicle>

    </>
  );
}

export default App;
