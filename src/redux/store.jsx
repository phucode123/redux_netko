import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducer/rootReducer";
import userSlice from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['value']
    //chỉ lưu giá trị của value. 
    //sau khi em f5 thì bình thường nó phải mất dữ liệu nhưng giờ nó không mất
}

const persistedReducer = persistReducer(persistConfig, userSlice)

const store = configureStore(
    {
        reducer: {
            user: persistedReducer
        }
    }
)

export const persistor = persistStore(store)
export default store