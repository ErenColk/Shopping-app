import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { basket, setBasket, totalPrice } = useContext(ProductContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className="main-nav">
      <div className="main-div">
        <div className="title">
          <Link to={"/"}>TrendyCart</Link>
        </div>
        <ul className="main-ul">
          <li id="basket">
            <i className="fas fa-shopping-basket"></i>
            <Link onClick={openModal}> Sepet</Link>
          </li>
          <div>
            {isOpen && (
              <div className="modal-overlay" onClick={closeModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                  <h2>Sepet</h2>
                  <br />
                  <div className="product-info">
                    {basket.map((basket, index) => (
                      <div key={index} className="product-item">
                        <img src={basket.images[0]} alt="Ürün Fotoğrafı" />
                        <div className="product-details">
                          <p>Ürün Adı: {basket.title}</p>
                          <p>Fiyat: {basket.price}</p>
                          <p>Adet: 1</p>
                        </div>
                        <button
                          className="remove-button"
                          onClick={() => removeFromBasket(index)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                        <div className="quantity-control">
                          <button
                            className="quantity-button"
                            onClick={() => decreaseQuantity(index)}
                            id="negative"
                          >
                            <i className="fas fa-minus"></i>
                          </button>
                          <span className="quantity-number">1</span>
                          <button
                            className="quantity-button"
                            id="pozitive"
                            onClick={() => increaseQuantity(index)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="basket-button">
                    <span className="total-price">
                      Toplam Ücret: {totalPrice}${" "}
                    </span>
                    <button className="btn-closed" onClick={closeModal}>
                      Kapat
                    </button>
                    <button className="btn-buy" onClick={closeModal}>
                      Satın Al
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <li id="menu">
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li id="home">
            <Link to={"/products"}>Ürünler</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
