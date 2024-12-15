// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import sub from "../../assets/sub.png"
// import "./register.css";
// import { signup, verifyUserEmail } from "../../services/ApiService";

// const Register = () => {
//   const navigate = useNavigate();
//   const [login, setLogin] = useState(false);
//   const [email, setEmail] = useState(false);
//   const [verified, setVerified] = useState(false);
//   const [invalid, setInvalid] = useState(false);
//   const [fides, setFides] = useState(false);
//   const [otpValidation,setOtpValidation]=useState(false)
//   const [otp, setOtp] = useState("");
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handelSignUp = async () => {
//     try {
//       if (
//         user.fullName === "" ||
//         user.email === "" ||
//         user.password === "" ||
//         user.confirmPassword === ""
//       ) {
//         setFides(true);
//         return;
//       }
//       if (
//         !user?.email
//           ?.toLowerCase()
//           .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//           )
//       ) {
//         setEmail(true);
//         return;
//       }
//       if (user.password !== user.confirmPassword) {
//         return alert("Password did not match");
//       }
//       const response = await signup(user)

//       if(response.status){
//         setLogin(true);
//       }
//     } catch (error) {
//       console.log(error.message)
//       alert("Signup failed", error.message);
//     }
//   };

//   const verifyEmail = async () => {
//     if(otp=== ""){
//       setOtpValidation(true)
//       return
//     }
//     const res = await verifyUserEmail({otp:otp})
//     if (res.status) {
//       localStorage.setItem("token", res.token);
//     }
//     if (!res.status) {
//       setInvalid(true);
//     }
//     if (res.status === true) setVerified(true);
//   };
//   return (
//     <div
//       style={{
//         color: "#005652",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "5em 0",
//       }}
//     >
//       {login ? (
//         verified ? (
//           <>
//             <h1 style={{ fontSize: "50px", textAlign: "center" }}>
//               You Have Successfully
//               <br />
//               Registered !
//             </h1>
//             <img
//               src={sub}
//               alt="/"
//               style={{ width: "100%", objectFit: "contain", height: "20em" }}
//               loading="lazy"
//             />
//             <div style={{ color: "#99a79f", width: "35%" }}>
//               <button
//                 style={{
//                   marginTop: "1em",
//                   fontSize: "30px",
//                   textAlign: "center",
//                   width: "100%",
//                   padding: "10px",
//                   border: "none",
//                   background: "#0b4640",
//                   color: "#fff",
//                   fontWeight: "bold",
//                 }}
//                 onClick={() => {
//                   navigate("/");
//                   window.location.reload();
//                 }}
//               >
//                 Go Home
//               </button>
//             </div>
//           </>
//         ) : (
//           <div>
//             <h3 style={{ textTransform: "capitalize" }}>
//               {" "}
//               We have send an otp to your email please use that otp to verify
//               your email
//             </h3>
//             <p
//               style={{
//                 width: "35%",
//                 fontSize: "16px",
//                 padding: "0.7em 0",
//                 fontWeight: "bold",
//               }}
//             >
//               OTP(One Time Password)
//             </p>
//             <input
//               style={{
//                 width: "35%",
//                 padding: "5px",
//                 fontSize: 20,
//                 borderRadius: 10,
//                 border: "1px solid grey",
//               }}
//               value={otp}
//               onChange={(e) => {
//                 setOtp(e.target.value);
//                 setOtpValidation(false)
//               }}
//             />
//             {otpValidation && (
//               <p style={{ color: "red" }}>OTP required</p>
//             )}
//             {invalid && (
//               <p style={{ color: "red", paddingTop: 10 }}>Not a valid OTP</p>
//             )}
//             <button
//               style={{
//                 marginTop: "1em",
//                 fontSize: "30px",
//                 textAlign: "center",
//                 width: "100%",
//                 padding: "10px",
//                 border: "none",
//                 background: "#0b4640",
//                 color: "#fff",
//                 fontWeight: "bold",
//               }}
//               onClick={verifyEmail}
//             >
//               Verify Email
//             </button>
//           </div>
//         )
//       ) : (
//         <div className="register-container">
//           <h1>
//             <Link to="/sign-in" style={{ color: "#99a79f" }}>
//               Sign in |{" "}
//             </Link>
//             Register
//           </h1>
//           <p>User Name</p>
//           <input
//             onChange={(e) => {
//               setUser({ ...user, fullName: e.target.value });
//               setFides(false);
//             }}
//             required={true}
//           />
//           {fides && user.fullName === "" && (
//             <p style={{ color: "red" }}>User Name required</p>
//           )}
//           <p>Email Address</p>
//           <input
//             type="email"
//             onChange={(e) => {
//               setUser({ ...user, email: e.target.value });
//               setFides(false);
//             }}
//             required={true}
//           />
//           {email && <p style={{ color: "red" }}>Email is not valid</p>}
//           {fides && user.email === "" && (
//             <p style={{ color: "red" }}>Email required</p>
//           )}
//           <p>Password</p>
//           <input
//             type="password"
//             onChange={(e) => {
//               setUser({ ...user, password: e.target.value });
//               setFides(false);
//             }}
//             required={true}
//           />
//           {fides && user.password === "" && (
//             <p style={{ color: "red" }}>Password required</p>
//           )}

//           <p>Confirm Password</p>
//           <input
//             type="password"
//             onChange={(e) => {
//               setUser({ ...user, confirmPassword: e.target.value });
//               setFides(false);
//             }}
//             required={true}
//           />
//           {fides && user.confirmPassword === "" && (
//             <p style={{ color: "red" }}>Confirm Password required</p>
//           )}
//           <p
//             style={{ fontWeight: "500", lineHeight: "1.5em", fontSize: "20px" }}
//           >
//             Your personal data will be used to support your experience <br />
//             throughout this website, to manage access to your account,
//             <br />
//             and for other purposes described in our privacy policy
//           </p>
//           <button
//             style={{
//               marginTop: "1em",
//               fontSize: "30px",
//               textAlign: "center",
//               width: "35%",
//               padding: "10px",
//               border: "none",
//               background: "#0b4640",
//               color: "#fff",
//               fontWeight: "bold",
//             }}
//             onClick={handelSignUp}
//           >
//             Register
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Register;

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import sub from "../../assets/sub.png";
import "./register.css";
import {
  sendUserOtp,
  signup,
  verifyUserEmail,
} from "../../services/ApiService";

const Register = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [disable, setDisable] = useState(false);
  const [timer, setTimer] = useState(0); // Timer state
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateInputs = () => {
    if (
      !user.fullName ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
      setError("Invalid email address.");
      return false;
    }
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(user.password)) {
      setError(
        "Password must be at least 6 characters long, include an uppercase letter and a number."
      );
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    setError("");
    setDisable(true);
    if (!validateInputs()) return;

    try {
      const response = await signup(user);
      if (response.status) {
        setLogin(true);
        setDisable(false);
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError(`Signup failed: ${error.message}`);
    }
  };

  const handleVerifyEmail = async () => {
    setError("");
    setDisable(true);
    if (!otp) {
      setError("OTP is required.");
      return;
    }

    try {
      const response = await verifyUserEmail({ otp });
      if (response.status) {
        localStorage.removeItem('token');
        localStorage.setItem("token", response.token);
        setVerified(true);
        setDisable(false);
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError(`Failed to verify email: ${error.message}`);
    }
  };

  const resend_otp = async () => {
    try {
      setDisable(true);
      setTimer(60); // Start the 1-minute timer
      const res = await sendUserOtp(user);
      console.log(res);
      if (res) {
        setDisable(false);
      }
    } catch (error) {
      setError(`Failed to send otp: ${error.message}`);
    }
  };

  // Timer effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

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
      {login ? (
        verified ? (
          <>
            <h1 style={{ fontSize: "50px", textAlign: "center" }}>
              You Have Successfully Registered!
            </h1>
            <img
              src={sub}
              alt="/"
              style={{ width: "100%", objectFit: "contain", height: "20em" }}
              loading="lazy"
            />
            <div style={{ color: "#99a79f", width: "35%" }}>
              <button
                style={{
                  marginTop: "1em",
                  fontSize: "30px",
                  textAlign: "center",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "#0b4640",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  navigate("/");
                  window.location.reload();
                }}
              >
                Go Home
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ textTransform: "capitalize" }}>
              We have sent an OTP to your email. Please use it to verify your
              email.
            </h3>
            <p
              style={{
                width: "35%",
                fontSize: "16px",
                padding: "0.7em 0",
                fontWeight: "bold",
              }}
            >
              OTP (One Time Password)
            </p>
            <input
              style={{
                maxWidth: "300px",
                width: "100%",
                padding: "5px",
                fontSize: 20,
                borderRadius: 10,
                border: "1px solid grey",
              }}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              disabled={disable || timer > 0}
              style={{
                maxWidth: "200px",
                marginTop: "1.5em",
                fontSize: "16px",
                textAlign: "center",
                width: "100%",
                padding: "5px 10px",
                border: "1px solid #0b4640",
                color: "#0b4640",
                backgroundColor: "#fff",
                fontWeight: "bold",
              }}
              onClick={resend_otp}
            >
              Resend OTP {timer > 0 && `(${timer}s)`}
            </button>
            <p>or</p>
            <button
              disabled={disable}
              style={{
                maxWidth: "200px",
                marginTop: "0.5em",
                fontSize: "16px",
                textAlign: "center",
                width: "100%",
                padding: "5px 10px",
                border: "none",
                background: "#0b4640",
                color: "#fff",
                fontWeight: "bold",
              }}
              onClick={handleVerifyEmail}
            >
              
                          {disable? 'Loading...':'Verify Email'}
            </button>
          </div>
        )
      ) : (
        <div className="register-container">
          <h1>
            <Link to="/sign-in" style={{ color: "#99a79f" }}>
              Sign in |
            </Link>{" "}
            Register
          </h1>
          <p>User Name</p>
          <input
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <p>Email Address</p>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <p>Confirm Password</p>
          <input
            type="password"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            disabled={disable}
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
            onClick={handleSignUp}
          >
            {disable? 'Loading...':'Register'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
