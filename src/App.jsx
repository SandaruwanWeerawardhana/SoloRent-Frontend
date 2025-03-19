import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarContent from "./Compornents/NavbarContent/NavbarContent.jsx";
import "./index.css";
import Home from "./Pages/home/Home.jsx";
import Contact from "./Pages/contactUs/Contact.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import Booking from "./Pages/Booking/booking.jsx";
import AdminLogin from "./Pages/Dashboard/Admin/AdminLogin.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Vehicle from "./Pages/Dashboard/Vehicle/vehicle.jsx";
import BookingView from "./Pages/Dashboard/BookingView/BookingView.jsx";
import BookingForm from "./Pages/Booking/BookingForm.jsx";
import VehicleView from "./Pages/Dashboard/Vehicle/VehicleView.jsx";
import DashboardView from "./Pages/Dashboard/DashboardView.jsx";
import AdminRegister from "./Pages/Dashboard/Admin/AdminRegister.jsx";

function App() {
  return (
    <>
      <Router>
        <NavbarContent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
        
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardView />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="bookingview" element={<BookingView />} />
            <Route path="vehicleview" element={<VehicleView />} />
            <Route path="dashboardview" element={<DashboardView />} />
            <Route path="adminregister" element={<AdminRegister />} />
          </Route>
        </Routes>
      </Router>

      {/* <AdminLogin></AdminLogin> */}

      {/* <Vehicle></Vehicle> */}
    </>
  );
}

export default App;
