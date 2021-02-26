import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const item = cart.length;
    // console.log(cart);
    // const totalPrice = cart.reduce((total, product) =>   (total + product.price), 0);
 
    let totalPrice = 0;
     for (let i = 0; i < cart.length; i++) {
         const element = cart[i];
         totalPrice += element.price;
         
     }
        let shipping = 0;
    if (totalPrice > 40) {
        shipping = 0;
    }
    else if (totalPrice > 0 && totalPrice < 40) {
        shipping = 12.50;
    }
    const tax = totalPrice * .04;
    
    const netTotal = totalPrice + tax + shipping;
    return (
        <div>
           
                <h3>Order Summery </h3>
                <hr />
            <h4>Ordered Item : { item}</h4>
            <h5>Product price : $ {totalPrice.toFixed(2)}</h5>
            <h5>Shipping cost : $ {shipping.toFixed(2)} </h5>
            <h5>Tax : $ { tax.toFixed(2)}</h5>
                <hr/>
                <h5>Total : $ {netTotal.toFixed(2)}</h5>
                <button className="review-btn">Review Order</button> 
        </div>
    );
};

export default Cart;