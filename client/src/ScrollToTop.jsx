import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // This hook gets the current URL path
  const { pathname } = useLocation();

  // Every time the pathname changes, the window scrolls to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything visually
  return null;
}