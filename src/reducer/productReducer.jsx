import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_ERROR } from "../action/types";


const INITIAL_STATE = {
    listProducts: []
}
 const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            console.log("GET_ALL_PRODUCTS_REQUEST" + action);
            return {
                ...state,
            };
        case GET_ALL_PRODUCTS_SUCCESS:
            console.log("GET_ALL_PRODUCTS_SUCCESS" + action);
            return {
                ...state,
                listProducts: action.payload
            }
        case GET_ALL_PRODUCTS_ERROR:
            console.log("GET_ALL_PRODUCTS_ERROR" + action);
            return {
                ...state
            }
        default:
            return state
    }
}

export default productReducer