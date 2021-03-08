import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from './ReviewItem';
import './review.css';
import Cart from '../cart/Cart';
import image from '../../images/giphy.gif'
 
const Review = () => {
    const [cart, setCart] = useState([]);
    const removeCart = (product_key) => {
       // console.log("Removed",product_key);
        const newCart = cart.filter(pd => pd.key !== product_key);
        setCart(newCart);
        removeFromDatabaseCart(product_key);
}

  const [orderPlaced,setOrderPlaced] = useState(false);
    const handlePlaceOrder = () => {
        // console.log("placed");
      
        
        setCart([]);
        setOrderPlaced(true)
        processOrder();
        

    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const product_keys = Object.keys(savedCart);
        const cartProducts = product_keys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);

        // console.log(cartProducts);
},[]);

    let thanks;
    if (orderPlaced) {
        thanks = <img src={image} alt="" />;
        
    }
    return (
        <div className="shop-container"> 
            <h2>Order Review</h2>
            <h3>Total Item : { cart.length}</h3>
            <div className="product_container">
                   {
                cart.map(pd => <ReviewItem
                    product={pd}
                    key={pd.key}
                    removeCart={removeCart}   
                />)
                }
                {
                   thanks
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}>
                    
                    <button className="review-btn"
                    onClick={handlePlaceOrder}
                    >Place Order</button>  
                </Cart>
            </div> 
        </div>
    );
};

export default Review;