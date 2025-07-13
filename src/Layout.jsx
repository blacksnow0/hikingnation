import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <ToastContainer position="top-right" autoClose={3000} />
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Layout;
