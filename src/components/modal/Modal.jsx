import React from "react";
import {Link} from "react-router-dom";
import "./modal.css"

const Modal = ({ setOpen,user }) => {
  return (
    <div className="modal">
      <div onClick={() => setOpen(false)} className="overlay"></div>
      <div className="modal-content">
        <h2>{!user?"You are not Sign In ":'You are not Sign Up Sign up First'}</h2>
        <Link
          href={!user?"/sign-in":"/register"}
          style={{
            background: "#fff",
            color: "#005652",
            textAlign: "center",
            margin: "15px 0",
            fontWeight: "bold",
            fontSize: "20px",
            width: "20rem",
          }}
          onClick={() => setOpen(false)}
        >
          {!user?"Sign In":'Sign Up'}
        </Link>
      </div>
    </div>
  );
};

export default Modal;
