import React from "react";
import CategoryFiltering from "../../assets/components/filter/CategoryFiltering";
import Filtering from "../../assets/components/filter/Filtering";
import ProductsList from "../../assets/components/products/ProductList";
import "./Products.css";
const ProductsPage = () => {
  return (
    <div className="container">
      <div className="category-container">
        <CategoryFiltering />
      </div>
      <div className="product-container">
        <Filtering />

        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
