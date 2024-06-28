import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Context/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Footer/footer";
import banner_women from "./Assets/banner_women.png";
import banner_men from "./Assets/banner_mens.png";
import banner_kid from "./Assets/banner_kids.png";

function App() {
  const banners = {
    women: banner_women,
    men: banner_men,
    kid: banner_kid,
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar banners={banners} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/category/:categoryName" element={<ShopCategory />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
