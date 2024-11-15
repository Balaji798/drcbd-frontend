const initialState = {
    product: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_PRODUCT_SUCCESS":
        return {
          ...state,
          product: action.product,
          loading: false,
          error: null,
        };
      case "GET_ALL_PRODUCT":
      return{
        ...state,
        product:action.product,
        loading:false,
        error:null
      };
      case "FETCH_PRODUCT_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.product,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;