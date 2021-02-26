import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../products/Products';
import Cart from '../cart/Cart';
 
import './shop.css'

const Shop = () => {
    const product15 = fakeData.slice(0, 15);

    const [products, setProducts] = useState(product15);
    const [cart, setCart] = useState([]);
    //  useEffect(() => {
    //      setProducts();
    //  }, [])
    const handleAddProduct = (product) =>{
        console.log("Logged", product);
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (

        <div className="shop-container"> 
            <div className="product-container">        
            {
              products.map(product => (                   
                  <Products product={product}
                  handleAddProduct={handleAddProduct} />                    
              ))
                    }
                
            </div>
            <div className="cart-container">
             
                <Cart cart={ cart}/>
               
            </div>
        </div>        
    );
};

export default Shop;