import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ByPurpose from "./pages/cbd-by-purpose/ByPurpose";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import BrandPurpose from "./pages/brand-purpose/BrandPurpose";
import OurEsteemed from "./pages/our-esteemed/OurEsteemed";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/sign-in/SignIn";
import OurCompanies from "./pages/our-companies/OurCompanies";
import OurLeadership from "./pages/our-leadership/OurLeadership";
import Orders from "./pages/orders/Orders";
import NHI from "./pages/insights/News";
import Contact from "./pages/contact/Contact";
import ByCategory from "./pages/byCategory/ByCategory";
import Forms from "./pages/forms/Forms";
import PayPal from "./pages/paypal/PayPal";
import env from "react-dotenv";
import UserOrder from "./pages/userOrder/UserOrder";

function App() {
  console.log(env);
  return (
    <Router>
      <Header />
      <Navbar />
      <div
        style={{
          paddingTop: "9rem",
          backgroundColor: "#f6f9fa",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cbd-by-purpose" element={<ByPurpose />} />
          <Route
            path="/product-detail/:productName"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-address/:orderId" element={<Forms />} />
          <Route path="/order-summery/:orderId" element={<PayPal />} />
          <Route path="/brand-purpose" element={<BrandPurpose />} />
          <Route path="/our-esteemed" element={<OurEsteemed />} />
          <Route path="/cbd-by-category" element={<ByPurpose />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/our-companies" element={<OurCompanies />} />
          <Route path="/our-leadership" element={<OurLeadership />} />
          <Route path="/order-history" element={<Orders />} />
          <Route path="/insights/:type" element={<NHI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/by-category/:categoryName" element={<ByCategory />} />
          {/*<Route path="/by-purpose/:categoryName" element={<ByCategory />} />*/}
          <Route path="/my-orders" element={<Orders />} />
          <Route path="/order-detail/:orderId" element={<UserOrder />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
