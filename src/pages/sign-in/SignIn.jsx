 
import {Link} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <h1 style={{ fontSize: "50px" }}>
        Sign in |{" "}
        <Link to="/register" style={{ color: "#99a79f" }}>
          Register
        </Link>
      </h1>
      <p
        style={{
          width: "35%",
          fontSize: "30px",
          padding: "0.7em 0",
          fontWeight: "bold",
        }}
      >
        User Name & Email Address *
      </p>
      <input
        style={{
          width: "35%",
          padding: "10px 5px",
          fontSize: 20,
          borderRadius: 10,
        }}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <p
        style={{
          width: "35%",
          fontSize: "30px",
          padding: "0.7em 0",
          fontWeight: "bold",
        }}
      >
        Password
      </p>
      <input
        style={{
          width: "35%",
          padding: "10px 5px",
          fontSize: 20,
          borderRadius: 10,
          marginBottom: "1.5em",
        }}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div
        style={{
          display: "flex",
          width: "35%",
          justifyContent: "space-between",
          alignItems: "center",
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
  );
};

export default SignIn;
