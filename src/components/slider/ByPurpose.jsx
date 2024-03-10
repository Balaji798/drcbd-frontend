import React from 'react'
import { Link } from 'react-router-dom'
import { affiliates } from './sliderData'

const ByPurpose = () => {
  return (
    <div className="product" style={{ background: "#000" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // maxWidth: "1300px",
            width: "100%",
          }}
        >
          <h1
            style={{ color: "#fff", paddingTop: "1.5em", textAlign: "center" }}
          >
            FIND YOUR CBD BY PURPOSE
          </h1>
          <div className="product-container-home">
            {affiliates.map((item, index) => (
              <Link
               to={`/cbd-by-purpose/${item?.link}`}
                className="home-product-item"
                style={{
                  backgroundImage: `url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginBottom: "0.3em",
                }}
                key={index}
              >
                <Link >
                  {item.title}
                </Link>
              </Link>
            ))}
          </div>
          <Link
            style={{
              fontWeight: "bold",
              margin: "20px 50px",
              padding: "10px",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              borderBottom: "1.5px solid #fff",
            }}
            to="/cbd-by-purpose"
          >
            SHOP ALL CBD PRODUCT
          </Link>
        </div>
      </div>
  )
}

export default ByPurpose