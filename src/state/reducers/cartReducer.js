const initialState = {
    cart: [],
    loading: false,
    error: null,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CART_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_CART_SUCCESS":
        return {
          ...state,
          cart: action.cart,
          loading: false,
          error: null,
        };
      case "GET_ALL_CART":
      return{
        ...state,
        cart:action.cart,
        loading:false,
        error:null
      };
      case "FETCH_CART_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.cart,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  