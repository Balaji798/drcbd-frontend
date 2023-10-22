import React, { useState } from "react";
import CartComponent from "../../components/cart/CartComponent";
import { useSearchParams, useLocation } from "react-router-dom";
import "./cart.css";
import Steps from "../../components/Steps";

const Cart = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");

  console.log(productId);


  return (
    <div style={{ color: "#005256" }}>
      <Steps stepsColor={[1]}/>
      <CartComponent />
    </div>
  );
};

export default Cart;
