import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";

import GlobalStyles from "./templates/theme/globalStyles";
import ScrollTop from "./utils/ScrollTop";

import Footer from "./components/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AnimatePresence, motion } from "framer-motion";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useWorkshopContext } from "./context/workshop_context";

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const AppAd = lazy(() => import("./pages/AppAd"));
const Profile = lazy(() => import("./pages/Profile"));
const Brands = lazy(() => import("./pages/Brands"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const MerchantDetails = lazy(() => import("./pages/MerchantDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Address = lazy(() => import("./pages/Address"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/SignUp"));
const OTPVerification = lazy(() => import("./pages/OTPVerification"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));

function App() {
  const location = useLocation();
  const { fetchNearbyBikeWorkshops, fetchNearbyLMVWorkshops } =
    useWorkshopContext();
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };

  const fetchData = () => {
    function success(pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      localStorage.setItem(
        "myLocation",
        JSON.stringify({
          latitude: latitude,
          longitude: longitude
        })
      );
      fetchNearbyBikeWorkshops(
        `findnerestWorkshop?latitude=${latitude}&longitude=${longitude}&limit=5&vehicleType=Bike`
      );
      fetchNearbyLMVWorkshops(
        `findnerestWorkshop?latitude=${latitude}&longitude=${longitude}&limit=5&vehicleType=LMV`
      );
    }
    function error(err) {
      console.log(err);
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    fetchData();
  }, [navigator.geolocation]);

  // console.log(JSON.parse(localStorage.getItem("currentLocation")));

  const token = localStorage.getItem("jwt_token");
  if (token && ["/login"].includes(location.pathname)) {
    window.location.href = "/";
    location.pathname = "/";
  }

  return (
    <AnimatePresence>
      <ScrollTop>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MainNavigation />
          <motion.main
            className="main-section"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route path="/app-ad" element={<AppAd />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/merchants/:id" element={<MerchantDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/address" element={<Address />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/otpverification" element={<OTPVerification />} />
              <Route path="/orderdetails/:id" element={<OrderDetails />} />
              <Route path="/ordersuccess" element={<OrderSuccess />} />
            </Routes>
          </motion.main>
          <Footer />
          <GlobalStyles />
        </LocalizationProvider>
      </ScrollTop>
    </AnimatePresence>
  );
}

export default App;
