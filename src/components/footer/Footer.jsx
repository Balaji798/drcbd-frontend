import { footerData } from "../footerData";
import {Link} from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          paddingTop: "20px",
          color:"#000"
        }}
      >
        <img
          src="../logo2-01.png"
          style={{ objectFit: "contain", height: "100%", width: "300px" }}
        />
        <div className="footer-container">
          {footerData.map((item, index) => (
            <ul>
              <li>
                <span>{item.title}</span>
                <ul className="subMenu">
                  {item.subMenu.map((sub, i) => (
                    <li style={{ alignItems: "center", display: "flex" }}>
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
        <p>Copyright 2023 - Dr. CBD innovation Center | ade with Love & Care</p>
      </div>
    </footer>
  );
};

export default Footer;
