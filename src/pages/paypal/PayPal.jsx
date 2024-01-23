import React, { useState,useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import axios from "axios";
import ApiService from "../../services/ApiService";


const PayPal = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderData,setOrderData]= useState({});
  const summeryTitle = ['Product','Quantity', 'Price','Delivery Charge']
  const navigate = useNavigate();
  const { state } = useLocation();
  const { price } = state;
  const { orderId } = useParams();

  useEffect(()=>{
    const getOrderData = async() =>{
      const data = await ApiService.getOrder(orderId);
      setOrderData(data.data)
    }
    getOrderData()
  },[orderId])

  const handelOrder = async () => {
    const user = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${user}`,
        "Content-Type": "application/json", // Set the content type to JSON
      },
    };
    const res = await await axios.post(
      "https://drcbd-backend.onrender.com/orders/confirm_payment",
      //https://drcbd-backend.onrender.com
      { orderId, status: "placed" },
      config
    );
    console.log(res.data);
    if (res.data.status) {
      const response = await axios.post(
        "https://drcbd-backend.onrender.com/orders/confirm_payment",
        //https://drcbd-backend.onrender.com
        { orderId },
        config
      );
      if (response.data.status) setOrderStatus(true);
    }
  };

  return (
    <>
      {orderStatus && (
        <div className="modal">
          <div className="overlay"></div>
          <div
            className="modal-content"
            style={{ background: "#fff", color: "#005652" }}
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
                setOrderStatus(false);
                navigate("/order-history");
              }}
            >
              Track Order
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "5rem",
          maxHeight: "25rem",
          height: "100%",
        }}
      >
        <h1 className="title-text" style={{ paddingBottom: "1rem" }}>
          Complete you order
        </h1>
        <div style={{maxWidth:"700px",width:"100%"}} className="center">
        <div style={{display:"flex",width:"100%",justifyContent:"space-between",border:'1px solid'}}>
        {summeryTitle.map((item)=>(
          <p key={item} style={{width:item==="Product"?"55%":"15%"}}>{item}</p>
        ))}
        </div>
        <div style={{width:"100%"}}>
        {orderData?.items?.map((item,index)=>(
          <div style={{display:"flex",width:"100%",justifyContent:"space-between"}} key={index}>
          <p  style={{width:"55%"}}>{item.productId
            .name}</p>
            <p style={{width:"15%"}}>{item.quantity}</p>
            <p style={{width:"15%"}}>{item.productId.price}</p>
            <p style={{width:"15%"}}>{item.deliveryCharge}</p>
            </div>
        ))}
        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
        <p style={{width:"45%"}}>Total</p>
        <p>{orderData.totalItems}</p>
        <p></p>
        <p>{orderData?.totalPrice}+{orderData?.totalDeliveryCharge}</p>
        </div>
        </div>
        </div>
        <div style={{ maxWidth: 400, width: "100%", padding: "0 2rem" }}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={async (data, actions) => {
              try {
                const order = await actions.order.create({
                  purchase_units: [
                    {
                      description: "abcd",
                      amount: {
                        currency_code: "USD",
                        value: `${price.toFixed(2)}`,
                      },
                    },
                  ],
                });
                return order;
              } catch (error) {
                console.error("Error creating order:", error);
                return null;
              }
            }}
            onApprove={async (data, actions) => {
              const order = await actions.order.capture();
              if (order.status === "COMPLETED") {
                handelOrder();
              }
            }}
            onError={(err) => {
              console.log(err);
            }}
          />
          
        </div>
      </div>
    </>
  );
};

export default PayPal;
