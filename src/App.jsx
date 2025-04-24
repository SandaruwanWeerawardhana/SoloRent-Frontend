import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import NavbarContent from "./Compornents/NavbarContent/NavbarContent.jsx";
import "./index.css";
import Home from "./Pages/home/Home.jsx";
import Contact from "./Pages/contactUs/Contact.jsx";
import Booking from "./Pages/Booking/booking.jsx";
import AdminLogin from "./Pages/Dashboard/Admin/AdminLogin.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Vehicle from "./Pages/Dashboard/Vehicle/vehicle.jsx";
import BookingView from "./Pages/Dashboard/BookingView/BookingView.jsx";
import BookingForm from "./Pages/Booking/BookingForm.jsx";
import AdminRegister from "./Pages/Dashboard/Admin/AdminRegister.jsx";
import DashboardLanding from "./Pages/Dashboard/DashboardLanding.jsx";
import Massage from "./Pages/Dashboard/Massage/Massage.jsx";
import Service from "./Pages/Service/Service.jsx";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <Router>
        <NavbarContent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
        
        <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} >
            <Route index element={<DashboardLanding />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="bookingview" element={<BookingView />} />
            <Route path="massage" element={<Massage />}/>
            <Route path="dashboardview" element={<DashboardLanding />} />
            <Route path="adminregister" element={<AdminRegister />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
