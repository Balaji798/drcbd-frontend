import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
// import { CiLogout } from "react-icons/ci";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdOutlineShoppingBag } from "react-icons/md";
//import { BiEditAlt } from "react-icons/bi";
import ApiService from "../../services/ApiService";
import { Link } from "react-router-dom";
import "./profile.css";
import axios from "axios";

const Profile = () => {
  const [userData, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const res = await ApiService.getUser();
      
      setUser({...res.data.user,dateOfBarth:res.data.user?.dateOfBarth?.split("T")[0]});
    };
    getUser();
  }, []);

  const handelUserUpdate = async () => {
    const user = localStorage.getItem("token");
    if (user) {
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      };
      
      const res = await axios.put(
        "https://drcbd-backend.onrender.com/user/update_user",
        //https://drcbd-backend.onrender.com
        userData,
        config
      );

      setUser(res.data);
      setEdit(false)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#07575b",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem 3rem",
          borderRadius: "40px",
          color: "grey",
          height: "30rem",
        }}
      >
        <FaUserCircle style={{ color: "grey", fontSize: "15rem" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "3px solid",
            borderRadius: "25px",
            width: "3rem",
            height: "3rem",
            position: "absolute",
            marginBottom: "-11rem",
            marginLeft: "7rem",
            background: "#fff",
          }}
        >
          <h1>+</h1>
        </div>
      </div>
      <div className="user-det-form">
        <h1 style={{ color: "#003b45" }}>User Profile</h1>
        <div style={{ width: "100%" }}>
          <div>
            <p>Name</p>
            <input
              value={userData?.fullName}
              readOnly={!edit}
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
              }}
              onChange={(e) => {
                setUser({ ...userData, fullName: e.target.value });
              }}
            />
          </div>
          {/* // <div>
          //   <p>Last Name</p>
          //   <input
          //     value={userData?.fullName?.split(" ")[1]}
          //     readOnly={!edit}
          //     style={{
          //       background: edit && "#fff",
          //       padding: "5px",
          //       fontSize: 16,
          //       borderRadius: 10,
          //       color: edit && "#000",
          //     }}
          //     onChange={(e) => {
          //       setUser({ ...user, fullName: e.target.value });
          //     }}
          //   />
            // </div>*/}
          <div>
            <p>Email</p>
            <input
              value={userData?.email}
              readOnly={!edit}
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
              }}
              onChange={(e) => {
                setUser({ ...userData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <p>Address</p>
            <input
              value={userData?.userAddresses}
              readOnly={!edit}
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
                width: "100%",
              }}
              onChange={(e) => {
                setUser({ ...userData, userAddresses: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Phone</p>
            <input
              value={userData?.phone}
              readOnly={!edit}
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
              }}
              onChange={(e) => {
                setUser({ ...userData, phone: e.target.value });
              }}
            />
          </div>
          <div>
            <p>Gender</p>
            <input
              value={userData?.gander}
              readOnly={!edit}
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
              }}
              onChange={(e) => {
                setUser({ ...userData, gander: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Birthday</p>
            <input
              value={userData?.dateOfBarth}
              readOnly={!edit}
              type="Date"
              style={{
                background: edit && "#fff",
                padding: "5px",
                fontSize: 16,
                borderRadius: 10,
                color: edit && "#000",
              }}
              onChange={(e) => {
                
                setUser({ ...userData, dateOfBarth: e.target.value });
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                paddingBottom: "0.5rem",
                justifyContent: "space-between",
              }}
            >
              <button
                className="edit-button"
                style={{ marginRight: "0.5rem", width: "6.5rem" }}
                onClick={() => setEdit(!edit)}
              >
                EDIT
              </button>
              <button
                className="edit-button"
                style={{ width: "6.5rem" }}
                onClick={handelUserUpdate}
              >
                SAVE
              </button>
            </div>
            <Link to="/my-orders" className="edit-button">
              ORDER HISTORY
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          border: "2px solid silver",
          borderRadius: "5px",
          padding: "20px",
          width: "20%",
          marginRight: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <FaUserCircle style={{ color: "#004d4a", fontSize: "50px" }} />
          <div style={{ width: "70%" }}>
            <p>Hello</p>
            <h2>{user?.fullName}</h2>
          </div>
        </div>
        {profileMenu.map((item, index) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              margin: "20px 0",
              color: "#004d4a",
              borderTop: "2px solid silver",
              paddingTop: 20,
            }}
            key={index}
          >
            {item.icon}
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "60%",
          border: "2px solid silver",
          padding: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "45%" }}>
            <h2 style={{ fontWeight: 300 }}>Full Name</h2>
            <div
              style={{
                border: "1px solid silver",
                display: "flex",
                padding: "5px",
                width: "100%",
              }}
            >
              <input
                value={user?.fullName}
                style={{
                  padding: "",
                  fontSize: "20px",
                  outline: "none",
                  border: "none",
                  width: "90%",
                }}
              />
              <BiEditAlt style={{ fontSize: "20px", color: "#004d4a" }} />
            </div>
          </div>

          <div style={{ width: "45%" }}>
            <h2 style={{ fontWeight: 300 }}>Email</h2>
            <div
              style={{
                border: "1px solid silver",
                display: "flex",
                padding: "5px",
                width: "100%",
              }}
            >
              <input
                value={user?.email}
                style={{
                  padding: "",
                  fontSize: "20px",
                  outline: "none",
                  border: "none",
                  width: "90%",
                }}
              />
              <BiEditAlt style={{ fontSize: "20px", color: "#004d4a" }} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
