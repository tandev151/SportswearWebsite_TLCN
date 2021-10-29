import axios from "./axios";

const orderAPI = {
  addOrder: (order) => {
    const url = "/order/add";
    console.log(order);
    return axios.post(url, order);
  },
  getOrderById: (orderId) => {
    const url = "/order/getOrder";
    return axios.post(url, orderId);
  },
  getAllOrders: () => {
    const url = "/order/getOrders";
    return axios.post(url);
  },
};
export default orderAPI;
