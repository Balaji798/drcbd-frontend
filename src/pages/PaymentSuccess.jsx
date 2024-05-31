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
  const { orderId } = useParams();
  let count = 0;
  const [status,setStatus] = useState({});

  console.log(count)
  useEffect(() => {
    const fetchData = async () => {
      count++
      const user = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      };
      try {
        const paymentId = localStorage.getItem("omisePaymentId")
        const res = await axios.post(
          "https://drcbd-backend-zgqu.onrender.com/orders/get_payment",
          { cartId: orderId,paymentId,userAdd: JSON.parse(delver_address), },
          config
        );
        console.log(res.data.status)
        setStatus(res.data.status);
        await getCart(dispatch);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if(count===0){
      fetchData();
    }
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
        {status?<BiSolidBadgeCheck color="#005652" size={45} />:<MdError color="#cc0000" size={45}/>}
        <h4 style={{ padding: "5px 0" }}>{status?"Your Order Placed Successfully":"Payment failed"}</h4>
       {status&& <p>Thank You For Your Shopping</p>}
       {status? <button
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
        </button>:<button
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
          navigate("/order-summery/" + orderId);
        }}
      >
        Payment Page
      </button>}
      </div>
    </div>
  );
};

export default PaymentSuccess;
