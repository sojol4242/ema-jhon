import React  from 'react';
import './App.css';
import Header from './components/Header.js';
import Review from './components/review/Review';
import Shop from './components/shop/Shop';
 



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/cart/Cart';
import NotMatch from './components/notMatch/NotMatch';
import Product_Details from './components/product-details/Product_Details';
function App() {
  return (
    <>
      <Header />
          
      <Router>
     
        <Switch>
           <Route path="/home">
           <Shop />
          </Route>       
          <Route path="/cart">
        <Cart />
          </Route>
           <Route path="/review">
           <Review />
          </Route>
           <Route exact path="/">
           <Shop />
          </Route>
          <Route path="/product/:product_key">
            <Product_Details>
            
            </Product_Details>
          </Route>
           <Route path="*">
              <NotMatch />
          </Route>
      
        </Switch>
      </Router>
   
      
       
    </>
  );
}

export default App;
