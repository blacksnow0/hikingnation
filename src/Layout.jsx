import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
