import "./stories.css";
import { useLanguage } from "../../util/LanguageContext";
import logo from "../../assets/logo2-01.png";
import group from "../../assets/how-it-starts/group.jpg";
import scientist from "../../assets/how-it-starts/scientist.jpg";
import woman from "../../assets/how-it-starts/woman-scientist.jpg";
import companies2 from "../../assets/companies/2.png";
import companies3 from "../../assets/companies/3.png";
import companies4 from "../../assets/companies/4.png";
import companies5 from "../../assets/companies/EARTH-LAB.png";

const Stories = () => {
  const { language } = useLanguage();
  const onButtonClick1 = () => {
    const pdfUrl = "./Company Profile-ENG-FP.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Company Profile-ENG-FP.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const onButtonClick2 = () => {
  const pdfUrl = "./product catalog ENG_2023_smallest_20_07_23.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "product catalog ENG_2023_smallest_20_07_23.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  const howItStarted = [
    {
      image:scientist,
      year: "2019",
      title: "Exploration Year",
      para: "We started scientific work, research & development",
    },
    {
      image:woman,
      year: "2020",
      title: "Exploration Year",
      para: "We found real benefits from hemp & cannabis extracts",
    },
    {
      image: group,
      year: "2021-2022",
      title: "Developed & Innovated",
      para: 'We have innovated, formulated and developed medical products from from hemp, cannabis, kratom and other Thai herbs Fro the well-being of the people and to ..."Save Lives & Heal People"',
    },
  ];

  const followData = [
    { image: logo, name: "drcbdinnovation" },
    {
      image:companies3,
      name: "drkratombio",
    },
    {
      image:companies5,
      name: "earthlab.th",
    },
    {
      image:companies2,
      name: "vitalmediclinicofficial",
    },
    {
      image:companies4,
      name: "drpetcbd",
    },
  ];

  return (
    <>
      <div className="stories">
        <div className="stories-background">
          <div
            className="stories-container"
            style={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <div className="stories-container-childe2"
            >
              {howItStarted.map((item, index) => (
                <div
                  style={{ display: "flex", paddingBottom: "0.5rem" }}
                  key={index}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "8rem",
                      objectFit: "cover",
                      height: "8rem",
                    }}
                    alt="/"
                    loading="lazy"
                  />
                  <div style={{ paddingLeft: "0.5rem" }}>
                    <p>.{item.year}</p>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem" }}>{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="stories-container-childe3"
            />
            <div
              className="stories-container-childe1"
            >
              <div>
                <h1 style={{ fontSize: "2.6rem", paddingBottom: "3.4rem" }}>
                  {language==="eng"?'HOW IT STARTS':'มันเริ่มต้นอย่างไร'}
                </h1>
                <p style={{ fontWeight: 500 }}>
                  {language==="eng"?"mission CBD products have gained popularity due to their potential therapeutic benefits. While research is ongoing, CBD has shown promise in several areas, including:":"ผลิตภัณฑ์ CBD ภารกิจได้รับความนิยมเนื่องจากมีประโยชน์ในการรักษา ในขณะที่การวิจัยกำลังดำเนินอยู่ CBD ได้แสดงให้เห็นสัญญาณที่ดีในหลายด้าน ได้แก่:"}
                  <br />
                  {""}
                  <br />
                  {language==="eng"?'vision Pain Management: CBD may help alleviate chronic pain by interacting with receptors in the endocannabinoid system, reducing inflammation and influencing neurotransmitter activity.':'การจัดการความเจ็บปวด: CBD อาจช่วยบรรเทาอาการปวดเรื้อรังโดยการโต้ตอบกับตัวรับในระบบเอนโดแคนนาบินอยด์ ลดการอักเสบ และส่งผลต่อการทำงานของสารสื่อประสาท'}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  
                  alignItems: "center",
                  color: "#fff",
                }}
              >
              { /* <div className="stories-button">Affiliate</div>*/}
                <div className="stories-button" style={{marginRight:"1rem"}}>{language==="eng"?'About Us':'เกี่ยวกับเรา'}</div>
                <div className="stories-button">CBD {language==="eng"?"Products":"สินค้า"}</div>
              </div>
            </div>
          </div>
          <div
            className="stories-container profile-company"
            style={{ display: "flex", justifyContent: "space-between",flexWrap:"wrap" }}
          >
            <div
              className="company1"
            >
              <h1 style={{ fontSize: "3rem", paddingBottom: "2rem" }}>
                {language==="eng"?'COMPANY PROFILE':'ประวัติบริษัท'}
              </h1>
              <button className="stories-button-blue-gr" onClick={onButtonClick1}>
                {language==="eng"?'Download Company Profile':'ดาวน์โหลดประวัติบริษัท'}
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "3rem", paddingBottom: "2rem" }}>
                {language==="eng"?'PRODUCT CATALOG':'แคตตาล็อกสินค้า'}
              </h1>
              <button className="stories-button-blue-gr" onClick={onButtonClick2}>
                {language==="eng"?'Download Product Catalog':'ดาวน์โหลดแค็ตตาล็อกผลิตภัณฑ์'}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            background: "#012b2a",
            textAlign: "center",
            padding: "2rem 0",
          }}
        >
          <h1
            style={{ fontSize: "3rem", paddingBottom: "2rem", color: "#fff" }}
          >
            FOLLOW US
          </h1>
          <div
            className="composes-logo"
          >
            {followData.map((item, index) => (
              <div key={index}>
                <div>
                  <img src={item.image} style={{ width: "100%" }} alt="/" loading="lazy"/>
                </div>
                <p>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;