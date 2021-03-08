import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../products/Products';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
 
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const product15 = fakeData.slice(0, 15);

    const [products, setProducts] = useState(product15);
    const [cart, setCart] = useState([]);
    //  useEffect(() => {
    //      setProducts();
    //  }, [])
       useEffect(() => {
           const savedCart = getDatabaseCart();
           console.log(savedCart);
           const product_keys = Object.keys(savedCart);
           console.log(product_keys);
        const cartProducts = product_keys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        //    console.log(cartProducts);
        setCart(cartProducts);
        // console.log(savedCart);
},[])
    const handleAddProduct = (product) =>{
        const productToBeAdddedKey= product.key;
        const sameProduct = cart.find(pd => pd.key === productToBeAdddedKey);
        let count =1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity+1;
            sameProduct.quantity = count;
            const others=cart.filter(pd=>pd.key!==productToBeAdddedKey)
             newCart = [...others, sameProduct];
        }
        else {
         product.quantity = 1;
         newCart = [...cart, product];
        }
     
        setCart(newCart);
     
        // const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }

    return (

        <div className="shop-container"> 
            <div className="product-container">        
            {
              products.map(product => (                   
                  <Products 
                  key={product.key}
                      product={product}
                      
                  handleButton={true}
                  handleAddProduct={handleAddProduct} />                    
              ))
                    }
                
            </div>
            <div className="cart-container">        
                <Cart cart={ cart}
                
                >

                    <Link to="/review"> <button className="review-btn">Review Order</button> </Link>
                </Cart>
            </div>
        </div>        
    );
};

export default Shop;