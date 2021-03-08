import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Products from '../products/Products';
import './product_detail.css'

const Product_Details = () => {
    const { product_key } = useParams();
    const products = fakeData.find(pd => pd.key === product_key);
    console.log(products);
    
    return (
        <>
            <h4> Details Information</h4>
         <div className="product-container"> 
        
            <Products handleButton={false} product={products}/>  
        </div>
        </>
    );
};

export default Product_Details;