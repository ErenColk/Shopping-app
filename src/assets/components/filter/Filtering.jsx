import React, { useContext, useEffect, useState } from "react";
import "./Filtering.css";
import { ProductContext } from "../context/ProductContext";

const Filtering = () => {
  const {
    products,
    setProducts,
    copyProducts,
    brands,
    selectedBrand,
    setSelectedBrand,
    setFilteredBrand,
    setFilteredProduct,
    setFiltredPrice,
  } = useContext(ProductContext);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const handleBrandChange = (brand) => {
    setFilteredBrand(brand);
    setFilteredProduct(brand);
  };

  const handlePriceRange = (e) => {
    e.preventDefault();

    setFiltredPrice(minPrice,maxPrice)
    console.log(filtredProducts);
  };

  useEffect(() => {
    const refreshList = () => {
      if (selectedBrand.length <= 0) {
        setProducts(copyProducts);
      }
    };
    refreshList();
  }, [selectedBrand]);
  return (
    <div className="filtering-container">
      <div className="filtering">
        <div className="filter-header">
          <h2>
            <i className="fas fa-filter"></i> FILTER
          </h2>
        </div>
        <div className="filter-content">
          <br />
          <div className="checkbox">
          <h3>Marka</h3>
            {brands.map((brand, index) => (
              <div key={index} className="checkbox-child">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrand.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
          <br />
          <hr />
          <br />
          <h3>Değerlendirme</h3>
          <div className="rating">
            <div key={"checkbox1"} className="rating-child">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={"rating-1"}
                onClick={() => handleRating(1)}
              />
              <label htmlFor={"rating-1"} key={1} className="filter-star">
                &#9733;
              </label>
            </div>
          </div>
          <div className="rating">
            <div key={"checkbox1"} className="rating-child">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={"rating-2"}
                onClick={() => handleRating(2)}
              />
              {Array.from({ length: 2 }, (_, index) => (
                <label key={index} htmlFor={"rating-2"} className="filter-star">
                  &#9733;
                </label>
              ))}
            </div>
          </div>
          <div className="rating">
            <div key={"checkbox1"} className="rating-child">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={"rating-3"}
                onClick={() => handleRating(3)}
              />
              {Array.from({ length: 3 }, (_, index) => (
                <label key={index} htmlFor={"rating-3"} className="filter-star">
                  &#9733;
                </label>
              ))}
            </div>
          </div>
          <div className="rating">
            <div key={"checkbox1"} className="rating-child">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={"rating-4"}
                onClick={() => handleRating(4.7)}
              />
              {Array.from({ length: 4 }, (_, index) => (
                <label key={index} htmlFor={"rating-4"} className="filter-star">
                  &#9733;
                </label>
              ))}
            </div>
          </div>
          <div className="rating">
            <div key={"checkbox1"} className="rating-child">
              <input
                type="checkbox"
                className="custom-checkbox"
                id={"rating-5"}
                onClick={() => handleRating(5)}
              />
              {Array.from({ length: 5 }, (_, index) => (
                <label key={index} htmlFor={"rating-5"} className="filter-star">
                  &#9733;
                </label>
              ))}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h3>Fiyat Aralığı</h3>
          <form onSubmit={handlePriceRange}>
            <div className="price-range">
              <label htmlFor="minPrice">Min: </label>
              <input
                type="number"
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <label htmlFor="maxPrice">Max: </label>
              <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button type="submit" >Uygula</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
