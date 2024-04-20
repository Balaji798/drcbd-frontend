import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCart } from "../state/actions/cartAction";
import { MdError } from "react-icons/md"

const PaymentSuccess = () => {
  const delver_address = localStorage.getItem("delver_address");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId, sourceId } = useParams();
  const [order,setOrder] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.post(
          "https://drcbd-backend-zgqu.onrender.com/orders/get_payment_status",
          { sourceId: sourceId },
          config
        );
        setOrder(res.data)
        if (res?.data?.paymentStatus === "successful") {
          const response = await axios.post(
            "https://drcbd-backend-zgqu.onrender.com/orders/create_order",
            {
              cartId: orderId,
              userAdd: JSON.parse(delver_address),
              sourceId: sourceId,
              paymentId: res.data.paymentId,
              status:res?.data?.paymentStatus
            },
            config
          );
          if (response.data.status) {
          await getCart(dispatch);
          window.location.reload();
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {order.paymentStatus === "successful"?<BiSolidBadgeCheck color="#005652" size={45} />:<MdError color="#cc0000" size={45}/>}
        <h4 style={{ padding: "5px 0" }}>{order.paymentStatus === "successful"?"Your Order Placed Successfully":"Payment failed"}</h4>
       {order.paymentStatus === "successful"&& <p>Thank You For Your Shopping</p>}
       {order.paymentStatus === "successful"&& <button
          style={{
            background: "#005652",
            color: "#fff",
            textAlign: "center",
            margin: "15px 0",
            fontWeight: "bold",
            fontSize: "20px",
            width: "20rem",
          }}
          onClick={async () => {
            navigate("/order-history");
          }}
        >
          Track Order
        </button>}
      </div>
    </div>
  );
};

export default PaymentSuccess;
