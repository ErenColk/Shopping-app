import React, { useContext, useEffect, useState } from "react";
import "./CategoryFiltering.css";
import { ProductContext } from "../context/ProductContext";
const CategoryFiltering = () => {
  const [changedMenu, setChangedMenu] = useState(false);

  const {
    products,
    setProducts,
    copyProducts,
    setCopyProducts,
    selectedCategory,
    setSelectedCategory,
    getBrandList,
    brands,
    isEmptyBrand,
    setIsEmptyBrand,
    setSelectedBrand,
  } = useContext(ProductContext);

  useEffect(() => {
    handleGetProducts("All");
    getBrandList();
  }, []);

  const handleGetProducts = async (categoryName) => {
    const filteredProduct = copyProducts.filter(
      (product) => product.category === categoryName
    );
    if (categoryName === "All") {
      await setProducts(copyProducts);
    } else {
      await setChangedMenu(true);
      await setProducts(filteredProduct);
    }
    await setSelectedCategory(categoryName);
    setSelectedBrand("");
  };

  return (
    <div className="container-category">
      <div className="row">
        <div className="col text-center my-4">
          <h1 className="fs-2">Kategoriler</h1>
          <div className="underline mx-auto mt-3"></div>
        </div>
      </div>
      <div className="row mt-3 mb-4 button-group filter-button-group">
        <div className="col">
          <div className="button-container">
            <button
              type="button"
              onClick={() => handleGetProducts("All")}
              className="btn btn-primary mx-1 text-dark"
            >
              Hepsi
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("smartphones")}
              className="btn btn-primary mx-1 text-dark"
            >
              Akıllı Telefonlar
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("laptops")}
              className="btn btn-primary mx-1 text-dark"
            >
              Dizüstü Bilgisayarlar
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("fragrances")}
              className="btn btn-primary mx-1 text-dark"
            >
              Kokular
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("skin care")}
              className="btn btn-primary mx-1 text-dark"
            >
              Cilt Bakımı
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("groceries")}
              className="btn btn-primary mx-1 text-dark"
            >
              Yiyecek
            </button>
            <button
              type="button"
              onClick={() => handleGetProducts("home-decoration")}
              className="btn btn-primary mx-1 text-dark"
            >
              Ev Dekorasyonu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFiltering;
