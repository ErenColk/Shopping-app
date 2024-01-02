import React, { createContext, useEffect, useState } from "react";
import CategoryService from "../services/CategoryService";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const categoryTitleList = {
    electronicProducts: ["Smartphones", "Laptops"],
    moda: [
      "Fragrances",
      "Skincare",
      "Tops",
      "Women's Dresses",
      "Women's Shoes",
      "Men's Shirts",
      "Men's Shoes",
      "Men's Watches",
      "Women's Watches",
      "Women's Bags",
      "Women's Jewellery",
      "Sunglasses",
    ],
    decoration: ["Groceries", "Home Decoration", "Furniture"],
    transportationAndAccessories: ["Automotive", "Motorcycle", "Lighting"],
  };


  useEffect(() => {
    const getCategoryList = async () => {
      const response = await CategoryService.getCategory();
      setCategories(response);
    };

    getCategoryList();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
