import { GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_SUCCESS } from "./types";
import axios from 'axios'


export const fetchAllProduct = () => {
    return async (dispath, getState) => {
        dispath(fetchProductsRequest())
        try {
            const res = await axios.get('https://ttcs-delta.vercel.app/api/v1/get-shoes');
            console.log("hehe");
            const data =  res.data.data ? res.data.data : [];
            dispath(fetchProductsSuccess(data))
        } catch (error) {
            dispath(fetchProductsError())
            console.log("loi fetchALlProduct: "+ error);
        }
    }
}

export const fetchProductsRequest = ()=>{
    return {
        type: GET_ALL_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (payload)=>{
    console.log("Lay thanh cong");

    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: payload
    }
}
export const fetchProductsError = ()=>{
    return {
        type: GET_ALL_PRODUCTS_ERROR
    }
}