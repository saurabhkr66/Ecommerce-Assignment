import axios from 'axios';

const API_BASE = 'https://fakestoreapi.com';

export const api = {
  // Fetch all products
  getProducts: async () => {
    const { data } = await axios.get(`${API_BASE}/products`);
    return data;
  },

  // Fetch single product by ID
  getProduct: async (id) => {
    const { data } = await axios.get(`${API_BASE}/products/${id}`);
    return data;
  },

  // Fetch all categories
  getCategories: async () => {
    const { data } = await axios.get(`${API_BASE}/products/categories`);
    return data;
  },

  // Fetch products by category
  getProductsByCategory: async (category) => {
    const { data } = await axios.get(`${API_BASE}/products/category/${category}`);
    return data;
  },
};
