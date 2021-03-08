import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
 
import logo from '../images/logo.png'
import './header.css';

const Header = () => {
    return (
     
             <div className="header">   
            <nav className="nav-bar">
             <div className="logo">
                 <img src={logo} alt=""/>  
                </div>
                <div className="search-box">
                    <input type="text" />
                <button type="submit">Search</button>
                </div>
{/*                
                <span>
                    <i class="fa fa-shopping-cart">Cart</i>
                </span> */}
                <div className="nav-link">
                      <ul>
                    {/* <Link to="/home"> <li className="link">Home</li></Link>
                    <Link to="/home">  <li className="link">Cart</li></Link>
                    <Link to="/review">  <li className="link">Review order</li></Link> */}
                    <a href="/home">
                        <li className="link">Home</li>
                    </a>
                 <a href="/home">
                        <li className="link">Cart</li>
                    </a>
                    <a href="/review">
                        <li className="link">Review</li>
                    </a>
                        
                </ul>
                </div>
                <div className="nav-cart-btn">
                     <FontAwesomeIcon icon={faCartPlus}/>
                </div>
                </nav>
           
        </div>
        
       
    );
};

export default Header;