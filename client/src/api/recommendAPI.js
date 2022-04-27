import axios from './axios';

const recommendAPI = {
    recommendRelateItem : (reqBody) => {
        const url = "/recom/getRecommendedProductsById";
        return axios.post(url,reqBody);
    }
}
export default recommendAPI;