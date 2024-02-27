import React from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css"

const Modal = ({ setOpen,user }) => {
  const navigate = useNavigate();
  const handelNext = ()=>{
    !user?navigate('/sign-in'):navigate("/register");
    setOpen(false)
  }
  return (
    <div className="modal">
      <div onClick={() => setOpen(false)} className="overlay"></div>
      <div className="modal-content">
        <h2>{!user?"You are not Sign In ":'You are not Sign Up Sign up First'}</h2>
        <div
          
          style={{
            background: "#fff",
            color: "#005652",
            textAlign: "center",
            margin: "15px 0",
            fontWeight: "bold",
            fontSize: "20px",
            maxWidth: "20rem",
            width:"100%",
            cursor:'pointer'
          }}
          onClick={handelNext}
        >
          {!user?"Sign In":'Sign Up'}
        </div>
      </div>
    </div>
  );
};

export default Modal;
