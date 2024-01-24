import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

const Orders = () => {
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const getOrders = async () => {
      const res = await ApiService.getUserOrder();
      console.log(res.data);
      setOrderData(res.data);
    };
    getOrders();
  }, []);

  return (
    <div className="" style={{ padding: "2rem" }}>
      <h1
        style={{
          textAlign: "center",
          padding: "1rem 0 1.5rem",
          color: "#002b2a",
        }}
      >
        My Orders
      </h1>
      {orderData.length > 0 &&
        orderData?.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            {item.items.map((product, i) => (
              <div
                style={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid #000",
                  padding: "0.5rem 0.5rem 2rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      background: "#264043",
                      width: "8em",
                      height: "8em",
                    }}
                  >
                    <img
                      src={product.productId?.images[0]}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      alt="/"
                    />
                  </div>
                  <div style={{ paddingLeft: 10, height: "100%" }}>
                    <h4 style={{ paddingBottom: 10 }}>
                      {product.productId?.name}
                    </h4>

                    <h4 style={{ paddingBottom: 10 }}>
                      Quantity:- {product?.quantity}
                    </h4>
                  </div>
                </div>
                <div>
                  <h4 style={{ paddingBottom: 10 }}>
                    Total Price:- ฿
                    {product.productId?.price * product?.quantity}
                  </h4>
                  <h5>Delivery Time:- 24/12/2023</h5>
                </div>
                <div>
                  <h4
                    style={{ textTransform: "capitalize", paddingBottom: 20 }}
                  >
                    Order Status:-{" "}
                    {"Order " + item.status[item.status.length - 1].orderStatus}
                  </h4>
                  <Link
                    to={`/order-detail/${item._id}`}
                    className="buttonStyle"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Orders;
