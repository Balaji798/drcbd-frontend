import React, { useState, useEffect } from "react";
import "./forms.css";
import axios from "axios";
import ApiService from "../../services/ApiService";
import Steps from "../../components/Steps";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Forms = (props) => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [user, setUser] = useState([]);
  const [select, setSelect] = useState(0);
  const [userAdd, setUserAdd] = useState({
    city: "",
    country: "",
    address: "",
    postalCode: "",
    contactNumber: "",
    taxId: "",
    other: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await ApiService.getUser();

      setUser(res.data.user.userAddress);
    };
    getUser();
  }, []);

  //console.log(user);
  const handelNext = async () => {
    try {
      const user = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json", // Set the content type to JSON
        },
      };

      const res = await axios.post(
        "https://drcbd-backend.onrender.com/user/edit-user",
        //https://drcbd-backend.onrender.com
        userAdd,
        config
      );

      if (res.data.status) {
        const response = await axios.post(
          "https://drcbd-backend.onrender.com/orders/update_order/" + orderId,
          //https://drcbd-backend.onrender.com
          userAdd,
          config
        );
        const res = await ApiService.getOrderById(orderId);
        const totalPrice = res.data.totalPrice;
        console.log(totalPrice);
        if (response.data.status)
          navigate("/order-summery/" + orderId, {
            state: { price: totalPrice },
          });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  // props.setPosition(3);

  return (
    <>
      <Steps stepsColor={[1, 2]} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2em 0 3em 0",
        }}
      >
        <h1 style={{ fontSize: "45px", fontWeight: 800 }}>
          Address Document Information
        </h1>
        <div style={{ maxWidth: "600px", width: "100%", margin: "2rem 0" }}>
          {user.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid",
                width: "100%",
                padding: "1rem",
                boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
                cursor: "pointer",
                background: select === index + 1 ? "#005256" : "#fff",
                color: select === index + 1 ? "#fff" : "#005256",
                marginBottom: "15px",
              }}
              onClick={() => {
                if (select === index + 1) {
                  setSelect(0);
                } else {
                  setUserAdd({
                    city: item.city,
                    country: item.country,
                    address: item.address,
                    postalCode: item.postalCode,
                    contactNumber: item.contactNumber,
                    taxId: "",
                    other: "",
                  });

                  setSelect(index + 1);
                }
              }}
            >
              <p style={{ paddingBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Address:-</span>
                {item.address}
              </p>
              <p style={{ paddingBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>City:-</span>
                {item.city}
              </p>
              <p style={{ paddingBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Country:-</span>
                {item.country}
              </p>
              <p style={{ paddingBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Postal Code:-</span>
                {item.postalCode}
              </p>
              <p style={{ paddingBottom: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Contact Number:-</span>
                {item.contactNumber}
              </p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            City:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, city: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Country:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, country: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Address:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, address: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Postal Code:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, postalCode: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Contact Number:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, contactNumber: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Tax ID:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, taxId: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <p style={{ fontSize: "25px", width: "15%", textAlign: "end" }}>
            Other:
          </p>{" "}
          <input
            style={{
              width: "40%",
              padding: "1em 0",
              borderRadius: "10px",
              border: "0.5px solid",
              marginLeft: "1em",
            }}
            onChange={(e) => {
              setUserAdd({ ...userAdd, other: e.target.value });
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            maxWidth: "800px",
            width: "100%",
            padding: "3em 0",
            color: "#fff",
          }}
        >
          <Link
            style={{
              background: "#0c4641",
              color: "#fff",
              padding: "7px 25px",
              fontweight: "bold",
              fontSize: "2rem",
              borderRadius: 5,
              marginRight: "2rem",
            }}
            to="/cart"
          >
            {"< "}Back
          </Link>
          <button
            style={{
              width: "5em",
              fontSize: "35px",
              fontWeight: 100,
              background: "#0c4641",
              cursor: "pointer",
            }}
            onClick={
              handelNext
              //()=>
            }
          >
            Next{"  >"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Forms;
