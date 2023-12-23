import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./common/header/Header";
import ProductPage from "./components/ProductPage";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Login from "./common/auth/login";
import Footer from "./common/footer/Footer";
import SignUp from "./common/auth/SignUp";
// import Sdata from "./components/shops/Sdata";
import axios from "axios";

function App() {
  const [shopItems, setShopItems] = useState([]);

  axios.get("http://3.129.65.105:8080/products").then(function (response) {
    setShopItems(response.data);
  });
  const { productItems } = Data;
  const [CartItem, setCartItem] = useState([]);
  useEffect(() => {
    axios.get("http://3.22.119.46:8080/cart").then(function (response) {
      setCartItem(response.data ? response.data : []);
    });
  }, []);
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    let updateCart = CartItem;
    if (productExit) {
      updateCart = CartItem.map((item) =>
        item.id === product.id
          ? { ...productExit, qty: productExit.qty + 1 }
          : item
      );
      setCartItem(updateCart);
    } else {
      updateCart = [...CartItem, { ...product, qty: 1 }];
      setCartItem(updateCart);
    }
    axios.post("http://3.22.119.46:8080/cart", updateCart);
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    let updateCart = CartItem;
    if (productExit.qty === 1) {
      updateCart = CartItem.filter((item) => item.id !== product.id);
      setCartItem(updateCart);
    } else {
      updateCart = CartItem.map((item) =>
        item.id === product.id
          ? { ...productExit, qty: productExit.qty - 1 }
          : item
      );
      setCartItem(updateCart);
    }
    axios.post("http://3.22.119.46:8080/cart", updateCart);
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Sign-Up">
            <SignUp />
          </Route>
          <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/productpage" exact>
            <ProductPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
