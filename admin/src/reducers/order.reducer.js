import { orderConstants } from "../actions/constants";


const initialState = {
    orders: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case orderConstants.GET_ALL_ORDERS_SUCCESS:
            // console.log(action.payload.products);
            state = {
                ...state,
                orders: action.payload.orders,
            }
            break;
    }
    return state;
}