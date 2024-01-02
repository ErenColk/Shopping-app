import React from "react";
import axios from "axios";
const CategoryService = {

  getCategory: async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      
      return response.data;
    } catch (error) {}
  },
};

export default CategoryService;
