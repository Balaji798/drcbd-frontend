import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../../services/ApiService";
import Steps from "../../components/Steps";
import "./order.css";
import { convertToLocalTime } from "../../util/convertToLocalTime";

const UserOrder = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [open, setOpen] = useState(false);
  //const [steps, setSteps] = useState([]);
  const steps2 = [
    { image: "../checkoutImage/1.png", title: "Order Placed" },
    { image: "../checkoutImage/2.png", title: "" },
    { image: "../checkoutImage/3.png", title: "" },
    { image: "../checkoutImage/4.png", title: "" },
  ];

  useEffect(() => {
    const getOrder = async () => {
      const res = await ApiService.getOrder(orderId);
      setOrderData(res.data);
    };
    getOrder();
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
        <Steps stepsColor={[4]} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "2em 0 3em 0",
          }}
        >
          <img
            src="../thankyou.png"
            alt="/"
            style={{
              width: "100%",
              objectFit: "contain",
              height: "17em",
              position: "absolute",
              top: "18.5em",
            }}
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
              paddingBottom: 20,
            }}
          >
            "Thank you for trusting us!" "Your order is completed!" will do just
            fine. Just make sure that it is clear <br />
            what just happened(and what they should expect to happen next, if
            necessary)
          </p>{" "}
          <div
            className="input-container"
            style={{ maxWidth: "900px", width: "100%" ,display:"flex",flexDirection:"column",alignItems:"center"}}
          >
            <p style={{ fontSize: "25px", textAlign: "center" }}>
              Track Delivery Status:
            </p>{" "}
            <input
              style={{
                width: "50%",
                padding: "1em 0",
                borderRadius: "10px",
                border: "0.5px solid",
                marginLeft: "1em",
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: "4em 0",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
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
                  />
                </div>
              </div>
            ))}
          </div>
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
            style={{
              display: "flex",
              paddingBottom: 20,
              width: "35%",
              justifyContent: "space-between",
            }}
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
