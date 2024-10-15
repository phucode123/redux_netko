import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchALlProduct = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const respone = await axios.get('https://ttcs-delta.vercel.app/api/v1/get-shoes')
        console.log(respone);
        return respone.data.data
    }
)

const initialState = {
    listUsers: [],
    status: 'oke',
    value: 0
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=> {
            state.value += 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchALlProduct.pending, (state, action) => {
                console.log("Đang lấy dữ liệu");
            })
            .addCase(fetchALlProduct.fulfilled, (state, action) => {
                console.log("Láy thành công");
                state.listUsers = action.payload
            })
            .addCase(fetchALlProduct.rejected, (state, action) => {
                console.log("Lỗi lấy dữ liệu");
            })
    }
})

export const {increment} = userSlice.actions

export default userSlice.reducer