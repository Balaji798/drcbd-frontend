import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css'

const Register = () => {
  const navigate=useNavigate()
  const [login, setLogin] = useState(false);
  const [email,setEmail] = useState(false)
  const [verified, setVerified] = useState(false);
  const [invalid,setInvalid] = useState(false)
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handelSignUp = async () => {
    try {
      if(!user?.email?.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmail(true)
      return 
    }
      if (user.password !== user.confirmPassword) {
        return alert("Password did not match");
      }
      const response = await axios.post(
        "https://drcbd-backend.onrender.com/user/signup",
        //https://52.77.244.89:8080
        user
      );
      
      
      setLogin(true);
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  };

  const verifyEmail = async () => {
    console.log(otp)
    
    const res = await axios.post(
      "https://drcbd-backend.onrender.com/user/email_verification",
      //https://52.77.244.89:8080
      { otp: otp }
    );
    if(res.data.status){
      console.log(res.data)
      localStorage.setItem("token", res.data.token);
      setToken(true)
    }
    if(!res.data.status){
      setInvalid(true)
    }
    if (res.data.status===true) setVerified(true) ;
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
            <div style={{ color: "#99a79f", width: "35%" }}>
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
                onClick={() => {
                  navigate('/')
                  window.location.reload();
                }}
              >
                Go Home
              </button>
            </div>
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
              value={otp}
              onChange={(e)=>{setOtp(e.target.value)}}
            />
            {invalid&&<p style={{color:"red",paddingTop:10}}>Not a valid OTP</p>}
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
        <div className="register-container">
          <h1>
            <Link to="/sign-in" style={{ color: "#99a79f" }}>
              Sign in |{" "}
            </Link>
            Register
          </h1>
          <p
          >
            User Name
          </p>
          <input
            onChange={(e) => {
              setUser({ ...user, fullName: e.target.value });
            }}
          />
          <p
          >
            Email Address
          </p>
          <input
          type='email'
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
          {email&&<p style={{color:"red"}}>Email is not valid</p>}
          <p
          >
            Password
          </p>
          <input
          type='password'
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <p
          >
            Confirm Password
          </p>
          <input
            type='password'
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
        </div>
      )}
    </div>
  );
};

export default Register;
