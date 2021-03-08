import React from 'react';
import "./products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Products = (props) => {
    
    const features = props.product.features;
    const {name,key,price,stock,category,seller,img } = props.product;
     
    return (
         
        <div className="product">
            <div className="product-title">
                <h4><Link to= {`/product/${key}`}>{name}</Link></h4>
            </div>
            <div className="product-basic-info">
                  
                 <img src={props.product.img} alt=""/> 
                <p>Price :<span className="price"> ${price}
                </span> </p>
                <h4 className="available">Available : { stock}</h4>
              
            </div>
            <div className="product-about">
                <h4>Category : { category}</h4>
                  <h5>Seller : { seller }</h5>
                <div className="product-features">
                    <h4>Features :</h4>
                    {
                      
                        features.map(fet => <p>{fet.description} : <strong>{fet.value} </strong></p>
                         
                        )
                       
                    }
                    
                    
             </div>
               
            </div>
              <div className="btn">
               {props.handleButton &&<button className="cart-btn" onClick={()=>props.handleAddProduct(props.product) }> <FontAwesomeIcon icon={faCartPlus}/> Add to cart</button>}
                    </div>
            </div>
               
        
    );
};

export default Products;