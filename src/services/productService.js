import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const productService = {
  getProducts: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getProductById: async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  },
};

export default productService;
