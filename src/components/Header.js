import React from 'react';
import logo from '../images/logo.png'
import './header.css'
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
                {/* <span>
                    <i class="fa fa-shopping-cart">Cart</i>
                </span> */}
                <div className="nav-link">
                      <ul>
                    <a href="/home">
                        <li className="link">Home</li>
                    </a>
                    <a href="/shope">
                        <li className="link">Shop</li>
                    </a>
                    <a href="/review">
                        <li className="link">Review</li>
                    </a>
                </ul>
              </div>
            </nav>
        </div>
    );
};

export default Header;