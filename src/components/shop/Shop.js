import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../products/Products';
 
import './shop.css'

const Shop = () => {
    const product10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(product10);
    //  useEffect(() => {
    //      setProducts();
    //  }, [])

    return (

        <div className="shop-container">
     
            
            <div className="product-container">        
            {
              products.map(product => (
                    
                  <Products product={product} />
            ))
                    }
                
            </div>
            {/* <div className="cart-container">
                <h4>This is cart</h4>
                <div>
                    <h1>price: $56</h1>
                    <h2>tax:20%</h2>
                </div>
            </div> */}
        </div>

        
    );
};

export default Shop;