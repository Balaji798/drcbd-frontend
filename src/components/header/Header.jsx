import { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";
import cbd from "../../assets/drcbd.png";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/ApiService";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useLanguage } from "../../util/LanguageContext";

// eslint-disable-next-line react/prop-types
const Header = ({ openNav, setOpenNav }) => {
  const { product } = useSelector((state) => state.product);
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef();
  const [isHovered, setIsHover] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(false);
  const [search, setSearch] = useState("");
  const { cart } = useSelector((state) => state.cart);
  const [cartCount,setCartCount] = useState(0);
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  useEffect(() => {
    const gatUserRes = async () => {
      try {
        await getUser();
        setCartCount(cart && !isUserLogIn
          ? cart?.items?.length
          : "0")
        setUserLogIn(false)
      } catch (err) {
        //alert(err.response);
        if(err.status === 401){
          setUserLogIn(true);
        }

      }
    };
    gatUserRes();
  }, [cart,isUserLogIn]);
  const handelNext = async (type) => {
    try {
      if (isUserLogIn) {
        setOpen(true);
      }
      if (!user) {
        setOpen(true);
      } else {
        const res = await getUser();
        console.log(res);
        res?.user?.emailVerified ? navigate(type) : setOpen(true);
      }
    } catch (err) {
      alert(err);
    }
  };

  const handelSearch = () => {};
  return (
    <>
      {open && <Modal setOpen={setOpen} user={user} />}
      <header>
        <div className="header-container">
          <div className="sign-profile">
            <div
              style={{ marginRight: "2px",cursor:"pointer" }}
              onClick={() => changeLanguage("eng")}
            >
           
              EN
            </div>
            /
            <div
              style={{ marginLeft: "2px",cursor:"pointer" }}
              onClick={() => changeLanguage("thi")}
            >
              TH |{" "}
            </div>
            <Link to="/sign-in" style={{ marginLeft: "2px" }} className="sig">
              Sign In /
            </Link>
            <Link to="/register" style={{ marginLeft: "2px" }} className="sig"
            >
              Sign Up |
            </Link>
            <p
              style={{ cursor: "pointer", marginLeft: "2px" }}
              onClick={() => {
                handelNext("/my-orders");
              }}
              className="ord"
            >
              {" "}
              My Orders
            </p>
          </div>
          <div className="cart-profile" style={{}}>
            <div className="search-bar">
              <BsSearch
                color="#000"
                style={{ marginRight: "0.5em", cursor: "pointer" }}
                size={16}
                onClick={handelSearch}
              />
              <input
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  if (!isHovered) {
                    setIsHover(false);
                  }
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                style={{
                  outline: "none",
                  width: "100%",
                  fontSize: 18,
                  border: "none",
                  background: "#fff",
                }}
                ref={inputRef}
              />
            </div>
            {search !== "" && isFocus ? (
              <div className="searchQuery" style={{ display: "box" }}>
                {product.map((item, index) => {
                  const isMatch =
                    language === "eng"
                      ? item?.eng?.name?.toLowerCase()
                          .indexOf(search.toLowerCase()) > -1
                      : item?.thi?.name?.toLowerCase()
                          .indexOf(search.toLowerCase()) > -1;
                          const catLength = language==="eng"?item?.eng?.categoryName.length > 0:item?.thi?.categoryName.length > 0
                  return (
                    <ul style={{ listStyle: "none" }} key={index}>
                      {isMatch && (
                        <li
                          style={{
                            padding: "2.5px 0",
                            fontSize: 13,
                            fontWeight: "bold",
                            borderBottom: "1px solid",
                          }}
                          key={index}
                          onClick={() => setSearch("")}
                        >
                          <Link
                            to={
                              `/product-detail/${
                                catLength > 0
                                  ? item?.eng?.categoryName[0]
                                  : item?.eng?.purposeName[0]
                              }/` + item?.eng?.name
                            }
                          >
                            {language === "eng"
                              ? item?.eng?.name
                              : item?.thi?.name}
                          </Link>
                        </li>
                      )}
                    </ul>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
            {/* <BsSearch size={25} 
            onClick={()=>{setOpenSearch(!openSearch)}} className="search-icon"/>*/}
            <div
              style={{
                color: "#fff",
                marginLeft: "1em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/cart")}
            >
              <div className="cart-item">
                <p style={{ marginLeft: "2.5px" }}>
                  {cartCount}
                </p>
              </div>
            </div>
            <div
              style={{
                color: "#fff",
                marginLeft: "1em",
                cursor: "pointer",
              }}
              onClick={() => handelNext("/profile")}
            >
              <FaUserCircle style={{ fontSize: "25px", alignSelf: "end" }} />
            </div>
            <a href="https://drcbdgroup.com/" className="old-web">
              <img
                src={cbd}
                style={{
                  objectFit: "cover",
                  height: "25px",
                  width: "80px",
                  top: 20,
                  left: "45%",
                  marginLeft: "0.5rem",
                }}
                alt={""}
                loading="lazy"
              />
            </a>
            <div
              className="hamburger-menu-container"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              {openNav ? <RxCross2 size={25} /> : <HiBars3 />}
            </div>
          </div>
        </div>
        <Link
          to="/"
          onClick={() => {
            setOpenNav(false);
          }}
        >
          <img
            src={cbd}
            style={{
              objectFit: "cover",
              height: "45px",
              width: "125px",
              top: 20,
              left: "45%",
            }}
            alt={""}
            loading="lazy"
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
