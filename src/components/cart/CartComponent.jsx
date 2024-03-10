import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { getCart } from "../../state/actions/cartAction";
import './cart.css'

const CartComponent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeFromCart = async (productId) => {
    try {
      const user = localStorage.getItem("token");
      //await removeItemFromCart(dispatch,productId)
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json", // Set the content type to JSON
        },
      };
      await axios.post(
        "https://drcbd-backend-zgqu.onrender.com/cart/remove_item_from_cart",
        //https://drcbd-backend-zgqu.onrender.com
        { productId },
        config
      );
      
      await getCart(dispatch);
      return 
    } catch (err) {
      console.log(err.message);
    }
  };

  const handelNext = async () => {
    try {
      // const user = localStorage.getItem("token");
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user}`,
      //     "Content-Type": "application/json", // Set the content type to JSON
      //   },
      // };
      // const cartId = cart.cart._id;
      // const res = await axios.post(
      //   "https://drcbd-backend-zgqu.onrender.com/orders/place_order",
      //   //https://52.77.244.89:8080
      //   { cartId },
      //   config
      // );
      //if (res.data.status) {
        navigate("/order-address/" + cart.cart._id);
      //}
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {cart?.cart?.items?.length === 0 || cart?.cart==='' ? (
        <h1 style={{ padding: "2rem 0", textAlign: "center" }}>
          Cart is empty
        </h1>
      ) : (
        <div className="cart-container"
        >
          <div className="cart-items">
            {cart.cart?.items?.map((item) => (
              <div
                key={item?._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid",
                  padding: "1em 0",
                }}
              >
                <div
                  style={{
                    background: "#264043",
                    width: "8em",
                    height: "8em",
                  }}
                >
                  <img
                    src={item?.productId?.images[0]}
                    alt={item?.productId?.images[0]}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div
                  className="items-detail"
                >
                  <h2 style={{  }}>
                    {item?.productId?.name}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap:"wrap"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2 style={{ fontSize: "1em", fontWeight: "bold" }}>
                        {item?.productId?.category}
                      </h2>
                      <div
                        style={{ maxWidth: 100, fontSize: 16 ,borderRadius: '5px', backgroundColor:"#005652",color:'white', padding: '2.5px 5px' }}
                        onClick={() => removeFromCart(item?.productId?._id)}
                      >
                        Remove
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: "25px" }}>Quantity :</p>
                      {/* <div
                      style={{
                        fontSize: "65px",
                        paddingLeft: "0.2em",
                        paddingBottom: "0.1em",
                      }}
                    >
                      -
                    </div> */}
                      <p
                        style={{
                          padding: "0px 5px",
                          margin: "10px",
                          //border: "1px solid #005256",
                          fontSize: "30px",
                        }}
                      >
                        {item.quantity}
                      </p>
                      {/* <div style={{ fontSize: "40px" }}>+</div> */}
                    </div>
                  </div>
                  <h2 style={{fontSize: "22px" }} className='text-end'>
                    PRICE :- {item.itemPrice} ฿
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                width: "18rem",
                padding: "2em 0",
                marginLeft: "7em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  textAlign: "end",
                  width: "80%",
                  borderBottom: "1px solid",
                  fontSize: "2em",
                  paddingBottom: "0.5em",
                  fontWeight: 900,
                }}
              >
                Summary
              </h1>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.5em 0",
                }}
              >
                CART SUBTOTAL :-
                <span style={{ fontSize: "2em", marginLeft: "2px" }}>
                  {" "}
                  {cart.cart?.totalPrice} ฿
                </span>
              </p>
              <div className="checkOut-button" onClick={handelNext}>
                CHECK OUT
              </div>
              {/* <Link
        href="/paypal"
        style={{
          width: "80%",
          height: "3em",
          marginTop: "1em",
          background: "#f3f3f3",
          padding: "0.5em 1em",
        }}
       >
        <img
          src="./paypal.png"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
       </Link> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartComponent;
