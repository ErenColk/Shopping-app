import React, { createContext, useEffect, useState } from "react";
import ProductService from "../services/ProductService";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [copyProducts, setCopyProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await ProductService.getProduct();
        setProducts(response);
        setCopyProducts(response);
      } catch (error) {
        console.error("Ürünleri getirirken hata oluştu:", error);
      }
    };

    getProductList();
  }, []);

  useEffect(() => {
    getBrandList();
  }, [products]);

  const setFilteredBrand = (brand) => {
    setSelectedBrand((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter(
          (selectedBrand) => selectedBrand !== brand
        );
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const setFilteredProduct = (brand) => {
    const filteredProducts = products.filter(
      (product) => product.brand === brand
    );
    setProducts(filteredProducts);
  };

  const setFiltredPrice = (minPrice, maxPrice) => {
    const filtredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setProducts(filtredProducts);
  };

  const getBrandList = () => {
    try {
      const filteredBrands = [];
      copyProducts.forEach((product) => {
        if (!filteredBrands.includes(product.brand)) {
          filteredBrands.push(product.brand);
        }
      });

      setBrands(filteredBrands);
    } catch (error) {
      console.error("Markaları getirirken hata oluştu:", error);
    }

    console.log(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        copyProducts,
        setCopyProducts,
        selectedCategory,
        setSelectedCategory,
        getBrandList,
        brands,
        selectedBrand,
        setSelectedBrand,
        setFilteredBrand,
        setFilteredProduct,
        setFiltredPrice,
        basket,
        setBasket,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
