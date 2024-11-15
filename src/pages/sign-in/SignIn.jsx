import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { authSuccessful, updateUser } from "../../state/actions/authAction";
import { login, sendUserOtp, verifyUserEmail } from "../../services/ApiService";

const SignIn = () => {
  //const {data:session} = useSession();
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState(false);
  const [verify, setVerify] = useState(false);
  const [password, setPassword] = useState(false);
  const [fides, setFides] = useState(false);
  const [email, setEmail] = useState(false);
  const [otpValidation,setOtpValidation]=useState(false)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // if(session){
  //    return <div>Welcome {session.user.email}</div>
  // }else{

  // }]
  const verifyEmail = async () => {
    if(otp=== ""){
      setOtpValidation(true)
      return
    }
    const res = await verifyUserEmail({otp:otp});
    if (!res.data.status) {
      setToken(true);
    }
    if (res.data.status === true) {
      localStorage.setItem("token", res.data.token);
      await updateUser(dispatch);
      navigate("/");
    }
  };
  const sendOtp = async () => {
    try {
      const res = await sendUserOtp(user);
      if (res) setVerify(true);
    } catch (err) {
      alert(err);
    }
  };

  const handelLogin = async () => {
    const userToken = localStorage.getItem("token");
    if (
      user.email === "" ||
      user.password === ""
    ) {
      setFides(true);
      return;
    }
    if (
      !user?.email
        ?.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmail(true);
      return;
    }
    const response = await login(user)
    if (response?.email) {
      if (userToken) {
        localStorage.removeItem("token");
      }
      setEmail(true);
      return;
    } else if (response?.password) {
      if (userToken) {
        localStorage.removeItem("token");
      }
      setPassword(true);
      return;
    }
    await authSuccessful(dispatch, response.user);
    if (!response?.user?.emailVerified) {
      setOpen(true);
    } else {
      if (user) {
        localStorage.removeItem("token");
      }
      localStorage.setItem("token", response?.token);
      await updateUser(dispatch);
      navigate("/");
      window.location.reload();
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
      {open ? (
        verify ? (
          <div className="register-container">
            <h3 style={{ textTransform: "capitalize" }}>
              {" "}
              We have send an otp to your email please use that otp to verify
              your email
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "16px",
                padding: "0.7em 0",
                fontWeight: "bold",
              }}
            >
              OTP(One Time Password)
            </p>
            <input
              style={{
                width: "50%",
                padding: "5px",
                fontSize: 15,
                borderRadius: 10,
                border: "1px solid grey",
              }}
              onChange={(e) => {
                setOtp(e.target.value);
                setOtpValidation(false)
              }}
            />
            {otpValidation && (
              <p style={{ color: "red" }}>OTP required</p>
            )}
            {token && (
              <p style={{ color: "red", paddingTop: 10 }}>Not a valid OTP</p>
            )}
            <button
              style={{ marginTop: "1rem", maxWidth: 200 }}
              onClick={verifyEmail}
            >
              Verify Email
            </button>
          </div>
        ) : (
          <div className="register-container">
            <p>Your email is not verified please Verify your email first</p>
            <button onClick={sendOtp}>Verify</button>
          </div>
        )
      ) : (
        <div className="register-container">
          <h1>
            Sign in |{" "}
            <Link to="/register" style={{ color: "#99a79f" }}>
              Register
            </Link>
          </h1>
          <p> Email Address *</p>
          <input
            type="email"
            value={user.email}
            required
            onChange={(e) => {
              setEmail(false);
              setUser({ ...user, email: e.target.value });
              setFides(false)
            }}
          />
          {fides && user.email === "" && (
            <p style={{ color: "red" }}>Email required</p>
          )}
          {email && (
            <p style={{ color: "red" }}>
              Email is not valid or you are not Signup
            </p>
          )}
          <p>Password</p>
          <input
            type="password"
            required
            onChange={(e) => {
              setPassword(false);
              setUser({ ...user, password: e.target.value });
              setFides(false)
            }}
          />
          {fides && user.password === "" && (
            <p style={{ color: "red" }}>Password required</p>
          )}
          {password && <p style={{ color: "red" }}>Password is not valid</p>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link to="/forgot-password" style={{ fontSize: 20 }}>
              Forgot your password
            </Link>
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
              cursor: "pointer",
            }}
            onClick={handelLogin}
          >
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
