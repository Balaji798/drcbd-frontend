 import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OurCompanies = () => {
	const location = useLocation();

  const data = [
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/4.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/3.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/1.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/6.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/2.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/companies/5.png",
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
              />
            ))
            // : data[1].map((item, index) => (
            //     <div
            //       key={index}
            //       style={{ objectFit: "contain", width: "30%",color:"#005652",paddingTop:"10px",margin:"0 2em 1.5em  0" }}
            //     >
            //       <img
            //         src={item.image}
            //         alt={item}
            //         key={index}
            //         style={{ objectFit: "contain", width: "100%" }}
            //       />
            //       <p style={{fontWeight:"bold",fontSize:"25px",padding:"5px 0"}}>{item.name}</p>
            //       <p style={{fontSize:"20px",padding:"5px 0"}}>{item.designation}</p>
            //       <p style={{padding:"5px 0"}}>{item.about}</p>
            //     </div>
            //   ))}
          }
        </div>
      </div>
    </div>
  );
};

export default OurCompanies;
