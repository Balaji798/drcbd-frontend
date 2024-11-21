import { useState, useEffect } from "react";
import "./forms.css";
import { editUser, getUser } from "../../services/ApiService";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCart } from "../../state/actions/cartAction";
import { country_list } from "../../data";
import Steps from "../../components/Steps";

const Forms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { orderId } = useParams();
  const [addAddress, setAddAddress] = useState(false);
  const [user, setUser] = useState([]);
  const [select, setSelect] = useState(-1);
  const [userAdd, setUserAdd] = useState({
    city: "",
    country: "",
    address: "",
    postalCode: "",
    contactNumber: "",
    taxId: "",
    other: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      const res = await getUser();
      setUser(res.user.userAddress);
      if (res.user.userAddress.length > 0) {
        setUserAdd(res.user.userAddress[0]);
        setSelect(0);
      }
    };
    getUsers();
  }, []);

  const handelNext = async () => {
    try {
      if (
        userAdd.address.trim() === "" ||
        userAdd.city.trim() === "" ||
        userAdd.country.trim() === "" ||
        userAdd.postalCode.trim() === "" ||
        userAdd.contactNumber.trim() === ""
      ) {
        alert("Delivery address required");
        return;
      }
      if (userAdd.country.trim() !== "Thailand") {
        setOpen(true);
        return;
      }

      const res = await editUser(userAdd)
      if (res.status) {
        await getCart(dispatch);
        localStorage.setItem("delver_address", JSON.stringify(userAdd));
        navigate("/order-summery/" + orderId);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      {open && (
        <div className="modal">
          <div onClick={() => setOpen(false)} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{ paddingBottom: 10 }}>
              Free Shipping is only applicable for domestic orders within
              Thailand.
            </h2>
            <h3 style={{ paddingBottom: 10 }}>
              For order requiring international shipping, please contact our
              sales team at{" "}
              <a
                href="mailto:sales@drcbdgroup.com"
                style={{ textDecoration: "underline" }}
              >
                sales@drcbdgroup.com
              </a>
            </h3>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <Steps stepsColor={[1, 2]} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2em 0 3em 0",
        }}
      >
        <h1 style={{ fontWeight: 800 }} className="title-text">
          Address Document Information
        </h1>
        <div
          style={{
            maxWidth: "1050px",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: "10px",
          }}
        >
          <div style={{paddingLeft:"10px"}}>
            <div
              style={{
                border: addAddress ? "1px solid #0c4641" : "0px",
                padding: "10px",
                backgroundColor: !addAddress ? "#0c4641" : "#fff",
                color: !addAddress ? "#fff" : "#0c4641",
                borderRadius: 5,
                marginBottom: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                setUserAdd(user[0])
                setAddAddress(false)
              }}
            >
              <h4>Select From Existing Address</h4>
            </div>
            <div
              style={{
                border: !addAddress ? "1px solid #0c4641" : "0px",
                padding: "10px",
                backgroundColor: addAddress ? "#0c4641" : "#fff",
                color: addAddress ? "#fff" : "#0c4641",
                borderRadius: 5,
                cursor: "pointer",
              }}
              onClick={() => {
                setUserAdd({
                  city: "",
                  country: "Thailand",
                  address: "",
                  postalCode: "",
                  contactNumber: "",
                  taxId: "",
                  other: "",
                });
                setAddAddress(true);
              }}
            >
              <h4>Add New Address +</h4>
            </div>
          </div>
          <div style={{ maxWidth: "800px", width: "100%",paddingTop:"10px" }}>
            {!addAddress ? (
              <div
                style={{
                  maxWidth: "650px",
                  width: "100%",
                  padding: "0 1rem",
                }}
              >
                {user.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid",
                      width: "100%",
                      padding: "1rem",
                      boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                      borderRadius: "5px",
                      cursor: "pointer",
                      background: select === index ? "#005256" : "#fff",
                      color: select === index ? "#fff" : "#005256",
                      marginBottom: "15px",
                    }}
                    onClick={() => {
                      setUserAdd({
                        city: item?.city,
                        country: item?.country,
                        address: item?.address,
                        postalCode: item?.postalCode,
                        contactNumber: item?.contactNumber,
                        taxId: item?.texId,
                        other: item?.other,
                      });
                      setSelect(index);
                    }}
                  >
                    <p style={{ paddingBottom: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>Address:-</span>
                      {item.address}
                    </p>
                    <p style={{ paddingBottom: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>City:-</span>
                      {item.city}
                    </p>
                    <p style={{ paddingBottom: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>Country:-</span>
                      {item.country}
                    </p>
                    <p style={{ paddingBottom: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>Postal Code:-</span>
                      {item.postalCode}
                    </p>
                    <p style={{ paddingBottom: "1rem" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Contact Number:-
                      </span>
                      {item.contactNumber}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="input-container">
                  <p>City:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, city: e.target.value });
                    }}
                  />
                </div>
                <div className="input-container">
                  <p>Country:</p>{" "}
                  <select
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, country: e.target.value });
                    }}
                  >
                    {country_list.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-container">
                  <p>Address:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, address: e.target.value });
                    }}
                  />
                </div>
                <div className="input-container">
                  <p>Postal Code:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, postalCode: e.target.value });
                    }}
                  />
                </div>
                <div className="input-container">
                  <p>Contact Number:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, contactNumber: e.target.value });
                    }}
                  />
                </div>
                <div className="input-container">
                  <p>Tax ID:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, taxId: e.target.value });
                    }}
                  />
                </div>
                <div className="input-container">
                  <p>Other:</p>{" "}
                  <input
                    onChange={(e) => {
                      setUserAdd({ ...userAdd, other: e.target.value });
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            maxWidth: "800px",
            width: "100%",
            padding: "1em 0 3em",
            color: "#fff",
          }}
        >
          <Link
            className="back-button"
            style={{
              width: "5em",
              fontSize: "25px",
              fontWeight: 600,
              background: "#0c4641",
              cursor: "pointer",
              textAlign: "center",
              borderRadius: "5px",
              marginRight: "1rem",
              padding: "2px 0",
            }}
            to="/cart"
          >
            {"< "}Back
          </Link>
          <div
            className="back-button"
            style={{
              width: "5em",
              fontSize: "25px",
              fontWeight: 600,
              background: "#0c4641",
              cursor: "pointer",
              textAlign: "center",
              borderRadius: "5px",
              marginRight: "1rem",
              padding: "2px 0",
            }}
            onClick={handelNext}
          >
            Next{"  >"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
