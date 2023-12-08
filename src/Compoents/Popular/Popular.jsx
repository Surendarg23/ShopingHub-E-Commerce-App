import React from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    let p1_img = "./Assests//product_1.png";
    let p2_img = "./Assests//product_2.png";
    let p3_img = "./Assests//product_3.png";
    let p4_img = "./Assests//product_4.png";

    let data_product = [
        {
            id: 1,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: p1_img,
            new_price: 50.00,
            old_price: 80.50,
        },
        {
            id: 2,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: p2_img,
            new_price: 85.00,
            old_price: 120.50,
        },
        {
            id: 3,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: p3_img,
            new_price: 60.00,
            old_price: 100.50,
        },
        {
            id: 4,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            image: p4_img,
            new_price: 100.00,
            old_price: 150.00,
        },
    ];

    return (
        <div className='popular'>
            <h1>Popular in Women</h1>
            <hr />
            <div className='popular-item'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                })}
            </div>
        </div>
    );
};

export default Popular;
