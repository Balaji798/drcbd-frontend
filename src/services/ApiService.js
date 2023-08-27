import Api from "./Api";

export default {
  addToCart(req) {
    console.log(req)
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
    console.log(name)
    return Api().post("/product/product_by_name", {name:name});
  },
};
