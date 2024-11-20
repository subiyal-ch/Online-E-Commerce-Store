import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleAddToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, newItem];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={isAuthenticated ? <Product /> : <Navigate to="/signin" />}
        />
        <Route
          path="/products/:category"
          element={isAuthenticated ? <Product /> : <Navigate to="/signin" />}
        />
        <Route
          path="/product/details/:id" // Update this path to match your navigation
          element={
            isAuthenticated ? (
              <ProductDetails onAddToCart={handleAddToCart} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />

        <Route
          path="/cart"
          element={
            isAuthenticated ? (
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/signin"
          element={
            !isAuthenticated ? (
              <SignIn onSignIn={handleSignIn} />
            ) : (
              <Navigate to="/products" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUp onSignIn={handleSignIn} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
