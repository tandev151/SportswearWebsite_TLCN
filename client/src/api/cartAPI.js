import axios from "./axios";

const cartAPI = {
  addToCart: (cartItems) => {
    const url = "/cart/addToCart";
    return axios.post(url, cartItems);
  },
  getCartItems: () => {
    const url = "/cart/getCartItems";
    return axios.get(url);
  },
};

export default cartAPI;
