import React from 'react';
import './review.css';
const ReviewItem = (props) => {
    const { name, quantity, img, key, price } = props.product;
    
    return (
        <div className="shop-container">
            <div className="product_container">
                   <h4>Product Name : {name}</h4>
            <img src={img} alt=""/>
             
                <p>Product Quantity : {quantity}</p>
                <p>Product price :  ${price}</p>
            <button className='remove-btn'
            onClick={()=>props.removeCart(key)}
            >Remove</button>
         </div>            
        </div>
    );
};

export default ReviewItem;