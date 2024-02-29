import { footerData } from "../footerData";
import {Link} from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          paddingTop: "20px",
          color:"#000"
        }}
      >
        <img
          src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/logo2-01.png"
          style={{ objectFit: "contain", height: "100%", width: "300px" }}
          alt="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/logo2-01.png"
        />
        <div className="footer-container">
          {footerData.map((item, index) => (
            <ul key={index}>
              <li>
                <span>{item.title}</span>
                <ul className="subMenu">
                  {item.subMenu.map((sub, i) => (
                    <li style={{ alignItems: "center", display: "flex" }} key={i}>
                      <div style={{ marginRight: "0.2em" }}>{sub.icon}</div>
                      <Link to={sub.link} style={{ padding: "0.6em 0", cursor: "pointer" }}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="second-footer-container">
        <p>DISCLAIMER</p>
        <p>Copyright 2024 - Dr. CBD innovation Center | Made with Love & Care</p>
      </div>
    </footer>
  );
};

export default Footer;
