import { axiosInstance } from "./Api";

export const signup = async (user) => {
  const res = await axiosInstance.post("user/signup", user);
  return res;
};

export const sendUserOtp = async (user) => {
  const { status } = await axiosInstance.post("user/send_otp", user);
  return status;
};

export const verifyUserEmail = async (req) => {
  const { data } = await axiosInstance.post("user/email_verification", req);
  return data;
};

export const login = async (user) => {
  const { data } = await axiosInstance.post("user/login", user);
  return data;
};

export const addToItemCart = async (req) => {
  const { data } = await axiosInstance.post("/cart/add-to-card", req);
  return data;
};

export const getCartItem = async () => {
  const { data } = await axiosInstance.get("/cart/get-cart");
  return data;
};

export const removeItemFromCart = async (req) => {
  const { data } = await axiosInstance.post("cart/remove_item_from_cart", req);
  return data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.get("/user/get-user");
  return data;
};

export const addAddress = async (req) => {
  const { data } = await axiosInstance.put("/user/signup", req);
  return data;
};

export const getAllProduct = async () => {
  const { data } = await axiosInstance.get("/product/get_products");
  return data;
};

export const getProductById = async (name) => {
  const { data } = await axiosInstance.post("/product/product_by_name", {
    name: name,
  });
  return data;
};

export const getOrderById = async (orderId) => {
  const { data } = await axiosInstance.get(
    `/orders/get_order_by_id/${orderId}`
  );
  return data;
};

export const updateOrderStatus = async (orderId) => {
  const { data } = await axiosInstance.post(`/orders/update_order/${orderId}`);
  return data;
};

export const getUserOrder = async () => {
  const { data } = await axiosInstance.get("/orders/get_user_orders");
  return data;
};

export const getOrder = async (orderId) => {
  const { data } = await axiosInstance.get(`/orders/get_user_order/${orderId}`);
  return data;
};

export const sendOrderMail = async () => {
  const { data } = await axiosInstance.get("/orders/confirm-payment");
  return data;
};

export const editUser = async (userAdd) => {
  const { data } = await axiosInstance.post("user/edit-user", userAdd);
  return data;
};

export const updateUser = async (req) => {
  const { data } = await axiosInstance.put("user/update_user", req);
  return data;
};

export const changePassword = async (request) => {
  const { data } = await axiosInstance.post("user/change_password", request);
  return data;
};

export const getTotalOrders = async () => {
  const { data } = await axiosInstance.get("orders/total_orders");
  return data;
};

export const createToken = async (req) => {
  const { data } = await axiosInstance.post("orders/pay_withe_omise", req);
  return data;
};

export const payWitheBank = async (req) => {
  const { data } = await axiosInstance.post("orders/pay_withe_omise_bank", req);
  return data;
};

export const getPaymentStatus= async (req)=>{
 const { data } = await axiosInstance.post("orders/get_payment",req)
 return data
}