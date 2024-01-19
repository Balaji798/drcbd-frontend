import Api from "./Api";

export default {
  addToCart(req) {
    return Api().post("/cart/add-to-card", req);
  },
  getCart() {
    return Api().get("/cart/get-cart");
  },
  getUser() {
    return Api().get("/user/get-user");
  },
  addAddress(req) {
    return Api().put("/user/signup", req);
  },
  getAllProduct() {
    return Api().get("/product/get_products");
  },
  getProductById(name) {
    return Api().post("/product/product_by_name", {name:name});
  },
  getOrderById(orderId){
   return Api().get(`/orders/get_order_by_id/${orderId}`)
  },
  updateOrderStatus(orderId){
    return Api().get(`/orders/update_order/${orderId}`)
  },
  getUserOrder(){
    return Api().get('/orders/get_user_orders')
  },
  getOrder(orderId){
    return Api().get(`/orders/get_user_order/${orderId}`)
  },
  sendOrderMail(){
    return Api().get('/orders/confirm-payment')
  }
};
