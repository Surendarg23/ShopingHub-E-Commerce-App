// Orderinfo.jsx
import React, { useState } from 'react';
import './Orderinfo.css'

const Orderinfo = ({ location }) => {
  const { state } = location || {};

  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: '',
    cardNumber: '',
    expiryMonthYear: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of customer details, e.g., send to the server
    console.log('Submitted customer details:', customerDetails);
  };

  return (
    <div className='Orderinfo'>
      <h2>Order Information</h2>
      <p>Total: ${state?.Total}</p>

      <form onSubmit={handleSubmit}>
      <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={customerDetails.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={customerDetails.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Address:
          <textarea
            name="address"
            value={customerDetails.address}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        
        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={customerDetails.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose a payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="gpay">Google Pay</option>
            <option value="phonePe">PhonePe</option>
            {/* Add more payment methods as needed */}
          </select>
        </label>
        <br />

        {customerDetails.paymentMethod === 'creditCard' && (
          <>
            <label>
              Card Number:
              <input style={{width:'150px', height:'5px'}}
                type="text"
                name="cardNumber"
                placeholder='1234-5678-9012'
                value={customerDetails.cardNumber}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label>
              Expiry Month/Year:
              <input style={{width:'50px', height:'5px'}}
                type="text"
                name="expiryMonth"
                placeholder='01/01'
                value={customerDetails.expiryMonth}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label>
              CVV:
              <input style={{width:'50px', height:'5px'}}
                type="text"
                name="cvv"
                placeholder='123'
                value={customerDetails.cvv}
                onChange={handleChange}
                required
              />
            </label>
           
          </>
        )}
         <br />

        <button type="submit">Submit Order</button>
      
      </form>
    </div>
  );
};

export default Orderinfo;
