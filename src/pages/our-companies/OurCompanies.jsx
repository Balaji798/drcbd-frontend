import { useLocation } from "react-router-dom";

import companies2 from "../../assets/companies/2.png";
import companies3 from "../../assets/companies/3.png";
import companies4 from "../../assets/companies/4.png";
import companies5 from "../../assets/companies/EARTH-LAB.png";

const OurCompanies = () => {
	const location = useLocation();

  const data = [
    companies4,
    companies3,
    companies5,
    companies2,
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <div style={{ maxWidth: "1150px", width: "100%" }}>
        <p
          style={{
            textAlign: "center",
            color: "#005652",
            fontSize: "35px",
            textTransform: "capitalize",
            paddingBottom: "20px",
          }}
        >
          {location.pathname.slice(1).split("-").join(" ")}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {
            data.map((item, index) => (
              <img
                src={item}
                alt={item}
                key={index}
                style={{ objectFit: "contain", width: "30%", height: "15em" }}
                loading="lazy"
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default OurCompanies;
