import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "./state/actions/productAction";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { getCart } from "./state/actions/cartAction";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ByPurpose from "./pages/cbd-by-purpose/ByPurpose";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import BrandPurpose from "./pages/brand-purpose/BrandPurpose";
import OurEsteemed from "./pages/our-esteemed/OurEsteemed";
const Register = lazy(async () => await import("./pages/register/Register"));
const Profile = lazy(async () => await import("./pages/profile/Profile"));
const SignIn = lazy(async () => await import("./pages/sign-in/SignIn"));
const OurCompanies = lazy(
  async () => await import("./pages/our-companies/OurCompanies")
);
const OurLeadership = lazy(
  async () => await import("./pages/our-leadership/OurLeadership")
);
const Orders = lazy(async () => await import("./pages/orders/Orders"));
const NHI = lazy(async () => await import("./pages/insights/News"));
const Contact = lazy(async () => await import("./pages/contact/Contact"));
const ByCategory = lazy(
  async () => await import("./pages/byCategory/ByCategory")
);
const Forms = lazy(async () => await import("./pages/forms/Forms"));
const PayPal = lazy(async () => await import("./pages/paypal/PayPal"));
const UserOrder = lazy(async () => await import("./pages/userOrder/UserOrder"));
const CancelOrder = lazy(
  async () => await import("./pages/cancelOrder/CancelOrder")
);
const ForgotPassword = lazy(
  async () => await import("./pages/forgotPassword/ForgotPassword")
);
const CBDByCategory = lazy(
  async () => await import("./pages/cbd-by-category/CBDByCategory")
);
const SecondeNave = lazy(
  async () => await import("./components/secondeNave/SecondeNave")
);
const Home = lazy(async () => await import("./pages/home/Home"));
const ProductDetail = lazy(
  async () => await import("./pages/product-detail/ProductDetail")
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      await getProduct(dispatch);
      await getCart(dispatch);
    };
    getProducts();
  }, [dispatch]);

  return (

      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              height: "100vh" /* Equivalent to h-screen in Tailwind */,
              alignItems: "center" /* Equivalent to items-center in Tailwind */,
              justifyContent:
                "center" /* Equivalent to justify-center in Tailwind */,
              backgroundColor: "#ffffff",
            }}
          >
            <div className="spinner"></div>
          </div>
        }
      >
        <Router scrollRestoration="auto">
          <div>
            <Header setOpenNav={setOpenNav} openNav={openNav} />
            {window.innerWidth >= 798 ? (
              <Navbar />
            ) : (
              <SecondeNave setOpenNav={setOpenNav} openNav={openNav} />
            )}
          </div>
          <ScrollToTop />
          <div className="route-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cbd-by-purpose" element={<ByPurpose />} />
              <Route
                path="/product-detail/:categoryName/:productName"
                element={<ProductDetail />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-address/:orderId" element={<Forms />} />
              <Route path="/order-summery/:orderId" element={<PayPal />} />
              <Route path="/brand-purpose" element={<BrandPurpose />} />
              <Route path="/our-esteemed" element={<OurEsteemed />} />
              <Route path="/cbd-by-category" element={<CBDByCategory />} />
              <Route path="/cbd-by-purpose" element={<ByPurpose />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/our-companies" element={<OurCompanies />} />
              <Route path="/our-leadership" element={<OurLeadership />} />
              <Route path="/order-history" element={<Orders />} />
              <Route path="/insights/:type" element={<NHI />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/cbd-by-category/:categoryName"
                element={<ByCategory />}
              />
              <Route
                path="/cbd-by-purpose/:categoryName"
                element={<ByCategory />}
              />
              <Route path="/my-orders" element={<Orders />} />
              <Route path="/order-detail/:orderId" element={<UserOrder />} />
              <Route path="/cancel_order" element={<CancelOrder />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Suspense>
  );
}

export default App;


// <PayPalScriptProvider
// options={{
//   "client-id": process.env.REACT_APP_CLIENT_ID,
//   currency: "THB",
//   intent: "capture",
// }}
// >
// </PayPalScriptProvider>