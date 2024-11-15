import { getAllProduct } from "../../services/ApiService";


export const fetchProduct = async (dispatch, product) => {
  try {
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", product: product });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT_FAILURE", product: error.message });
  }
};

export const getProduct = async (dispatch) => {
  try {
    const res = await getAllProduct();
    dispatch({ type: "GET_ALL_PRODUCT", product: res });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCT_FAILURE", product: error.message });
  }
};