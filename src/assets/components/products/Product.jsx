import React, { useContext } from "react";
import "./Product.css";
import { ProductContext } from "../context/ProductContext";

const Product = ({ product }) => {
  const { basket, setBasket, products, setProducts ,totalPrice,setTotalPrice } =
    useContext(ProductContext);

  const renderStars = (rating) => {
    const starCount = 5;
    const fullStars = Math.round(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }

    const emptyStars = starCount - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="star">
          &#9734;
        </span>
      );
    }

    return stars;
  };

  const HandleAddBasket = (id) => {
    const product = products.find((product) => product.id === id);

    setTotalPrice(totalPrice + product.price)
    console.log(totalPrice)
    setBasket([...basket,product]);
    console.log(basket);
  };

  return (
    <div className="card">
      <div>
        <div
          className="card-image"
          style={{ backgroundImage: `url(${product.images[0]})` }}
        ></div>
        <div className="title-description">
          <h2>{product.title}</h2>
          <h3>{product.description}</h3>
        </div>
      </div>

      <div className="card-content">
        <div className="price-container">
          <h4>{product.price}$</h4>
          <div className="rating-container">{renderStars(product.rating)}</div>
          <button className="cart-button" onClick={()=> HandleAddBasket(product.id)}>
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
