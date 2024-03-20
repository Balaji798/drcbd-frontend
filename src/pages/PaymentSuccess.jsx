import axios from "axios";
import React, { useEffect, useRef } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCart } from "../state/actions/cartAction";

const PaymentSuccess = () => {
  const delver_address = localStorage.getItem("delver_address");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const isMounted = useRef(false);

  useEffect(() => {
    console.log('ji')
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log('kk')
    const placeOrder = async () => {
      try {
        const user = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
            "Content-Type": "application/json",
          },
        };

        const res = await axios.post(
          "https://drcbd-backend-zgqu.onrender.com/orders/place_order",
          { cartId: orderId, userAdd: JSON.parse(delver_address) },
          config
        );
        if (res.data.status) {
          await getCart(dispatch);
        }
      } catch (err) {
        alert(err);
      }
    };

    placeOrder();
  }, [dispatch, delver_address, orderId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#005652",
        }}
      >
        <BiSolidBadgeCheck color="#005652" size={45} />
        <h4 style={{ padding: "5px 0" }}>Your Order Placed Successfully</h4>
        <p>Thank You For Your Shopping</p>
        <button
          style={{
            background: "#005652",
            color: "#fff",
            textAlign: "center",
            margin: "15px 0",
            fontWeight: "bold",
            fontSize: "20px",
            width: "20rem",
          }}
          onClick={() => {
            navigate("/order-history");
            window.location.reload();
          }}
        >
          Track Order
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
