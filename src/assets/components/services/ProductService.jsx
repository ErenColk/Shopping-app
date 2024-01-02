import axios from "axios";

const ProductService = {
    
  getProduct : async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    } catch (error) {
      return error;
    }
  },  

   getProductBrand : async () => {

    try {
      const products = await ProductService.getProduct();
      const brands = [];
      products.forEach(product => {
        brands.push(product.brand)
      });

      return brands;
      
    } catch (error) {
            return error;

    }

   } 
 

};

export default ProductService;
