import axios from 'axios';
import React, { useEffect } from 'react'

const BankTransfer = ({ totalPrice, cartId }) => {
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
      OmiseCard.configureButton("#internet_banking", {
        currency: "thb",
        frameLabel: "Sabai Shop",
        submitLabel: "PAY NOW",
        buttonLabel: "Pay with Omise",
      });
    }
  };

  const InternetBankingConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "internet_banking",
      otherPaymentMethod: [
        "bill_payment_tesco_lotus",
        "alipay",
        "credit_card",
        "pay_easy",
        "net_banking",
        "convenience_store",
      ],
    });
    OmiseCard.configureButton("#internet_banking");
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
         const res = await axios.post(
           "https://drcbd-backend-zgqu.onrender.com/orders/pay_withe_omise_bank",
          { token: omiseToekn, amount:Number(totalPrice)*100, cartId:cartId },
          {
            headers: {
              Authorization: `Bearer ${user}`,
              "Content-Type": "application/json", // Set the content type to JSON
            },
          }
        );
        if(res.data.authorizeUri){
          window.location.href = res.data.authorizeUri
        }
      },
      onFormClosed: () => {},
    });
    }
  };

  const handelClick = (e) => {
    e.preventDefault();
    InternetBankingConfigure();
    omiseHandler();
  };

  return (
    <div>
      {" "}
      <script url="https://cdn.omise.co/omise.js" onLoad={handelLoad} />
      <form>
        {/*       <button onClick={(e) => handelClick(e)} id="credit-card">
          Pay Now
  </button>*/}
        <button onClick={(e) => handelClick(e)} id="internet_banking">
          Pay Withe internet banking
        </button>
      </form>{" "}
    </div>
  );
}

export default BankTransfer