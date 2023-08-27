 
import React, { useState } from "react";
import "./cart.css";
import CartComponent from "../../components/cart/CartComponent";
import Forms from "../../components/forms/Forms";
import Payment from "../../components/payment/Payment";
import Status from "../../components/status/Status";
import { useSearchParams } from "react-router-dom";

const Cart = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  console.log(productId);
  const steps = [1, 2, 3, 4];
  const [position, setPosition] = useState(productId ? [1, 2] : [1]);

  return (
    <div style={{ color: "#005256" }}>
      <div className="cart-step-container">
        <div
          style={{ width: "100%", background: "#005652", height: "15px" }}
        ></div>
        <div className="step-container">
          {steps.map((index) => (
            <div
              style={{
                background: "#fff",
                width: 70,
                height: 70,
                borderRadius: "50%",
                padding: "5px",
              }}
            >
              <div
                className="steps"
                style={{
                  background: position.includes(index) ? "#005652" : "#fff",
                  color: position.includes(index) ? "#fff" : "#005652",
                  border: position.includes(index)
                    ? "1px solid #fff"
                    : "1px solid #005652",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>{index}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {position.length===1 ? (
        <CartComponent setPosition={setPosition} />
      ) : position.length===2  ? (
        <Forms setPosition={setPosition} />
      ) : position.length === 3 ? (
        <Payment setPosition={setPosition} />
      ) : position.length === 4 ? (
        <Status />
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
