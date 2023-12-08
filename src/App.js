// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Compoents/Navbar/Navbar';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Hero from './Compoents/Hero/Hero';
import Myaccount from './Pages/Myaccount';
import Orderinfo from './Pages/Orderinfo'
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedShoe, setSelectedShoe] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Hero setSelectedShoe={setSelectedShoe} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} selectedShoe={selectedShoe} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shopcategory" element={<ShopCategory />} />
          <Route path="/product/:ProductId" element={<Product />} />
          <Route path="/myaccount" element={<Myaccount />} />

          <Route path="/myaccount" element={<Myaccount shoeDetails={selectedShoe} />} />
          <Route path="/Orderinfo" element={<Orderinfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
