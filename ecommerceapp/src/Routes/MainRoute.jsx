import React from "react";
import HomePage from "../components/Homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./../components/ProductPage/CategoryPage";
import ProductDetailsPage from "./../components/ProductPage/ProductDetailsPage";
import CartPage from "./../components/Cart&WishlistPage/CartPage";
import WishlistPage from "./../components/Cart&WishlistPage/WishlistPage";
import Signup from "./../components/Auth/Signup";
import Login from "./../components/Auth/Login";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:categoryId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
