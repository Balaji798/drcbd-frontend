 
import React, { useState, useEffect } from "react";
import SeeMore from "../SeeMore";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

const CartComponent = (props) => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      const res = await ApiService.getCart();
      setCartItem(res.data);
      console.log(res.data);
    };
    getCart();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "1em 4em",
          display: "flex",
          color: "#005652",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "55%" }}>
          {cartItem.items?.map((item) => (
            <div
              key={item.id}
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
                style={{
                  paddingLeft: "0.5em",
                  width: "85%",
                }}
              >
                <h2 style={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  {item?.productId?.name}
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h2 style={{ fontSize: "1em", fontWeight: "bold" }}>
                    {item?.productId?.category}
                  </h2>
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
                <h2 style={{ textAlign: "end", fontSize: "22px" }}>
                  PRICE-{item.productId.price} ฿
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "20%",
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
            <span style={{ fontSize: "2em" }}>{cartItem.totalPrice} ฿</span>
          </p>
          <button
            style={{
              fontSize: "1.5em",
              width: "80%",
              padding: "0.4em 0",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => props.setPosition(2)}
          >
            CHECK OUT
          </button>
          <Link
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
          </Link>
        </div>
      </div>
      {/* <div style={{ paddingTop: "3em" }}>
        <SeeMore />
      </div> */}
    </>
  );
};

export default CartComponent;
