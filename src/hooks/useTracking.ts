import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, trackGAPageView } from "../utils/analytics";

const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
    trackGAPageView(location.pathname);
  }, [location.pathname]);
};

export default useTracking;