import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducer/rootReducer";
import userSlice from "./slices/userSlice";


const store = configureStore(
    {
        reducer: {
            user: userSlice
        }
    }
)

export default store