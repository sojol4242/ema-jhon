import React from 'react';
import "./products.css";

const Products = (props) => {
    console.log(props);
    const features = props.product.features;
     
    return (
         
        <div className="product">
            <div className="product-title">
                <a href="#">{props.product.name}</a>
            </div>
            <div className="product-basic-info">
                  
                 <img src={props.product.img} alt=""/> 
                <p>Price :<span className="price"> ${props.product.price}
                </span> </p>
                <h4 className="available">Available : {props.product.stock}</h4>
              
            </div>
            <div className="product-about">
                <h4>Category : {props.product.category}</h4>
                  <h5>Seller : {props.product.seller }</h5>
                <div className="product-features">
                    <h4>Features :</h4>
                    {
                      
                        features.map(fet => <p>{fet.description} : <strong>{fet.value} </strong></p>
                         
                        )
                       
                    }
                    
                    
             </div>
               
            </div>
              <div className="btn">
                    <button className="cart-btn">Add to cart</button>
                    </div>
            </div>
               
        
    );
};

export default Products;