// Hero.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faMaximize } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';
import shoe1 from '../Assests/shoe1.png';
import shoe2 from '../Assests/shoe2.png';
import shoe3 from '../Assests/shoe3.png';
import shoe4 from '../Assests/shoe4.png';

const Hero = ({ setSelectedShoe, addToCart }) => {
    const navigate = useNavigate();
  
    const handleAddToCart = (shoeName, price) => {
      addToCart({
        name: shoeName,
        quantity: 1,
        price: price,
      });
      console.log(`Added ${shoeName} to cart`);
    };
  
    const handleSelectShoe = (shoeImage, shoeDetails) => {
      setSelectedShoe(shoeImage);
      navigate('/shop');
    
        setSelectedShoe(shoeImage);
        navigate('/myaccount', { state: { shoeDetails } }); // Pass shoeDetails as state
      };

    return (
        <div className='body'>
            <div className='background'>
            <div className='hero'>
                <br /><br /><br />
                <p style={{float:'left', transform: 'translate(30px,0px)'}}>
                    <span style={{color:'white'}}>Home</span>/Shop</p>
                <h3>Shop</h3>
                <br /><br />
                <div className="hero-hand-icon">
            <div className="shoeimage">
              <div className='shoebg'>
                <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 270 to Chuck Taylors', 336)}>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </button>
                <Link to="/shop" onClick={() => handleSelectShoe(shoe1)}>
                  <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                </Link>
                <img src={shoe1} alt="Shoe 1" />
                <h3 className="nike">Nike Air Max 270 to</h3>
                <h3 className="nike1">Chuck Taylors</h3>
                <span className="price">336</span>
              </div>
            </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Force 1')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe2)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe2} alt="Shoe 2" />
                        <h3 className="nike">Nike Air Force 1</h3>
                        <span className="price">350</span>
                        </div>
                    </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 95')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe3)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe3} alt="Shoe 3" />
                        <h3 className="nike">Nike Air Max 95</h3>
                        <span className="price">400</span>
                        </div>
                    </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 97')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe4)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe4} alt="Shoe 4" />
                        <h3 className="nike">Nike Air Max 97</h3>
                        <span className="price">500</span>
                            </div>
                    </div>
                </div>
            
                <br />
                <br />
                <h3>Related Product</h3>

        
                <div className="hero-hand-icon">
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 270 to Chuck Taylors')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe1)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe1} alt="Shoe 1" />
                        <h3 className="nike">Nike Air Max 270 to</h3>
                        <h3 className="nike1">Chuck Taylors</h3>
                        <span className="price">336</span>
                        </div>
                    </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Force 1')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe2)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe2} alt="Shoe 2" />
                        <h3 className="nike">Nike Air Force 1</h3>
                        <span className="price">350</span>
                        </div>
                    </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 95')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe3)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe3} alt="Shoe 3" />
                        <h3 className="nike">Nike Air Max 95</h3>
                        <span className="price">400</span>
                        </div>
                    </div>
                    <div className="shoeimage">
                    <div className='shoebg'>
                        <button className="add-to-cart" onClick={() => handleAddToCart('Nike Air Max 97')}>
                            <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                        <Link to="/shop" onClick={() => handleSelectShoe(shoe4)}>
                            <FontAwesomeIcon className="faMaximize" icon={faMaximize} />
                        </Link>
                        <img src={shoe4} alt="Shoe 4" />
                        <h3 className="nike">Nike Air Max 97</h3>
                        <span className="price">500</span>
                        </div>
                   </div>
               </div>
             </div>
             </div>
             </div>

    );
}

export default Hero;
