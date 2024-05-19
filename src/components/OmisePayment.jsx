import axios from "axios";
import React, { useEffect } from "react";

const OmisePayment = ({ totalPrice, cartId }) => {
  const delver_address = localStorage.getItem("delver_address");
  const OmiseCard = window.OmiseCard;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.omise.co/omise.js";
    script.async = true;
    script.onload = handelLoad;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handelLoad = () => {
    if (window.OmiseCard) {
      // This ensures that the element with ID "checkout-button" exists before configuring it.
      const checkoutButton = document.getElementById("checkout-button");
      if (checkoutButton) {
        OmiseCard.configureButton("#checkout-button", {
          currency: "thb",
          frameLabel: "Sabai Shop",
          submitLabel: "PAY NOW",
          buttonLabel: "Pay with Omise",
        });
      }
    }
  };

  const CreditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  const omiseHandler = async () => {
    const user = localStorage.getItem("token");
    const orderData = await axios.get("https://drcbd-backend-zgqu.onrender.com/orders/total_orders")
    if (user) {
      OmiseCard.open({
        frameLabel: "DRCBD Store",
        frameDescription: `Invoice #${String(orderData.data.totalOrder+1).padStart(5, '0')}`,
        amount: Number(totalPrice) * 100,
        publicKey: process.env.REACT_APP_OMISE_PUBLICK_KEY,
        onCreateTokenSuccess: async (token) => {
          const omiseToken = token;
          const res = await axios.post(
            "https://drcbd-backend-zgqu.onrender.com/orders/pay_withe_omise",
            {
              token: omiseToken,
              amount: Number(totalPrice) * 100,
              cartId,
              userAdd: JSON.parse(delver_address),
              description:`Invoice #${String(orderData.data.totalOrder+1).padStart(5, '0')}`
            },
            {
              headers: {
                Authorization: `Bearer ${user}`,
                "Content-Type": "application/json",
              },
            }
          );
          if(res.data.authorizeUri){
            localStorage.setItem("omisePaymentId",res.data.paymentId)
            window.location.href = res.data.authorizeUri
          }
        },
        onFormClosed: () => {},
      });
    }
  };

  const handelClick = (e) => {
    e.preventDefault();
    CreditCardConfigure();
    omiseHandler();
  };

  return (
    <div>
      <button id="checkout-button" style={{ display: "none" }}></button>
      <form>
        <button onClick={(e) => handelClick(e)} id="credit-card">
          Pay With Credit/Debit Card
        </button>
      </form>
    </div>
  );
};

export default OmisePayment;
