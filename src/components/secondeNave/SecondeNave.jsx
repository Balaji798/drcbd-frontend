import React, { useState } from "react";
import { navData } from "./navData";
import "./secondNave.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const SecondeNave = ({ openNav, setOpenNav }) => {
  const [menusIndex, setMenusIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  return (
    <>
      {open && <Modal setOpen={setOpen} user={user} />}
      <div
        className={`${openNav ? "second-nave nav-active" : "second-nave"}`}
        // style={{ transform: openNav ? "translateX(145%)" : "translateX(45%)" }}
      >
        {menusIndex > -1 && (
          <div className="back-button" onClick={() => setMenusIndex(-1)}>
            {" "}
            {"<"}Back
          </div>
        )}
        {menusIndex < 0 ? (
          <ul>
            {navData.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link
                    to={item.link}
                    onClick={() => {
                      setOpenNav(false);
                    }}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p>{item.title}</p>
                )}
                <MdArrowForwardIos
                  onClick={() => {
                    setMenusIndex(index);
                  }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {navData[menusIndex]?.options.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="user-profile-lang">
          <Link
            to="/sign-in"
            style={{ marginLeft: "2px" }}
            onClick={() => {
              setOpenNav(false);
            }}
          >
            Sign In
          </Link>
          <Link
          to="/register"
          style={{ marginLeft: "2px" }}
          onClick={() => {
            setOpenNav(false);
          }}
        >
          Sign UP
        </Link>
          <p
            style={{ cursor: "pointer", marginLeft: "2px" }}
            onClick={() => {
              if (user) {
                navigate("/my-orders");
                setOpenNav(false);
              } else {
                setOpen(true);
              }
            }}
          >
            {" "}
            My Orders
          </p>
          <p
            style={{ cursor: "pointer", marginLeft: "2px" }}
            onClick={() => {
              localStorage.removeItem("token");
              setOpenNav(false);
            }}
          >
            {" "}
            Logo Out
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondeNave;
