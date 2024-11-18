import brand from "../../assets/aboutUs/brand-purpose.jpg";
import piles from "../../assets/aboutUs/s11-11507.png";
import brand1 from "../../assets/aboutUs/P1034199.jpg";
import brand2 from "../../assets/aboutUs/DSC02077.png";
import brand3 from "../../assets/aboutUs/botel.png";
import a1 from "../../assets/aboutUs/a1.png";
import a2 from "../../assets/aboutUs/a2.png";
import a3 from "../../assets/aboutUs/a3.png";
import a4 from "../../assets/aboutUs/a4.png";
import a5 from "../../assets/aboutUs/a5.png";
import a6 from "../../assets/aboutUs/a6.png";
import a7 from "../../assets/aboutUs/a7.png";
import operation1 from "../../assets/operation/1.png";
import operation2 from "../../assets/operation/2.png";
import operation3 from "../../assets/operation/3.png";
import "./purpose.css";

const BrandPurpose = () => {
  const data = [
    {
      title: "CANNABIS CULTIVATION",
      text: "Dr. CBD uses cutting edge technology in the cultivation of cannabis, hemp and kratom with full control over the production process. Controlling growth factors including light, humidity, temperature, minerals, as well as in pest protection and the prevention of microbial contamination. We also comply with GMP (Good Manufacturing Practice) and GAP (Good Agricultural Practice) standards, ensuring the efficacy of quality raw materials in the production of innovative medigrade products.",
      image: brand1,
    },
    {
      title: "MEDICAL GRADE EXTRACTION",
      text: "Dr. CBD has signed a memorandum of understanding with the Department of Medical Sciences on the research & development and extraction of cannabis and hemp for medicinal purposes. We, therefore, specialize in the analysis, testing and extraction of active substances in cannabis plants. We use Supercritical CO2 extraction equipment from the USA resulting in high purity extracts that are non contaminant, non-toxic and environmentally friendly. We also have a research and development facility for medical and health products allowing consumers to be confident in the quality and safety or raw materials in use by Dr. CBD.",
      image: brand2,
    },
    {
      title: "PRODUCTION",
      text: "Dr. CDB has signed a memorandum of understanding to promote and support the development of herbal medicines alongside cannabis, hemp and kratom. We prioritize our 3 main purposes in production, namely 1. Safety & Non-toxicity, meaning that the product must be safe for consumers and non toxic to the body. 2. Consistency being the standard in production for every batch and 3. Efficacy being the product effectiveness. We are committed to delivering what we say.",
      image: brand3,
    },
  ];
  const certificate = [a1, a2, a3, a4, a5, a6, a7];
  const operation = [
    {
      image: operation1,
      title: "Environment",
    },
    {
      image: operation2,
      title: "Social",
    },
    {
      image: operation3,
      title: "Governance",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          padding: "50px 0",
          maxWidth: "1150px",
          width: "100%",
          fontSize: "18px",
          lineHeight: "1.3em",
          color: "#005652",
        }}
      >
        <p
          style={{
            color: "#005652",
            fontSize: "35px",
            paddingBottom: 20,
            padding: "0 1rem 1rem",
          }}
        >
          {" "}
          Brand Purpose
        </p>
        <p style={{ padding: "0 1rem" }}>
          Watching epileptic and insomnia {"patients'"} struggles and obstacles
          in their daily lives, was what inspired us to do what we do.
          <br />
          CBD from hemp is their best and safest alternative and this was
          expressed in their eyes and faces, that return to normalcy, their
          lives and routine unhindered and their lives taking a turn for the
          better.
        </p>
        <img
          src={brand}
          style={{
            width: "100%",
            height: "30em",
            objectFit: "cover",
            margin: "1em 0",
          }}
          alt="/"
          loading="lazy"
        />
        <p style={{ padding: "0 1rem" }}>
          Incorporating the wisdom of Eastern and Western pharmacology, using
          extracts from hemp, kratom and traditional Thai herbs with Western
          modern science to enhance and elevate the overall quality of life,
          health and wellness of people and pets.
        </p>
        <p style={{ paddingTop: "20px", padding: "0 1rem" }}>
          Under the Royal initiative of King Rama IX who stated that{" "}
          {`" If people have deteriorated health, they will not be able to develop the nation. The country's most important resource are its citizens"`}
          , and we are inspired by that as patriots.
        </p>
      </div>
      <div className="purpose-container">
        <div className="purpose">
          <p className="purpose-title"> WHO WE ARE ?</p>
          <p className="purpose-para">
            Dr.CBD Group is a fully integrated medical grade cannabis, hemp and
            kratom business. Our operations include upstream (indoor
            cultivation), midstream (extraction) to downstream (medical grade
            products), focusing on quality, efficiency and purity with
            continuous research to create premium medical grade products.
          </p>
        </div>
        <img src={piles} className="purpose-img" alt="/" loading="lazy"/>
      </div>
      <div className="purpose-second">
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "20em",
                marginTop: index == 1 && "4em",
              }}
              alt="/"
              loading="lazy"
            />
            <h2 style={{ padding: "1em 0" }}>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <p
        className="linear-background"
        style={{
          color: "#fff",
          width: "100%",
          textAlign: "center",
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 100,
          fontSize: "40px",
          padding: "10px 0",
        }}
      >
        BUSINESS OPERATION
      </p>
      <div
        style={{
          display: "flex",
          padding: "3em 5em",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {operation.map((item, index) => (
          <div style={{ width: "33%", margin: "1em" }} key={index}>
            <img
              src={item.image}
              key={index}
              alt={item.image}
              style={{ width: "100%" }}
              loading="lazy"
            />
            <p style={{ textAlign: "center", fontSize: "20px" }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <p
        className="linear-background"
        style={{
          color: "#fff",
          width: "100%",
          textAlign: "center",
          fontFamily: "'Roboto Condensed', sans-serif",
          fontWeight: 100,
          fontSize: "40px",
          padding: "10px 0",
        }}
      >
        LICENSE
      </p>
      <div
        style={{
          background: "#e8eae1",
          display: "flex",
          flexWrap: "wrap",
          padding: "5em 3em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {certificate.map((item, index) => (
          <img
            src={item}
            key={index}
            alt={item}
            style={{ width: "20%", margin: "1em" }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPurpose;
