import React, { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import axios from "axios";
import ApiService from "../../services/ApiService";

const PayPal = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderData, setOrderData] = useState({});
  const summeryTitle = ["Product", "Quantity", "Price", "Delivery Charge"];
  const navigate = useNavigate();
  const { state } = useLocation();
  const { price } = state;
  const { orderId } = useParams();
  // const OmiseCard = window.OmiseCard
  const user = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${user}`,
      "Content-Type": "application/json", // Set the content type to JSON
    },
  };


  useEffect(() => {
    const getOrderData = async () => {
      const data = await ApiService.getOrder(orderId);
      setOrderData(data.data);
    };
    getOrderData();
  }, [orderId]);

  const handelOrder = async () => {

    const res = await await axios.post(
      `https://drcbd-backend-zgqu.onrender.com/orders/update_order/${orderId}`,
      //https://52.77.244.89:8080
      { orderId, status: "placed" },
      config
    );
    if (res.data.status) {
      const response = await axios.post(
        "https://drcbd-backend-zgqu.onrender.com/orders/confirm_payment",
        //https://52.77.244.89:8080
        { orderId },
        config
      );
      if (response.data.status) setOrderStatus(true);
    }
  };

  // const handelLoad = () => {
  //   OmiseCard.configureButton('#checkout-button', {
  //     publicKey: 'pkey_test_5yw28etp8g1onubhhzy',
  //     currency: 'thb',
  //     frameLabel: 'Sabai Shop',
  //     submitLabel: 'PAY NOW',
  //     buttonLabel: 'Pay with Omise'
  //   })
  // }

  // const CreditCardConfigure = () =>{
  //   OmiseCard.configure({
  //     defaultPaymentMethod: 'credit_card',
  //     otherPaymentMethod: []
  //   })
  //   OmiseCard.configureButton('#credit-card')
  //   OmiseCard.attach()
  // }

  // const omiseHandler = async() => {
  //   OmiseCard.open({
  //     frameLabel:'Esimo',
  //     frameDescription: 'Invoice #3847',
  //     amount: 1000,
  //     onCreateTokenSuccess: async(token) => {
  //       console.log(token)
  //       // await axios.post('http://localhost:8080/orders/omise_payment',
  //       // //https://52.77.244.89:8080
  //       // { token },
  //       // config)
  //     },
  //     onFormClosed: () => {

  //     },
  //   })
  // }

  // const handelClick = (e) => {
  //  e.preventDefault()
  //  CreditCardConfigure()
  //  omiseHandler()
  // }
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
                window.location.reload()
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
          height: "100%",
        }}
      >
        <h1 className="title-text" style={{ paddingBottom: "1rem" }}>
          Complete you order
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap",maxWidth:"800px", width: "100%",alignItems:"center",justifyContent:"center" }}>
          <div style={{ maxWidth: "600px", width: "100%",padding:"1rem" }} className="center">
          <h3>Order Summery</h3>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                border: "1px solid #003735",
                padding:"5px",
                background:"#003735",
                color:"#fff"
              }}
            >
              {summeryTitle?.map((item) => (
                <p
                  key={item}
                  style={{ width: item === "Product" ? "55%" : "15%",textAlign: item === "Product" ?"start":"center",borderLeft: item === "Product" ?"0":"1px solid",fontWeight:"bold" }}
                >
                  {item}
                </p>
              ))}
            </div>
            <div style={{ width: "100%",borderLeft:"1px solid",borderRight:"1px solid",borderBottom:"1px solid" }}>
              {orderData?.items?.length>0 && orderData?.items?.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    borderBottom:"1px solid",
                    padding:"5px",
                    fontWeight:"bold"
                    ,height:"4rem"
                  }}
                  key={index}
                >
                  <p style={{ width: "55%" }}>{item.productId.name}</p>
                  <p style={{ width: "15%",textAlign:"center",borderLeft:"1px solid"  }}>{item?.quantity}</p>
                  <p style={{ width: "15%",textAlign:"center",borderLeft:"1px solid"  }}>฿ {item?.productId.price}</p>
                  <p style={{ width: "15%",textAlign:"center",borderLeft:"1px solid" }}>฿ {item?.deliveryCharge}</p>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  padding:"5px",
                  fontWeight:"bold"
                }}
              >
                <p style={{ width: "52.5%" }}>Total</p>
                <p style={{width:"10%",textAlign:"center",borderLeft:"1px solid",paddingLeft:"20px" }}>{orderData?.totalItems}</p>
                <p></p>
                <p style={{width:"30%",textAlign:"center",borderLeft:"1px solid" }}>
                ฿ {orderData?.totalPrice+orderData?.totalDeliveryCharge}
                </p>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 300, width: "100%", padding: "0 2rem" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={async (data, actions) => {
                try {
                  return await actions.order.create({
                    purchase_units: [
                      {
                        description: "abcd",
                        amount: {
                          currency_code: "THB",
                          value: `${price.toFixed(2)}`,
                        },
                      },
                    ],
                  });
                  
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
{       /*   <script url='https://cdn.omise.co/omise.js' onLoad={handelLoad}/>
          <form>
          <button onClick={(e)=>handelClick(e)} id='credit-card'>Pay Now</button>
            </form> */}
      </div>
    </>
  );
};

export default PayPal;
