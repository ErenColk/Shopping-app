import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/Header";
import { CategoryContextProvider } from "./assets/components/context/CategoryContext";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { ProductContextProvider } from "./assets/components/context/ProductContext";
import BasketPage from "./pages/BasketPage/BasketPage";
function App() {
  return (
    <>
      <Router>
        <ProductContextProvider>
          <CategoryContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/basket" element={<BasketPage />} />
              
            </Routes>
          </CategoryContextProvider>
        </ProductContextProvider>
      </Router>
    </>
  );
}

export default App;
