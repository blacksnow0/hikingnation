// src/hooks/usePageTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-598LDGPK5D", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
