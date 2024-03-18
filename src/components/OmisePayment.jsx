import axios from "axios";
import React, { useEffect } from "react";
import { getCart } from "../state/actions/cartAction";
import { useDispatch } from "react-redux";

const OmisePayment = ({ totalPrice, setOrderStatus, cartId }) => {
  const dispatch = useDispatch();
  const delver_address = localStorage.getItem("delver_address")
  console.log(delver_address)
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
      OmiseCard.configureButton("#checkout-button", {
        currency: "thb",
        frameLabel: "Sabai Shop",
        submitLabel: "PAY NOW",
        buttonLabel: "Pay with Omise",
      });
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
          const omiseToekn = token;
          console.log(omiseToekn);
          const res = await axios.post(
            "https://drcbd-backend-zgqu.onrender.com/orders/pay_withe_omise",
            //https://52.77.244.89:8080
            {
              token: omiseToekn,
              amount: Number(totalPrice) * 100,
              cartId,
              userAdd: JSON.parse(delver_address),
            },
            {
              headers: {
                Authorization: `Bearer ${user}`,
                "Content-Type": "application/json", // Set the content type to JSON
              },
            }
          );
          console.log(res.data.orderId);
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
      {" "}
      <script url="https://cdn.omise.co/omise.js" onLoad={handelLoad} />
      <form>
        <button onClick={(e) => handelClick(e)} id="credit-card">
          Pay Withe Credit/Debit Card
        </button>
      </form>{" "}
    </div>
  );
};

export default OmisePayment;
