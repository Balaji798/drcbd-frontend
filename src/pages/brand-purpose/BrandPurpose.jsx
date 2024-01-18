import React from "react";
import "./purpose.css";

const BrandPurpose = () => {
  const data = [
    {
      title: "CANNABIS CULTIVATION",
      text: "Dr. CBD uses cutting edge technologyin the cultivation of cannabis, hempand kratom with full control over the production process. Controlling growth factors including light,humidity, temperature, minerals, as well as in pest protection and the prevention of microbial contarination. We also comply with GMP (Good Manufacturing Practice)and GAP (Good Agricultural Practice) standards, ensuring the efficacy of quality raw materials in the production of innovative medigrade products",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/brandp/P1034199.jpg",
    },
    {
      title: "MEDICAL GRADE EXTRACTION",
      text: " Dr. CBD has signed a memorandum of understanding with the Department of Medical Sciences on the research & development and extraction of cannabis and hemp for medicinal purposes. We, therefore, specialize in the analysis, testing and extraction of active substances in cannabis plants.We use Supercritical CO2 extraction equipment from the USA resulting in high purity extracts that are non contaminant, non-toxic and environmentally friendly. We also have a research and development facility for medical and health products allowing consumers to be confident in the quality and safety or row materials in use by Dr. CBD",
      image:
        "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/brandp/DSC02077.png",
    },
    {
      title: "PRODUCTION",
      text: "Dr. CDB has signed a memorandum of understanding to promote and support the development of herbal medicines alongside cannabis, hemp and kratom. We prioritize our 3 main purposes in production, namely 1. Safety & Toxicity, meaning that the product must be safe for consumers and non toxic to the body. 2. Consistency being the standard in production for every batch and 3. Efficacy being the product effectiveness. We are committed to delivering what we say",
      image: "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/brandp/4.png",
    },
  ];
  const certificate = [
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a1.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a2.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a3.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a4.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a5.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a6.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/certificate/a7.png",
  ];
  const operation = [
    {
      image: "./operation/1.png",
      title: "Environment",
    },
    {
      image: "./operation/2.png",
      title: "Social",
    },
    {
      image: "./operation/3.png",
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
        paddingTop:"4rem"
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
            padding:"0 1rem"
          }}
        >
          {" "}
          Brand Purpose
        </p>
        <p style={{padding:"0 1rem"}}>
          Immediately when we saw Epilepsy Patients and Insomnia Patients which
          are major problems and obstacles to their daily lives that they have
          to endure no matter how much suffering and distress. we found that the
          problems were very painful, and we thought we had to do something,
          including exploring the power of cannabis, marijuana, and kratom, as
          the best alternative. Because we want to see their faces and eyes
          improve and hope to return to a more normal life. That is our ultimate
          happiness because we believe that their quality of life must surely
          improve. Their lives cannot be the same as before
        </p>
        <img
          src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/images/brand-purpose.jpg"
          style={{
            width: "100%",
            height: "30em",
            objectFit: "cover",
            margin: "1em 0",
          }}
          alt="/"
        />
        <p style={{padding:"0 1rem"}}>
          To enhance and elevate the overall quality of life, including the
          health and beauty of people and pets (dogs & cats) better with Eastern
          and Western medical science. Using raw materials, extracts from
          marijuana, hemp, kratom, and Thai herbs. Using science and modern
          medicine that is Evidence-Based and Preventive Healthcare
        </p>
        <p style={{ paddingTop: "10px",padding:"0 1rem" }}>
          Along with the royal initiative of King Rama IX that… “If people have
          deteriorated health, they will not be able to develop the nation.
          Because the country's most important resource is its citizens” That's
          what sparks and inspires us to do these things.
        </p>
      </div>
      <div className="purpose-container">
        <div className="purpose">
          <p className="purpose-title"> WHO WE ARE ?</p>
          <p className="purpose-para">
            Dr.CBD Group is a fully integrated medical grade Cannabis, Hemp and
            Kratom business. Our operations include upstream (Indoor
            cultivation), midstream (extraction) to downstream (medical grade
            products), focusing on quality, efficiency and purity with
            continuous research to create premium medical grade products.
          </p>
        </div>
        <img
          src="https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/images/s11-11507.png"
          className="purpose-img"
          alt="/"
        />
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
          <div style={{ width: "33%", margin: "1em" }}>
            <img
              src={item.image}
              key={index}
              alt={item.image}
              style={{ width: "100%" }}
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
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPurpose;
