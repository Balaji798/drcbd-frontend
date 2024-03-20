import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidBadgeCheck } from "react-icons/bi";
import OmisePayment from "../../components/OmisePayment";
import BankTransfer from "../../components/BankTransfer";
import { useSelector } from "react-redux";

const PayPal = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderData, setOrderData] = useState({});
  const summeryTitle = ["Product", "Quantity", "Price", "Delivery Charge"];
  const [totalDeliveryCharge, setTotalDeliveryCharge] = useState(0)
  const cart = useSelector((state) => state.cart)
  const navigate = useNavigate();

 useEffect(() => {
  const getOrderData = async () => {
    const items = [];
    let totalCharge = 0
    cart?.cart?.items.forEach((item) => {
        items.push({
          deliveryCharge:cart?.cart?.totalPrice < 1500 ? 50 : 0,
          quantity: item.quantity,
          productId: item.productId,
        })
        totalCharge = cart?.cart?.totalPrice < 1500 ? 50 : 0
    });
    setOrderData(items)
    setTotalDeliveryCharge(totalCharge)
  };
  getOrderData();
}, [cart?.cart?.items, cart?.cart?.totalPrice]);
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
          paddingBottom:'2rem'
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
              {orderData?.length>0 && orderData?.map((item, index) => (
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
                <p style={{width:"10%",textAlign:"center",borderLeft:"1px solid",paddingLeft:"20px" }}>{cart?.cart?.totalItems}</p>
                <p></p>
                <p style={{width:"30%",textAlign:"center",borderLeft:"1px solid" }}>
                ฿ {cart?.cart?.totalPrice + totalDeliveryCharge}
                </p>
              </div>
            </div>
          </div>
          </div>
          <OmisePayment totalPrice={cart?.cart?.totalPrice+totalDeliveryCharge} setOrderStatus={setOrderStatus} cartId= {cart?.cart?._id}/>
          <div style={{height:"20px"}}/>
          <BankTransfer totalPrice={cart?.cart?.totalPrice+totalDeliveryCharge} cartId= {cart?.cart?._id}/>
      </div>
    </>
  );
};

export default PayPal;


// const user = localStorage.getItem("token");
// const config = {
//   headers: {
//     Authorization: `Bearer ${user}`,
//     "Content-Type": "application/json", // Set the content type to JSON
//   },
// };
// <div style={{ maxWidth: 300, width: "100%", padding: "0 2rem" }}>
//             <PayPalButtons
//               style={{ layout: "vertical" }}
//               createOrder={async (data, actions) => {
//                 try {
//                   return await actions.order.create({
//                     purchase_units: [
//                       {
//                         description: descriptionForPayPal,
//                         amount: {
//                           currency_code: "THB",
//                           value: `${price.toFixed(2)}`,
//                         },
//                       },
//                     ],
//                   });
                  
//                 } catch (error) {
//                   console.error("Error creating order:", error);
//                   return null;
//                 }
//               }}
              
//               onApprove={async (data, actions) => {
//                 const order = await actions.order.capture();
//                 if (order.status === "COMPLETED") {
//                   handelOrder();
//                 }
//               }}
//               onError={(err) => {
//                 console.log(err);
//               }}
//             />
//             </div> 
// useEffect(() => {
//   const getOrderData = async () => {
//     const data = await ApiService.getOrder(orderId);
//     setOrderData(data.data);
//   };
//   getOrderData();
// }, [orderId]);

// const handelOrder = async () => {

//   const res = await await axios.post(
//     `https://drcbd-backend-zgqu.onrender.com/orders/update_order/${orderId}`,
//     { orderId, status: "placed" },
//     config
//   );
//   if (res.data.status) {
//     const response = await axios.post(
//       "https://drcbd-backend-zgqu.onrender.com/orders/confirm_payment",

//       { orderId },
//       config
//     );
//     if (response.data.status) setOrderStatus(true);
//   }
// };

// const getDescriptionForPayPal = (orderData) => {
//   // Initialize an empty description string
//   let description = "";

//   // Iterate over each item in the summary title array

//   // Iterate over each item in the order data
//   if(orderData && orderData?.items){
//     orderData?.items?.forEach((item, index) => {
//       // Append the product name to the description
//       description += `Product name: ${item.productId.name}, Qty: ${item.quantity}, Price: ฿${item.productId.price}, Delivery Charge: ฿${item.deliveryCharge}\n`;
      
//       // If it's not the last item, add separators and details
//       if (index < orderData.items.length - 1) {
//         description += `, Qty: ${item.quantity}, Price: ฿${item.productId.price}, Delivery Charge: ฿${item.deliveryCharge}\n`;
//       }
//     });
//     // Add the total items and total price to the description
//     description += `Total Items: ${orderData.totalItems}, Total Price: ฿${orderData.totalPrice + orderData.totalDeliveryCharge}`;
//   }

//   return description;
// };

// Usage example:
//const descriptionForPayPal = getDescriptionForPayPal(orderData, summeryTitle);