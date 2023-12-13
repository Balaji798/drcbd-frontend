import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalButton } from "react-paypal-button-v2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import ApiService from "../../services/ApiService";
import axios from "axios";

const PayPal = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();
  const { orderId } = useParams();

  // useEffect(() => {
  //   const getOrderData = async () => {
  //     const res = await ApiService.getOrderById(orderId);
  //     setOrderData(res.data);
  //   };
  //   getOrderData();
  // }, [orderId]);

  // useEffect(() => {
  //   const updateOrderStatus = async () => {
  //     if (orderStatus) {
  //       const user = localStorage.getItem("token");
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${user}`,
  //           "Content-Type": "application/json", // Set the content type to JSON
  //         },
  //       };

  //       await axios.post(
  //         `https://drcbd-backend.onrender.com/orders/update_order/${orderId}`,
  //         { orderId, status: "placed" },
  //         config
  //       );
  //     }
  //   };
  //   updateOrderStatus();
  // }, [orderStatus, orderId]);


  const [paymentID, setPaymentID] = useState("");

  const createPayment = async () => {
    try {
      const response = await axios.post("/place_order");
      setPaymentID(response.data.id);
    } catch (error) {
      console.error("Error creating PayPal payment:", error);
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

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3rem",
          maxHeight: "25rem",
          height: "100%",
        }}
      >
        {orderData?.totalPrice && (
          <div style={{ maxWidth: 400, width: "100%" }}>
         
            <PayPalScriptProvider
              options={{
                clientId:
                  "AXld-qzDghbidMWjQAs8iu-5ZTZumeSUAN68R6rEGdG3AQk7_9eudtkOEutj8Bq4cBmrrrJQwXo4NiJ",
                currency: "USD",
              }}
            >
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: "abcd",
                        amount: {
                          currency_code: "USD",
                          value: `${orderData.totalPrice.toFixed(2)}`,
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const order = await actions.order.capture();
                  if (order.status === "COMPLETED") {
                    setOrderStatus(true);
                  }
                }}
                onError={(err) => {
                  console.log(err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        )}
              </div>*/}

      <PayPalButton
        amount="10.00"
        onSuccess={(details, data) => {
          // Handle successful payment
          console.log("Payment completed successfully", details, data);
        }}
        options={{
          clientId: process.env.REACT_APP_CLIENT_ID,
          currency: "USD",
        }}
        createOrder={() => createPayment()}
      />
    </>
  );
};

export default PayPal;
// import React, { useState, useRef, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { BiSolidBadgeCheck } from "react-icons/bi";
// import ApiService from "../../services/ApiService";

// const PayPal = () => {
//   const paypal = useRef();
//   const [orderStatus, setOrderStatus] = useState(false);
//   const navigate = useNavigate();
//   const { orderId } = useParams();

//   useEffect(() => {
//     const getOrderData = async () => {
//       const res = await ApiService.getOrderById(orderId);
//       if(res.data.totalPrice){
//         window.paypal
//           .Buttons({
//             createOrder: (data, actions, err) => {
//               return actions.order.create({
//                 intent: "CAPTURE",
//                 purchase_units: [
//                   {
//                     descriptions: "Test",
//                     amount: {
//                       currency_code: "USD",
//                       value: `${res.data.totalPrice.toFixed(2)}`,
//                     },
//                   },
//                 ],
//               });
//             },
//             onApprove: async (data, actions) => {
//               const order = await actions.order.capture();
//               if (order.status === "COMPLETED") {
//                 setOrderStatus(true);
//               }
//             },
//             onError: (err) => {
//               console.log(err);
//             },
//           })
//           .render(paypal.current);
//       }
//     };

//     getOrderData();
//   }, [orderId]);

//   return (
//     <>
//       {orderStatus && (
//         <div className="modal">
//           <div className="overlay"></div>
//           <div
//             className="modal-content"
//             style={{ background: "#fff", color: "#005652" }}
//           >
//             <BiSolidBadgeCheck color="#005652" size={45} />
//             <p>Your Order Placed Successfully</p>
//             <p>Thank You For Your Shopping</p>
//             <button
//               style={{
//                 background: "#005652",
//                 color: "#fff",
//                 textAlign: "center",
//                 margin: "15px 0",
//                 fontWeight: "bold",
//                 fontSize: "20px",
//                 width: "20rem",
//               }}
//               onClick={() => setOrderStatus(false)}
//             >
//               Track Order
//             </button>
//           </div>
//         </div>
//       )}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div>
//           <div ref={paypal}></div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PayPal;
