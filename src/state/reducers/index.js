import {combineReducers} from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    auth:authReducer,
    product:productReducer,
    cart:cartReducer
});

export default reducers