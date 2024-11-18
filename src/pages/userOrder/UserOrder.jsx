import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/ApiService";
import checkout1 from "../../assets/checkoutImage/1.png";
import checkout2 from "../../assets/checkoutImage/2.png";
import checkout3 from "../../assets/checkoutImage/3.png";
import checkout4 from "../../assets/checkoutImage/4.png";
import thankyou from "../../assets/thankyou.png"
import "./order.css";
import { convertToLocalTime } from "../../util/convertToLocalTime";

const UserOrder = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [open, setOpen] = useState(false);
  //const [steps, setSteps] = useState([]);
  const steps2 = [
    { image: checkout1, title: "Order Placed" },
    { image: checkout2, title: "" },
    { image: checkout3, title: "" },
    { image: checkout4, title: "" },
  ];

  useEffect(() => {
    const getOrders = async () => {
      const res = await getOrder(orderId);
      setOrderData(res.data);
    };
    getOrders();
  }, [orderId]);
  return (
    <>
      {open && (
        <div className="modal">
          <div onClick={() => setOpen(false)} className="overlay"></div>
          <div className="modal-content">
            <h3>
              Please contact for refund request at <a href="mailto:marketing@drcbdgroup.com">marketing@drcbdgroup.com</a> 
            </h3>
          </div>
        </div>
      )}
      <div style={{ paddingTop: "4rem" }}>
        {/*<Steps stepsColor={[4]} />*/}
        <div
        className="order-status-step"
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#005652",
            height: "20px",
          }}
        ></div>
        <div className="step-container">
          {steps2.map((item, index) => (
            <div
              style={{
                background: "#fff",
                width: 90,
                height: 90,
                borderRadius: "50%",
              }}
              key={index}
            >
              <div
                className="steps"
                style={{ padding: 0, background: "#fff" }}
              >
                <img
                  src={item?.image}
                  alt={item?.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "2em 0 2em 0",
          }}
        >
          <img
            src={thankyou}
            alt="/"
            className="order-image-container"
            loading="lazy"
          />
          <div
            style={{
              width: "100%",
              height: "10em",
              background: "#ebf5f4",
              margin: "4em 0",
            }}
          />
          <p
            style={{
              fontSize: "18px",
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {'"Thank you for trusting us!" '} {'"Your order is completed!"'} will do just
            fine. Just make sure that it is clear <br />
            what just happened(and what they should expect to happen next, if
            necessary)
          </p>{" "}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <div
            className="order-status-container"
          >
            <div
              style={{
                width: "0.5rem",
                height: "18rem",
                background: "#005652",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="stepStyle" />
              <div className="stepStyle" style={{ marginTop: "4rem" }} />
              <div className="stepStyle" style={{ marginTop: "4rem" }} />
              <div className="stepStyle" style={{ marginTop: "4rem" }} />
            </div>
            <div>
              {orderData?.status?.map((item, index) => {
                const statusTime = convertToLocalTime(item?.statusTime)
                return(<div
                  style={{
                    display: "flex",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: "4rem",
                  }}
                  key={index}
                >
                  <p style={{ paddingRight: 25 }}>
                    {
                      statusTime
                    }
                  </p>
                  <p>Order {item.orderStatus}</p>
                </div>
              )})}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: 170, fontSize: 16, marginRight: 15 }} onClick={() => setOpen(true)}>
            CANCEL ORDER
          </button>
          <button style={{ width: 160, fontSize: 16 }}>Send FeedBack</button>
        </div>
      </div>
    </>
  );
};

export default UserOrder;
