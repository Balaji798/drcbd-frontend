import { useEffect, useState } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCart } from "../state/actions/cartAction";
import { MdError } from "react-icons/md";
import { getPaymentStatus } from "../services/ApiService";

const PaymentSuccess = () => {
  const delver_address = localStorage.getItem("delver_address");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  let count = 0;
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      count++;
      try {
        const paymentId = localStorage.getItem("omisePaymentId");
        const res = await getPaymentStatus({
          cartId: orderId,
          paymentId,
          userAdd: JSON.parse(delver_address),
        });
        setStatus(res.status);
        await getCart(dispatch);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (count === 0) {
      fetchData();
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#005652",
        }}
      >
        {loading ? 'Loading' : status ? (
          <BiSolidBadgeCheck color="#005652" size={45} />
        ) : (
          <MdError color="#cc0000" size={45} />
        )}
        <h4 style={{ padding: "5px 0" }}>
          {loading ? 'Loading':status ? "Your Order Placed Successfully" : "Payment failed"}
        </h4>
        {loading? 'Loading' :status && <p>Thank You For Your Shopping</p>}
        {loading ? 'Loading':status ? (
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
            onClick={async () => {
              navigate("/order-history");
            }}
          >
            Track Order
          </button>
        ) : (
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
            onClick={async () => {
              navigate("/order-summery/" + orderId);
            }}
          >
            Payment Page
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
