import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Myaccount.css';

const Myaccount = () => {
  const location = useLocation();
  const { state } = location;

  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { name, price } = state?.shoe || {};

  const handleAddToCart = () => {
    if (!name || !price) {
      return;
    }

    // Check if the product is already in the cart
    const existingProduct = cart.find((product) => product.name === name);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cart.map((product) =>
        product.name === name ? { ...product, quantity: product.quantity + 1 } : product
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { name, price, quantity: 1 }]);
    }

    // Update total amount
    setTotalAmount(totalAmount + price);
  };

  const handleRemoveFromCart = () => {
    if (!name || !price) {
      return;
    }

    // Check if the product is in the cart
    const existingProduct = cart.find((product) => product.name === name);

    if (existingProduct) {
      // If the product is in the cart, update the quantity
      const updatedCart = cart
        .map((product) =>
          product.name === name ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product) => product.quantity > 0);
      setCart(updatedCart);

      // Update total amount
      setTotalAmount(totalAmount - price);
    }
  };

  const navigate = useNavigate();
  const handleOrderNow = () => {
    
    // Perform any necessary order-related logic here

    // Navigate to the Orderinfo page
    navigate('/Orderinfo');
  };

  const handleShoeClick = (shoe) => {
    navigate('/myaccount', { state: { shoe } });
  };

  const UpdatePassword = () => {};

  return (
    <div>
      <UpdatePassword />

      <div className='shoe-details'>
        <h2 style={{textDecoration:'underline'}}>Shoe Details</h2><br />
        <p>Name: {name}</p>

        <p>Price: ${price}</p>
        <h3>Select Size</h3>
        <select>
          <option value="" disabled>
            Choose a size
          </option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
          <option value="47">47</option>
          <option value="48">48</option>
        </select>
        <br />
        <br />
        <h2>Total: ${totalAmount}</h2>
        <br />

        <button onClick={handleAddToCart} style={{ backgroundColor: 'green', marginRight: '10px' }}>
          Add to Cart
        </button>
        <button onClick={handleRemoveFromCart} style={{ backgroundColor: 'red' }}>
          Remove from Cart
        </button>
      </div>

      <div className='cart-details'>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
      <a href="Orderinfo"><button className='order-btn'>Order now</button></a>

      <div className='updatepw'>
        <h2>Update Password</h2>
        <br />
        <form>
          <label>Email:</label>
          <br />
          <input type="email" placeholder="suren@gmail.com" />
          <br />
          <br />
          <label>Currect Password:</label>
          <br />
          <input type="password" />
          <br />
          <br />
          <label>New Password:</label>
          <br />
          <input type="password" />
          <br />
          <br />
          <label>Confirm Password:</label>
          <br />
          <input type="password" />
          <br />
          <br />
          <button>Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default Myaccount;
