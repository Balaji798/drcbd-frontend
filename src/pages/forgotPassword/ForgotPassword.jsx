import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/ApiService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.newPassword !== user.confirmPassword) {
      alert("Password did not match");
    }
    const res = await changePassword({email: user.email,password: user.newPassword,})
    if (!res.status) {
      alert("Email is not valid");
    }
    if (res.status) {
      navigate("/sign-in");
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
      <form className="register-container" onSubmit={(e) => handleSubmit(e)}>
        <p>Email Address *</p>
        <input
          type="email"
          value={user.email}
          required
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <p>New Password *</p>
        <input
          type="password"
          required
          onChange={(e) => {
            setUser({ ...user, newPassword: e.target.value });
          }}
        />
        <p>Confirm Password *</p>
        <input
          type="password"
          required
          onChange={(e) => {
            setUser({ ...user, confirmPassword: e.target.value });
          }}
        />
        <input
          type="submit"
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
            cursor:'pointer'
          }}
          value="Confirm"
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
