import React, { useContext } from "react";
import "./ProductList.css";
import Product from "./Product";
import { ProductContext } from "../context/ProductContext";


const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="container">            
        <div className="cards">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
};

export default ProductsList;
