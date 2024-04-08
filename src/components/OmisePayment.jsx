import axios from "axios";
import React, { useEffect } from "react";
import { getCart } from "../state/actions/cartAction";
import { useDispatch } from "react-redux";

const OmisePayment = ({ totalPrice, setOrderStatus, cartId }) => {
  const dispatch = useDispatch();
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
    if (user) {
      OmiseCard.open({
        frameLabel: "DRCBD Store",
        frameDescription: "Invoice #3847",
        amount: Number(totalPrice) * 100,
        publicKey: "pkey_test_5yyqilk4aaws7x9ldno",
        onCreateTokenSuccess: async (token) => {
          const omiseToken = token;
          const res = await axios.post(
            "https://drcbd-backend-zgqu.onrender.com/orders/pay_withe_omise",
            {
              token: omiseToken,
              amount: Number(totalPrice) * 100,
              cartId,
              userAdd: JSON.parse(delver_address),
            },
            {
              headers: {
                Authorization: `Bearer ${user}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (res.data.status) {
            await getCart(dispatch);
            setOrderStatus(true);
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
      {/* Ensure that the element with ID "checkout-button" exists */}
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
