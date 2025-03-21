import React from "react";
import { NavbarSimple } from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import whatsApp from "./assets/whatsapp-img.png";

function App() {

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full bg-black">
      <NavbarSimple />
      </div>
      <div>
        <a href="https://wa.me/919036777463?text=Hello! I am writing this from Mindblue Website." target="_blank" rel="noreferrer">
          <img
            src={whatsApp}
            alt="whatsapp"
            className="fixed right-5 bottom-5 z-50 w-10 lg:w-14 h-10 lg:h-14 rounded-full"
          />
        </a>
      </div>
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
