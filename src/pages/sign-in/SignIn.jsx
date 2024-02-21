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
  const [password,setPassword] = useState(false);
  const [email,setEmail] = useState(false)
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
    const res = await axios.post(
      "https://drcbd-backend.onrender.com/user/email_verification",
      //https://52.77.244.89:8080
      { otp: otp },
    );
    console.log(res.data)
    if(!res.data.status){
      setToken(true)
    }
    if (res.data.status===true) {
      localStorage.setItem("token", res.data.token);
      await updateUser(dispatch)
      console.log("Signup success", res.data);
      navigate("/");
    };
  };
  const sendOtp = async () => {
    try {
     const {data} = await axios.post(
        "https://drcbd-backend.onrender.com/user/send_otp",
        //https://52.77.244.89:8080
        user
      );
      if(data.status) 
      setVerify(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handelLogin = async () => {
    const userToken = localStorage.getItem("token");
    if(!user?.email?.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmail(true)
      return 
    }
    const response = await axios.post("https://drcbd-backend.onrender.com/user/login", user);
    //https://52.77.244.89:8080
    console.log(response.data);
    if(response?.data?.email){
      if(userToken){
        localStorage.removeItem('token')
      }
      setEmail(true)
      return 
    }else if(response?.data?.password){
      if(userToken){
        localStorage.removeItem('token')
      }
      setPassword(true)
      return 
    }
    await authSuccessful(dispatch, response.data.user);
    if (!response?.data?.user?.emailVerified) {
      setOpen(true);
    } else { 
      if(user){
        localStorage.removeItem('token')
      }
      localStorage.setItem("token", response.data.token);
      await updateUser(dispatch)
      console.log("Signup success", response.data);
      // navigate("/");
      // window.location.reload()
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
          <p> Email Address *</p>
          <input
            type="email"
            value={user.email}
            required
            onChange={(e) => {
              setEmail(false)
              setUser({ ...user, email: e.target.value })
            }}
          />
          {email&&<p style={{color:"red"}}>Email is not valid or you are not Signup</p>}
          <p>Password</p>
          <input
          type='password'
          required
            onChange={(e) => {
              setPassword(false)
              setUser({ ...user, password: e.target.value })}}
          />
          {password&&<p style={{color:"red"}}>Password is not valid</p>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            
            <Link to='/forgot-password' style={{ fontSize: 20 }}>Forgot your password</Link>
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
