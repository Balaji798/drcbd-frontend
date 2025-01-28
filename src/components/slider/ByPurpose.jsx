/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { affiliates } from './sliderData'

const ByPurpose = ({ language }) => {
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
            {language==="eng"?'FIND YOUR CBD BY PURPOSE':'ค้นหา CBD ของคุณตามวัตถุประสงค์'}
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
                  {language==="eng"?item.engTitle:item.thiTitle}
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
            {language==="eng"?'SHOP ALL CBD PRODUCT':'เลือกซื้อผลิตภัณฑ์ CBD ทั้งหมด'}
          </Link>
        </div>
      </div>
  )
}

export default ByPurpose