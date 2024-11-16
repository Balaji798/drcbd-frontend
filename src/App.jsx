import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
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
import Polices from "./pages/Polices";
import Terms from "./pages/Terms";
import Blog from "./pages/blog/Blog";
import Dellep from "./pages/blog/blogs/Dellep";
import WhiteMask from "./pages/blog/blogs/WhiteMask";
import GreenAngel from "./pages/blog/blogs/GreenAngel";
import AmpoulSerum from "./pages/blog/blogs/AmpoulSerum";
import CE from "./pages/blog/blogs/CE";
import Register from"./pages/register/Register"
import Profile from"./pages/profile/Profile"
import SignIn from"./pages/sign-in/SignIn"
import PaymentSuccess from "./pages/PaymentSuccess"
import OurCompanies from "./pages/our-companies/OurCompanies"
import OurLeadership from "./pages/our-leadership/OurLeadership"
import Orders from"./pages/orders/Orders"
import Contact from"./pages/contact/Contact"
import ByCategory from "./pages/byCategory/ByCategory"
import Forms from"./pages/forms/Forms"
import PayPal from"./pages/paypal/PayPal"
import UserOrder from"./pages/userOrder/UserOrder"
import CancelOrder from "./pages/cancelOrder/CancelOrder"
import ForgotPassword from "./pages/forgotPassword/ForgotPassword"
import CBDByCategory from "./pages/cbd-by-category/CBDByCategory"
import SecondeNave from "./components/secondeNave/SecondeNave"
import Home from"./pages/home/Home"
import ProductDetail from "./pages/product-detail/ProductDetail"
import MCTOil from "./pages/blog/blogs/MCTOil"
import Sunscreem from "./pages/blog/blogs/Sunscreem"
import SleepingCream from "./pages/blog/blogs/SleepingCream"
import BrighteningAmpoule from "./pages/blog/blogs/BrighteningAmpoule"

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
              <Route path="/payment_success/:orderId" element={<PaymentSuccess/>}/>
              <Route path='/privacy-policy' element={<Polices/>}/>
              <Route path="/terms-condition" element={<Terms/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/earth-lab-cbd-dellep-softgel" element={<Dellep/>}/>
              <Route path="/blog/mct-oil-perilla-seed" element={<MCTOil/>}/>
              <Route path="/blog/earth-lab-cbd-whitening-mask" element={<WhiteMask/>}/>
              <Route path="/blog/earth-lab-cbd-green-angel" element={<GreenAngel/>}/>
              <Route path="/blog/earth-lab-cbd-ampoule-serum" element={<AmpoulSerum/>}/>
              <Route path="/blog/9ce-cream" element={<CE/>}/>
              <Route path="/blog/9ce-sunscreem" element={<Sunscreem/>}/>
              <Route path="/blog/9ce-deep-sleeping-cream" element={<SleepingCream/>}/>
              <Route path="/blog/9ce-brightening-ampoule" element={<BrighteningAmpoule/>}/>
            </Routes>
          </div>
          <Footer />
        </Router>
  );
}

export default App;