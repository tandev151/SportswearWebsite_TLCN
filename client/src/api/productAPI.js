import axios from "./axios";

const productAPI = {
    getProducts: () => {
        const url = "/product/getProducts";
        return axios.post(url);
    },
    getProductsBySlug: (type, slug) => {
        const url = `/product/${type}/${slug}`;
        return axios.get(url);
    }
};
export default productAPI;
