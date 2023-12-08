// Shop.jsx
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ChromePicker } from 'react-color';
import Rating from 'react-rating-stars-component';
import { Link, useNavigate } from 'react-router-dom';
import './Shop.css';

const shoes = [
  { id: 1, name: 'Nike Air Max 270 to Chuck Taylors', price: 336 },
  { id: 2, name: 'Nike Air Force 1', price: 350 },
  { id: 3, name: 'Nike Air Max 95', price: 400 },
  { id: 4, name: 'Nike Air Max 97', price: 500 },
  { id: 5, name: 'Adidas Superstar', price: 680 },
  { id: 6, name: 'Adidas v8', price: 880 },
  { id: 7, name: 'Adidas 11', price: 380 },
  // Add more shoes as needed
];

const Shop = ({ selectedShoe }) => {
  const [rating, setRating] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default color is black
  const [selectedSize, setSelectedSize] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className='shopbackground'>
      <div className='shopbody'>
        <div className='body'>
          <div className='shop'>
            <h2>Shop</h2>
            {selectedShoe && (
              <div className="selected-shoe">
                <img
                  src={selectedShoe}
                  alt="Selected Shoe"
                  style={{
                    width: '400px',
                    height: '250px',
                    transform: 'translate(700px, 40px)',
                    border: '2px solid white',
                    borderRadius: '180px',
                    padding: '10px',
                  }}
                />

                <div className="rating-section">
                  <h3>Reviews</h3>
                  <Rating
                    count={5}
                    onChange={handleRatingChange}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p>{`Rating: ${rating}/5`}</p>
                </div>

                <div className="color-section">
                  <h3>Select Color</h3>
                  <div
                    className="color-picker-preview"
                    style={{ backgroundColor: selectedColor }}
                    onClick={toggleColorPicker}
                  ></div>
                  {showColorPicker && (
                    <ChromePicker
                      color={selectedColor}
                      onChange={handleColorChange}
                    />
                  )}
                </div>
                <br />
                <br />

                <div className="size-section">
                  <h3>Select Size</h3>
                  <select
                    value={selectedSize}
                    onChange={(e) => handleSizeChange(e.target.value)}
                  >
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
                </div>
              </div>
            )}
            <div className='relatedproduct'>
            <h1 >Related Product</h1>
            {shoes.map((shoe) => (
              <div key={shoe.id}>
                <h3>{shoe.name}</h3>
                <p>Price: ${shoe.price}</p>
                <Link to="/myaccount" state={{ shoe }}>
                  <button>View Details</button>
                </Link>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Shop;
