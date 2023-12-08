import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>ShopHub</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration:'none'}}to='/'>Home</Link></li>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration:'none'}}to='/Shop'>Shop</Link></li>
                <li onClick={() => { setMenu("blog") }}><Link style={{ textDecoration:'none'}}to='/Blog'>Blog</Link></li>
                <li onClick={() => { setMenu("contact") }}><Link style={{ textDecoration:'none'}}to='/Contact'>Contact</Link></li>
                <li onClick={() => { setMenu("login") }}><Link style={{ textDecoration:'none'}}to='/Login'>Login</Link></li>
                <li onClick={() => { setMenu("signup") }}><Link style={{ textDecoration:'none'}}to='/Signup'>Signup</Link></li>
                <li onClick={() => { setMenu("myaccount") }}><Link style={{ textDecoration:'none'}}to='/Myaccount'>My Account</Link></li>
            </ul>
            <Link to='/Cart'><img className="cart" src={cart_icon} alt='' /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    );
}

export default Navbar;
