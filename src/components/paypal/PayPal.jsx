// import React from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const PayPal = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div style={{ maxWidth: 400 }}>
//         <PayPalScriptProvider
//           options={{
//             clientId:
//               "Aa10Ax_zx9qaKv5LRnQZaobiwV5IQFgoHFIGzHx0bskjwr557aTJtgeM2qnB09h3Mu7xh6C3EmUZAiOX",
//               currency:"USD"
//           }}
//         >
//           <PayPalButtons
//             style={{ layout: "vertical" }}
//             createOrder={(data, actions) => {
//               return actions.order.create({
//                 purchase_units: [
//                   {
//                     description: "abcd",
//                     account: {
//                       currency_code: "USD",
//                       value: 1,
//                     },
//                   },
//                 ],
//               });
//             }}
//             onApprove={async(data,actions)=>{
//               const order = await actions.order.capture();
//               console.log(order);
//             }}
//             onError={(err)=>{
//               console.log(err)
//             }}
//           />
//         </PayPalScriptProvider>
//       </div>
//     </div>
//   );
// };

// export default PayPal;

import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import ApiService from "../../services/ApiService";

const PayPal = () => {
  const paypal = useRef();
  const [orderStatus, setOrderStatus] = useState(false);
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({});
  const [orderPrice, setOrderPrice] = useState(null);
  const { orderId } = useParams();
 
  useEffect(() => {
    const getOrderData = async () => {
      const res = await ApiService.getOrderById(orderId);
      const price = parseFloat(res.data.totalPrice.toFixed(2));
      setOrderPrice(price);
      setOrderData(res.data);
    };

    getOrderData();
  }, []);
  useEffect(() => {
    
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                descriptions: "Test",
                amount: {
                  currency_code: "USD",
                  value: 2.00,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if(order.status==="COMPLETED"){
            const res = await ApiService.updateOrderStatus(orderId);
            if(res.data.status){
              setOrderStatus(true)
            }
          }

        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [orderId]);

  return (
    <>
      {orderStatus && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <BiSolidBadgeCheck color="#005652" size={45} />
            <p>Your Order Placed Successfully</p>
            <p>Thank You For Your Shopping</p>
            <button
              style={{
                background: "#fff",
                color: "#005652",
                textAlign: "center",
                margin: "15px 0",
                fontWeight: "bold",
                fontSize: "20px",
                width: "20rem",
              }}
              onClick={() => setOrderStatus(false)}
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
        }}
      >
        <div>
          <div ref={paypal}></div>
        </div>
      </div>
    </>
  );
};

export default PayPal;

{
  /*

{create_time: '2023-10-22T09:41:29Z', update_time: '2023-10-22T09:41:43Z', id: '75D07225G5207802F', intent: 'CAPTURE', status: 'COMPLETED', …}
create_time
: 
"2023-10-22T09:41:29Z"
id
: 
"75D07225G5207802F"
intent
: 
"CAPTURE"
links
{href: 'https://api.sandbox.paypal.com/v2/checkout/orders/75D07225G5207802F', rel: 'self', method: 'GET', title: 'GET'}
country_code:"US"
email_address:"sb-i47hzk27828020@personal.example.com"
given_name:"John"
surname:"Doe"
payer_id: "LT2EL2H2JNUTY"

currency_code:"USD"
email_address:"sb-b0dvp27896896@business.example.com"
merchant_id:"YZGVP8TRB3ZHL"


reference_id:"default"
shipping:{
  address:{
  address_line_1: "1 Main St"
  admin_area_1:"CA"
  admin_area_2:"San Jose"
  country_code:"US"
  postal_code:"95131"
  }
}
full_name:"John Doe"
status: "COMPLETED"
update_time:"2023-10-22T09:41:43Z"

 */
}
