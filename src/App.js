
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Login from "./components/login/Login";
import Header from "./components/layout/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About"
import Cart from "./components/cart/Cart";
import NewItem from "./components/admin/createItem/NewItem";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import ConfirmOrder from "./components/cart/confirmOrder/ConfirmOrder";
import { Toaster } from "react-hot-toast";
import Shipping from "./components/cart/shipping/Shipping";
import PaymentSuccess from "./components/cart/paymentSuccess/PaymentSuccess";
import EmptyCart from "./components/cart/emptyCart/EmptyCart";
import MyProfile from "./components/profile/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import {ProtectedRoute } from "protected-route-react";



//styles
import "./styles/app.scss"

function App() {

  const dispatch = useDispatch();

  // const { isAuthenticated } = useSelector((state) => state.auth)

  useEffect(() => {

    dispatch(loadUser())
  }, [dispatch])




  return (
    <div className="App">
      <Router>
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element= {<Login/>} />
          
          

         
            <Route path="/me" element={<MyProfile />} />
            <Route path="/admin/item/new" element={<NewItem />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
            <Route path="/emptycart" element={<EmptyCart />} />
         
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
