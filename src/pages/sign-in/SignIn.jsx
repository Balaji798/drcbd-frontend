import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { authSuccessful, updateUser } from "../../state/actions/authAction";

const SignIn = () => {
  //const {data:session} = useSession();
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const [otp,setOtp]=useState('')
  const [token, setToken] = useState(false);
  const [verify, setVerify] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // if(session){
  //    return <div>Welcome {session.user.email}</div>
  // }else{

  // }]
  const verifyEmail = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://drcbd-backend.onrender.com/user/email_verification",
      //https://drcbd-backend.onrender.com
      { otp: otp },
      config
    );
    if(!res.data.status){
      setToken(true)
    }
    if (res.data.status===true) setVerify(true);
  };
  const sendOtp = async () => {
    try {
     const {data} = await axios.post(
        "https://drcbd-backend.onrender.com/user/send_otp",
        //https://drcbd-backend.onrender.com
        user
      );
      if(data.status) 
      setVerify(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handelLogin = async () => {
    ;
    if(!user.email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      alert('Email is not a valid email')
      return 
    }
    const response = await axios.post("https://drcbd-backend.onrender.com/user/login", user);
    //https://drcbd-backend.onrender.com
    console.log(response.data);
    await authSuccessful(dispatch, response.data.user);
    if (!response.data.user.emailVerified) {
      setOpen(true);
    } else {
      localStorage.setItem("token", response.data.token);
      //await updateUser(dispatch)
      console.log("Signup success", response.data);
      navigate("/");
    }
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
      {open ? (
        verify ? (
          <div className="register-container">
            <h3 style={{ textTransform: "capitalize" }}>
              {" "}
              We have send an otp to your email please use that otp to verify
              your email
            </h3>
            <p
              style={{
                textAlign:"center",
                fontSize: "16px",
                padding: "0.7em 0",
                fontWeight: "bold",
              }}
            >
              OTP(One Time Password)
            </p>
            <input
              style={{
                width: "50%",
                padding: "5px",
                fontSize: 15,
                borderRadius: 10,
                border: "1px solid grey",
              }}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            {token && (
              <p style={{ color: "red", paddingTop: 10 }}>Not a valid OTP</p>
            )}
            <button
              style={{marginTop:"1rem",maxWidth:200}}
              onClick={verifyEmail}
            >
              Verify Email
            </button>
          </div>
        ) : (
          <div className="register-container">
            <p>Your email is not verified please Verify your email first</p>
            <button
              onClick={
                sendOtp
                
              }
            >
              Verify
            </button>
          </div>
        )
      ) : (
        <div className="register-container">
          <h1>
            Sign in |{" "}
            <Link to="/register" style={{ color: "#99a79f" }}>
              Register
            </Link>
          </h1>
          <p>User Name & Email Address *</p>
          <input
            type="email"
            value={user.email}
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <p>Password</p>
          <input
          type='password'
          required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" style={{ height: 30, width: 30 }} />
              <p style={{ fontSize: 20, fontWeight: "bold" }}>Remember Me</p>
            </div>
            <p style={{ fontSize: 20 }}>Forgot your password</p>
          </div>
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
            onClick={handelLogin}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
