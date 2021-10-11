import axios from "./axios";

const productAPI = {
  getProducts: () => {
    const url = "/product/getProducts";
    return axios.post(url);
  },
  getProductsBySlug: (type, slug) => {
    console.log(type, slug);

    const url = `/product/${type}/${slug}`;
    return axios.get(url);
  },
  getProductBySlug: (slug) => {
    const url = `/product/${slug}`;
    return axios.get(url);
  },
};
export default productAPI;
