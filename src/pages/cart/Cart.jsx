import React, { lazy } from "react";
import "./cart.css";
const Steps =lazy(async () => await import("../../components/Steps"));
const CartComponent =lazy(async () => await import("../../components/cart/CartComponent")) ;

const Cart = () => {
  //const [searchParams] = useSearchParams();
  //const productId = searchParams.get("productId");


  return (
    <div style={{ color: "#005256",paddingTop:"3rem" }}>
      <Steps stepsColor={[1]}/>
      <CartComponent />
    </div>
  );
};

export default Cart;
