import { footerData } from "../footerData";
import {Link} from "react-router-dom";
import logo from "../../assets/logo2-01.png"
import "./footer.css";
import { useLanguage } from "../../util/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
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
          src={logo}
          style={{ objectFit: "contain", height: "100%", maxWidth: "300px",width:"100%" }}
          alt={logo}
          loading="lazy"
        />
        <div className="footer-container">
          {footerData.map((item, index) => (
            <ul key={index}>
              <li>
                <span>{language==="eng"?item.engTitle:item.thiTitle}</span>
                <ul className="subMenu">
                  {item.subMenu.map((sub, i) => (
                    <li style={{ alignItems: "center", display: "flex" }} key={i}>
                      <div style={{ marginRight: "0.2em" }}>{sub.icon}</div>
                      <Link to={sub.link} style={{ padding: "0.6em 0", cursor: "pointer" }}>
                        {language==="eng"?sub.engTitle:sub.thiTitle}
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
        <p>Copyright 2025 - Dr. CBD innovation Center | Made with Love & Care </p>
        <div style={{display:"flex", alignItems:"center"}}>
         <Link to="/privacy-policy">Privacy & Policy</Link>
         <p> / </p>
         <Link to="/terms-condition">Terms & condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
