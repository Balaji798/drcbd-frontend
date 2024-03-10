import React from 'react'
import { Link } from 'react-router-dom'
import { product } from './sliderData'

const ByCategory = () => {
  return (
    <div className="product">
        <div className="all-background">
          <div
            style={{ maxWidth: "1100px", width: "100%", paddingTop: "2rem" }}
          >
            <h1 style={{ textAlign: "center" }}>FIND YOUR CBD BY CATEGORY</h1>
            <div className="product-container-home">
              {product.map((item, index) => (
                <Link
                to={`/cbd-by-category/${item.link}`}
                  className="home-product-item home-product-top"
                  style={{ backgroundImage: `url(${item.background})` }}
                  key={index}
                >
                  <Link>
                    {item.title}
                  </Link>
                </Link>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to="/cbd-by-category"
                style={{
                  textAlign: "center",
                  color: "#2d3d41",
                  fontSize: "35px",
                  borderBottom: "2px solid",
                }}
              >
                SHOP ALL CBD PRODUCTS
              </Link>
              <p
                style={{
                  fontSize: 16,
                  padding: "1em 0 2em",
                  textAlign: "center",
                  fontWeight: "500",
                  lineHeight: "1.5em",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                CBD, short for cannabidiol, has gained significant popularity in
                recent years as a natural remedy for various ailments. Derived
                from the cannabis plant, CBD is a non-intoxicating compound that
                offers potential therapeutic benefits without the psychoactive
                effects commonly associated with its counterpart, THC. As a
                result, CBD products have emerged as a diverse range of remedies
                and wellness options for individuals seeking alternative
                solutions. This article aims to provide an in-depth exploration
                of CBD products, including their origins, uses, types, and
                potential benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ByCategory