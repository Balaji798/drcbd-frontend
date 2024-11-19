/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { getTotalOrders, payWitheBank } from '../services/ApiService';

const BankTransfer = ({ totalPrice, cartId }) => {
  const OmiseCard = window.OmiseCard;
  const delver_address = localStorage.getItem("delver_address");

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
        frameLabel: "DR.CBD Store",
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
      const orderData = await getTotalOrders();

    OmiseCard.open({
      frameLabel: "DRCBD Store",
      frameDescription: `Invoice #${String(orderData.totalOrder+1).padStart(5, '0')}`,
      amount: Number(totalPrice) * 100,
      publicKey: import.meta.env.VITE_OMISE_PUBLICK_KEY,
      onCreateTokenSuccess: async (token) => {
        const omiseToekn = token;
         const res = await payWitheBank(
          { token: omiseToekn, amount:Number(totalPrice)*100, cartId:cartId, userAdd: JSON.parse(delver_address) },
        );
        if(res.authorizeUri){
          localStorage.setItem("omisePaymentId",res.paymentId)
          window.location.href = res.authorizeUri
        }
      },
      onFormClosed: () => {
        console.log("close")
      },
    });
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
        <button onClick={(e) => handelClick(e)} id="internet_banking">
          Pay With internet banking
        </button>
      </form>{" "}
    </div>
  );
}

export default BankTransfer