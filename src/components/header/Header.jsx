import React, { useState, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";
// import cbd from "../../../public/dr/cbd.png";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";
import Modal from "../modal/Modal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handelNext = async (type) => {
    if (!user) {
      console.log("hi");
      setOpen(true);
    } else {
      console.log(type);
      const res = await ApiService.getUser();
      console.log(res.data, "h2");
      res.data.status ? navigate(type) : setOpen(true);
    }
  };
  return (
    <>
      {open && <Modal setOpen={setOpen} user={user} />}
      <header>
        <div className="header-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
           
            <p> TH/EN |</p>
            <Link to="/sign-in">Sign In |</Link>
            <p> Track Orders</p>
          </div>
          <div style={{ display: "flex", width: "20%" }}>
            <div className="search-bar">
              <BsSearch
                color="#000"
                style={{ marginRight: "0.5em" }}
                size={16}
              />
              <input
                style={{
                  outline: "none",
                  width: "100%",
                  fontSize: 10,
                  border: "none",
                  background: "#fff",
                }}
              />
            </div>
            <div
              style={{
                color: "#fff",
                marginLeft: "2em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/cart")}
            >
              <MdOutlineAddShoppingCart
                style={{ fontSize: "25px", alignSelf: "end" }}
              />
            </div>
            <div
              style={{
                color: "#fff",
                marginLeft: "2em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/profile")}
            >
              <FaUserCircle style={{ fontSize: "25px", alignSelf: "end" }} />
            </div>
          </div>
        </div>
        <Link to="/">
          <img
            src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/cbd.png"
            style={{
              objectFit: "cover",
              height: "45px",
              width: "120px",
            
              top: 20,
              left: "45%",
            }}
            alt={""}
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
