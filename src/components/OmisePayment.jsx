import React, { useEffect } from "react";

const OmisePayment = () => {
    const OmiseCard = window.OmiseCard
    
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
        publicKey: "pkey_test_5yw28etp8g1onubhhzy",
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
    OmiseCard.open({
      frameLabel: "Esimo",
      frameDescription: "Invoice #3847",
      amount: 1000,
      onCreateTokenSuccess: async (token) => {
        console.log(token);
        // await axios.post('http://localhost:8080/orders/omise_payment',
        // //https://52.77.244.89:8080
        // { token },
        // config)
      },
      onFormClosed: () => {},
    });
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
          Pay Now
        </button>
      </form>{" "}
    </div>
  );
};

export default OmisePayment;
