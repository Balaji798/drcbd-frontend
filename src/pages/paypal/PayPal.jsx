import React, { useState, useEffect } from "react";
import OmisePayment from "../../components/OmisePayment";
import BankTransfer from "../../components/BankTransfer";
import { useSelector } from "react-redux";
import { useLanguage } from "../../util/LanguageContext";

const PayPal = () => {
  const { language } = useLanguage();
  const [orderData, setOrderData] = useState({});
  const summeryTitle = ["Product", "Quantity", "Price", "Delivery Charge"];
  const [totalDeliveryCharge, setTotalDeliveryCharge] = useState(0)
  const cart = useSelector((state) => state.cart)

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
        totalCharge+= cart?.cart?.totalPrice < 1500 ? 50 : 0
    });
    setOrderData(items)
    setTotalDeliveryCharge(totalCharge)
  };
  getOrderData();
}, [cart?.cart?.items, cart?.cart?.totalPrice]);
  return (
    <>
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
                  <p style={{ width: "55%" }}>{language === "eng"?item.productId.eng.name:item.productId.thi.name}</p>
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
          <OmisePayment totalPrice={cart?.cart?.totalPrice+totalDeliveryCharge} cartId= {cart?.cart?._id}/>
          <div style={{height:"20px"}}/>
          <BankTransfer totalPrice={cart?.cart?.totalPrice+totalDeliveryCharge} cartId= {cart?.cart?._id}/>
      </div>
    </>
  );
};

export default PayPal;