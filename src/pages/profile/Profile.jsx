import { useState, useEffect } from "react";
import { getUser, updateUser } from "../../services/ApiService";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./profile.css";

const Profile = () => {
  const [userData, setUser] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const [edit, setEdit] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const res = await getUser();
      setUserAddress(res.user?.userAddresses);
      setUser({
        ...res.user,
        dateOfBarth: res.user?.dateOfBarth?.split("T")[0],
      });
    };
    getUsers();
  }, []);
  const handelUserUpdate = async () => {
    const res = await updateUser({ userData, userAddress:userAddress });
    setUser(res);
    setEdit(false);
  };

  return (
    <>
      {editAddress && (
        <div className="modal">
          <div className="overlay"></div>
          <div
            className="modal-content"
            style={{
              background: "#fff",
              color: "#005652",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ padding: "5px 0" }}>Your Order Address List</h2>
              <div
                onClick={() => setEditAddress(false)}
                style={{ cursor: "pointer" }}
              >
                <RxCross2 />
              </div>
            </div>
            {userData?.userAddress?.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid",
                  width: "100%",
                  padding: "5px",
                  marginBottom: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setUserAddress(item);
                  setEditAddress(false);
                }}
              >
                <p style={{ width: "100%" }}>
                  <span style={{ fontWeight: "bold" }}>Address:-</span>
                  {item?.address}
                </p>
                <p style={{ width: "100%" }}>
                  <span style={{ fontWeight: "bold" }}>City:-</span>
                  {item?.city}
                </p>
                <p style={{ width: "100%" }}>
                  <span style={{ fontWeight: "bold" }}>Country:-</span>
                  {item?.country}
                </p>
                <p style={{ width: "100%" }}>
                  <span style={{ fontWeight: "bold" }}>Postcode:-</span>
                  {item?.postalCode}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          background: "#07575b",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "6rem 0",
        }}
      >
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
                value={userAddress?.address}
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
                  setUser({ ...userAddress, address: e.target.value });
                }}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <p>City</p>
              <input
                value={userAddress?.city}
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
            <div>
              <p>Country</p>
              <input
                value={userAddress?.country}
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
          <div>
            <div>
              <p>Postcode</p>
              <input
                value={userAddress?.postalCode}
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
                  setUser({ ...userAddress, postalCode: e.target.value });
                }}
              />
            </div>
            {edit && (
              <button
                className="edit-button"
                style={{
                  padding: "10px 5px",
                  height: "40px",
                  fontSize: "14px",
                }}
                onClick={() => setEditAddress(true)}
              >
                Chose From List
              </button>
            )}
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
                  style={{
                    width: "50%",
                    borderRight: "2px solid #fff",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  onClick={() => setEdit(!edit)}
                >
                  EDIT
                </button>
                <button
                  className="edit-button"
                  style={{
                    width: "50%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                  onClick={handelUserUpdate}
                >
                  SAVE
                </button>
              </div>
              <Link to="/my-orders" className="history-button">
                ORDER HISTORY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
