import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import SideMenu from "./components/SideMenu";
import Questions from "./pages/Questions";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Rent from "./pages/RentVehicle";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GeneralConditions from "./pages/GeneralConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const AUTH_ROUTES = ["/login", "/register"];

function Layout() {
  const location = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isAuthPage && <SideMenu open={isMenuOpen} setOpen={setIsMenuOpen} />}
      <div className="min-h-screen flex flex-col">
        {!isAuthPage && <Navbar />}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/general-conditions" element={<GeneralConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        {!isAuthPage && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;