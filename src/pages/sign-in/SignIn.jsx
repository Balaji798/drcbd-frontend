 
import {Link} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './register.css'

const SignIn = () => {
  //const {data:session} = useSession();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // if(session){
  //    return <div>Welcome {session.user.email}</div>
  // }else{
    
  // }

  const handelLogin = async () => {
    const response = await axios.post("https://drcbd-backend.onrender.com/user/login", user);
    //https://drcbd-backend.onrender.com
    localStorage.setItem("token", response.data.token);
    console.log("Signup success", response.data);
    navigate("/")
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
    <div className="register-container">
    <h1>
      Sign in |{" "}
      <Link to="/register" style={{ color: "#99a79f" }}>
        Register
      </Link>
    </h1>
    <p
    >
      User Name & Email Address *
    </p>
    <input
      onChange={(e) => setUser({ ...user, email: e.target.value })}
    />
    <p
    >
      Password
    </p>
    <input
      
      onChange={(e) => setUser({ ...user, password: e.target.value })}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap:"wrap"
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
    </div>
  );
};

export default SignIn;
