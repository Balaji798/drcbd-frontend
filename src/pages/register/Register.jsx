import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handelSignUp = async () => {
    try {
      if (user.password !== user.confirmPassword) {
        return alert("Password did not match");
      }
      const response = await axios.post(
        "https://drcbd-backend.onrender.com/user/signup",
        //https://drcbd-backend.onrender.com
        user
      );
      
      localStorage.setItem("token", response.data);
      setToken(response.data);
      setLogin(true);
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  };

  const verifyEmail = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "http://localhost:8080/user/email_verification",
      //https://drcbd-backend.onrender.com
      { otp: otp },
      config
    );
    if (res.data.status) setVerified(true);
  };
  return (
    <div
      style={{
        color: "#005652",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5em 0",
      }}
    >
      {login ? (
        verified ? (
          <>
            <h1 style={{ fontSize: "50px", textAlign: "center" }}>
              You Have Successfully
              <br />
              Registered !
            </h1>
            <img
              src="./sub.png"
              alt="/"
              style={{ width: "100%", objectFit: "contain", height: "20em" }}
            />
            <Link to="/" style={{ color: "#99a79f", width: "35%" }}>
              <button
                style={{
                  marginTop: "1em",
                  fontSize: "30px",
                  textAlign: "center",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "#0b4640",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                onClick={() => setLogin(true)}
              >
                Go Home
              </button>
            </Link>
          </>
        ) : (
          <div>
            <h3 style={{ textTransform: "capitalize" }}>
              {" "}
              We have send an otp to your email please use that otp to verify
              your email
            </h3>
            <p
              style={{
                width: "35%",
                fontSize: "16px",
                padding: "0.7em 0",
                fontWeight: "bold",
              }}
            >
              OTP(One Time Password)
            </p>
            <input
              style={{
                width: "35%",
                padding: "5px",
                fontSize: 20,
                borderRadius: 10,
                border: "1px solid grey",
              }}
              onChange={(e)=>{setOtp(e.target.value)}}
            />
            <button
              style={{
                marginTop: "1em",
                fontSize: "30px",
                textAlign: "center",
                width: "100%",
                padding: "10px",
                border: "none",
                background: "#0b4640",
                color: "#fff",
                fontWeight: "bold",
              }}
              onClick={verifyEmail}
            >
              Verify Email
            </button>
          </div>
        )
      ) : (
        <>
          <h1 style={{ fontSize: "50px" }}>
            <Link to="/sign-in" style={{ color: "#99a79f" }}>
              Sign in |{" "}
            </Link>
            Register
          </h1>
          <p
            style={{
              width: "35%",
              fontSize: "16px",
              padding: "0.7em 0",
              fontWeight: "bold",
            }}
          >
            User Name
          </p>
          <input
            style={{
              width: "35%",
              padding: "5px",
              fontSize: 20,
              borderRadius: 10,
              border: "1px solid grey",
            }}
            onChange={(e) => {
              setUser({ ...user, fullName: e.target.value });
            }}
          />
          <p
            style={{
              width: "35%",
              fontSize: "16px",
              padding: "0.7em 0",
              fontWeight: "bold",
            }}
          >
            Email Address
          </p>
          <input
            style={{
              width: "35%",
              padding: "5px",
              fontSize: 20,
              borderRadius: 10,
              border: "1px solid grey",
            }}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          <p
            style={{
              width: "35%",
              fontSize: "16px",
              padding: "0.7em 0",
              fontWeight: "bold",
            }}
          >
            Password
          </p>
          <input
            style={{
              width: "35%",
              padding: "5px",
              fontSize: 16,
              borderRadius: 10,
              marginBottom: "1em",
              border: "1px solid grey",
            }}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <p
            style={{
              width: "35%",
              fontSize: "16px",
              padding: "0.7em 0",
              fontWeight: "bold",
            }}
          >
            Confirm Password
          </p>
          <input
            style={{
              width: "35%",
              padding: "5px",
              fontSize: 16,
              borderRadius: 10,
              marginBottom: "1em",
              border: "1px solid grey",
            }}
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
          <p
            style={{ fontWeight: "500", lineHeight: "1.5em", fontSize: "20px" }}
          >
            Your personal data will be used to support your experience <br />
            throughout this website, to manage access to your account,
            <br />
            and for other purposes described in our privacy policy
          </p>
          <button
            style={{
              marginTop: "1em",
              fontSize: "30px",
              textAlign: "center",
              width: "35%",
              padding: "10px",
              border: "none",
              background: "#0b4640",
              color: "#fff",
              fontWeight: "bold",
            }}
            onClick={handelSignUp}
          >
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default Register;
