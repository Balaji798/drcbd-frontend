import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import product from "../../assets/aboutUs/product.png";
import business from "../../assets/aboutUs/business.png"
import successful from "../../assets/aboutUs/successful.png";
import scan from "../../assets/scan.png";
import { FaPhone } from "react-icons/fa6";
import "./esteemed.css";

const OurEsteemed = () => {
  const esteemed = [
    {
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/esteemed-img/dd.png",
      title: "EXTRACTION SERVICE FOR HEMP",
      para: "DR CBD offers extraction service for hemp within an  international standard laboratory using cutting edge extraction technology.",
      option: [
        "Crude Oil",
        "CBD Isolate/Full/Broad Spectrum",
        "CBD Distillate",
        "CBD Nano Emulsion",
      ],
    },
    {
      image: product,
      title: "OEM",
      para: `Start a business under your own brand. We provide manufacture and branding service. Basically a "One Stop Service" for OEM, ODM, COA`,
      option: [
        "own you products anf formular from our experts.",
        "World-class production technology",
        "Logo, packaging and banners design serves",
        "FDA registration service and export certification documents",
        "Advice on building a brand Consultation on all marketing channels",
      ],
    },
    {
      image: business,
      title: "AFFILIATE PROGRAM",
      para: "Be our partner in expanding the business of marijuana, hemp and kratom.No requirements for delivery. Sign up for free and enjoy the flexibility of working online wherever you are.",
    },
    {
      image: successful,
      title: "DISTRIBUTOR",
      para: "We welcome partnership whether it's through consignment, agent/distributors or drop shipping without having to stock or deliver products yourself. We welcome partners both domestic and international, to join us in this exiting phase of growth. Our products have all been Thai FDA-approved",
    },
  ];
  const socialMedia = [
    {
      title: "@drcbdinnovation",
      link: "/brand-purpose",
      icon: <BsFacebook size={35} />,
    },
    {
      title: "www.drcbdgroup.com",
      link: "/our-leadership",
      icon: <AiOutlineGlobal size={35} />,
    },
    {
      title: "@drcbdinnovation",
      link: "/our-companies",
      icon: <SlSocialInstagram size={35} />,
    },
    {
      title: "+66 65 141 6999",
      link: "/join-our-esteemed",
      icon: (
        <FaPhone size={35}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        //paddingTop:"4rem"
      }}
    >
      <div className="esteemed">
        <p
          style={{
            color: "#005652",
            fontSize: "40px",
            position: "absolute",
            left: "5em",
            top: "7em",
          }}
        >
          JOIN OUR
        </p>
        <p
          style={{
            color: "#005652",
            fontSize: "40px",
            position: "absolute",
            left: "5em",
            top: "8.5em",
          }}
        >
          ESTEEMED COMPANY
        </p>
      </div>
      {esteemed.map((item, index) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: index % 2 !==0 ? "#e8eae1" : "#fff",
            padding:"1rem"
          }}
          className="estimate"
          key={index}
        >
          <div
            style={{
              maxWidth: "1000px",
              width:'100%',
              display: "flex",
              justifyContent:"space-between",
              alignItems: "center",
              flexWrap:"wrap",
              flexDirection: index % 2 !==0 ? "row-reverse" : "row",
              borderBottom: "5px solid #005652",
            }}
          > 
            <div style={{maxWidth:'500px'}}>
              <p style={{ fontSize: "25px", width: "63%", padding: "1em 0" }}>
                {item.title}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  width: "60%",
                  paddingBottom: "1em",
                  lineHeight: "1.2em",
                }}
              >
                {item.para}
              </p>
              {item.option?.map((opt, i) => (
                <div key={i} style={{ paddingLeft: "10px" }}>
                  <p>{opt}</p>
                </div>
              ))}
            </div>
            <img
              src={item.image}
              className="esteemed-container"
              alt="/"
              loading="lazy"
            />
          </div>
        </div>
      ))}
      <div className="scanner-container center">
        <div style={{maxWidth:'1000px',width:'100%'}}>
          <div style={{maxWidth:'700px',width:'100%'}}>
            <p
              style={{
                fontSize: "35px",
              }}
            >
              Contact Us
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {socialMedia.map((item, index) => (
                <div
                  style={{
                    
                  }}
                  className="scanner-item"
                  key={index}
                >
                  {item.icon}
                  <p
                    style={{
                      fontSize: "24px",
                      marginLeft: "10px",
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{maxWidth:'200px',width:'100%'}}>
            <p
              style={{
                background: "#187a7f",
                color: "#fff",
                textAlign: "center",
                marginBottom: "5px",
                fontSize: "30px",
                borderRadius: "5px",
              }}
            >
              SCAN ME
            </p>
            <div
              style={{
                padding: "10px",
                background: "#fff",
                borderRadius: "5px",
              }}
            >
              <img
                src={scan}
                style={{
                  width: "100%",
                  height: "10em",
                  objectFit: "contain",
                  background: "#fff",
                  
                }}
                alt="/"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEsteemed;
