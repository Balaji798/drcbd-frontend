import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLine, FaTwitter, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../../../util/LanguageContext";
import { useNavigate } from "react-router-dom";
import whiteMask from "../../../assets/blog/whiteMask.png";
import whiteMask1 from "../../../assets/blog/whiteMask1.jpg";
import use from "../../../assets/blog/use.jpg";
import whiteMask2 from "../../../assets/blog/whiteMask2.jpg";
import whiteMask3 from "../../../assets/blog/whiteMask3.jpg";
import final_03 from "../../../assets/blog/final-03.jpg";

const WhiteMask = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  return (
    <div
      className="center"
      style={{
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#091c20",
          color: "#fff",
          padding: "3rem 10px 2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ maxWidth: "1200px", width: "100%" }}>BLOG</h1>
      </div>
      <div className="flex" style={{ width: "100%" }}>
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundColor: "#004b47",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img src={whiteMask} alt="/" className="blog-img" loading="lazy"/>
          <button
            style={{
              maxWidth: "150px",
              width: "100%",
              padding: "5px 0",
              textAlign: "center",
            }}
            onClick={() => {
              navigate(
                `/product-detail/CBD-FACE/EARTHLAB%20CBD%20WHITENING%20MASK`,
                {
                  state: { catName1: "CBD-FACE" },
                }
              );
            }}
          >
            BUY NOW
          </button>
        </div>
        <div
          style={{
            width: "300px",
            height: "100px",
            backgroundColor: "#004b47",
          }}
        />
      </div>
      <div className="flex" style={{ width: "100%", padding: "2rem 0px" }}>
        {" "}
        <div
          style={{
            width: "40%",
            height: "5px",
            backgroundColor: "#004b47",
          }}
        />
        <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
          Content / Product Description
        </p>
        <div
          style={{
            width: "40%",
            height: "5px",
            backgroundColor: "#004b47",
          }}
        />
      </div>
      <div style={{ maxWidth: "1000px", width: "100%", padding: "0 10px" }}>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "Achieve Glass Skin with Earth Lab Whitening Mask: The Ultimate Solution for Sensitive, Acne-Prone Skin"
            : "Earth Lab Whitening Mask: มาส์กหน้าใส ตัวช่วยผิวสวยใส สุขภาพดี ลดปัญหาสิว"}
        </h4>
        <p>
          {language === "eng"
            ? "Are you dreaming of flawless, radiant, glass skin but struggling with acne and sensitive skin? Look no further! Earth Lab Whitening Mask is your answer to achieving a smooth, clear complexion overnight."
            : "ใครกำลังมองหามาส์กหน้าที่ช่วยฟื้นบำรุงผิวให้สวยใส ลดปัญหาสิว และสามารถใช้ได้ทุกวัน ต้องลอง Earth Lab Whitening Mask มาส์กหน้าใสที่ตอบโจทย์ทุกปัญหาผิว!"}
        </p>
        {language === "thi" && (
          <h4 style={{ padding: "10px 0 5px" }}>
            Earth Lab Whitening Mask คืออะไร?
          </h4>
        )}
        <p>
          {language === ""
            ? "This revolutionary facial mask is specially formulated to cater to the needs of sensitive skin while effectively combating acne and promoting a brighter, more even skin tone."
            : "Earth Lab Whitening Mask เป็นมาส์กหน้าสูตรเข้มข้น ที่อุดมไปด้วยสารสกัดจากธรรมชาติ ช่วยบำรุงผิวหน้าให้ชุ่มชื้น กระจ่างใส ลดเลือนจุดด่างดำ และลดการอักเสบของสิว เหมาะสำหรับทุกสภาพผิว แม้ผิวบอบบางแพ้ง่าย"}
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${whiteMask1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          width: "100%",
          padding: "2rem 10px",
          objectFit: "cover",
        }}
        className="center"
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div style={{ maxWidth: "500px" }}>
            <h4 style={{ padding: "10px 0 5px" }}>
              {language === "eng"
                ? "Key Benefits:"
                : "คุณสมบัติเด่นของ Earth Lab Whitening Mask :"}
            </h4>
            <ul style={{ paddingLeft: "15px" }}>
              {language === "eng" ? (
                <li style={{ paddingBottom: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Soothes and Calms:{" "}
                  </span>
                  Infused with gentle yet powerful ingredients, this mask
                  soothes irritated skin and reduces redness, making it perfect
                  for those with sensitive skin types.
                </li>
              ) : (
                <li style={{ paddingBottom: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>ลดเลือนจุดด่างดำ: </span>
                  ช่วยลดเลือนจุดด่างดำ รอยสิว ฝ้า กระ
                  ให้ผิวหน้าดูสว่างกระจ่างใสขึ้น
                </li>
              )}
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Heals Acne Overnight:"
                    : "ลดการอักเสบของสิว: "}
                </span>
                {language === "eng"
                  ? "Say goodbye to pesky pimples! This mask works to heal acne overnight, reducing inflammation and preventing future breakouts."
                  : "ช่วยลดการอักเสบของสิว สิวอุดตัน สิวผด ทำให้สิวยุบตัวลงอย่างรวดเร็ว"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Brightens and Evens Skin Tone:"
                    : "บำรุงผิวให้ชุ่มชื้น: "}
                </span>
                {language === "eng"
                  ? "Unlock your skin's natural radiance with this brightening mask. It helps to fade acne scars, hyperpigmentation, and dark spots, revealing a more even and luminous complexion."
                  : "เติมความชุ่มชื้นให้ผิวอย่างล้ำลึก ทำให้ผิวเนียนนุ่ม น่าสัมผัส"}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Hydrates and Nourishes:"
                    : "ปลอบประโลมผิว: "}
                </span>
                {language === "eng"
                  ? "Packed with hydrating ingredients, this mask replenishes your skin's moisture barrier,leaving it supple, smooth and glowing."
                  : "ช่วยปลอบประโลมผิวที่ระคายเคืองจากแสงแดด มลภาวะ หรือการแพ้"}
              </li>
              {language === "thi" && (
                <li>
                  <span style={{ fontWeight: "bold" }}>ปรับสมดุลผิว:</span>
                  ช่วยปรับสมดุลผิวให้แข็งแรง สุขภาพดี
                </li>
              )}
              {language === "thi" && (
                <li>
                  <span style={{ fontWeight: "bold" }}>ผ่อนคลายผิว:</span>:
                  ให้ความรู้สึกผ่อนคลาย สบายผิวขณะมาส์ก
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${use})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          width: "100%",
          padding: "3rem 10px",
          objectFit: "cover",
        }}
        className="center"
      >
        <div
          className="flex"
          style={{
            maxWidth: "1000px",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <h4 style={{ padding: "10px 0 5px" }}>
              {language === "eng"
                ? "How to Use:"
                : "วิธีใช้ Earth Lab Whitening Mask:"}
            </h4>
            <p style={{ paddingBottom: "5px" }}>
              {language === "eng"
                ? "1.Cleanse your face thoroughly and pat dry."
                : "1. ทำความสะอาดผิวหน้าให้สะอาด"}
            </p>
            <p style={{ paddingBottom: "5px" }}>
              {language === "eng"
                ? "2.Apply the mask evenly over your face, ensuring it adheres properly."
                : "2.	ลอกแผ่นมาส์กออกจากซอง แล้ววางลงบนใบหน้าให้พอดี"}
            </p>
            <p style={{ paddingBottom: "5px" }}>
              {language === "eng"
                ? "3.Leave on for 15-20 minutes."
                : "3.	ทิ้งไว้ประมาณ 15-20 นาที"}
            </p>
            <p style={{ paddingBottom: "5px" }}>
              {language === "eng"
                ? "4. Remove the mask and gently massage any remaining essence into your skin."
                : "4.	นำแผ่นมาส์กออก แล้วนวดเบาๆ ให้เอสเซนส์ซึมเข้าสู่ผิว"}
            </p>
            <p>
              {language === "eng"
                ? "5.Follow up with your regular skincare routine."
                : "5.	ไม่ต้องล้างออก สามารถบำรุงผิวด้วยครีมบำรุงตัวอื่นๆ ต่อได้ทันที"}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex"
        style={{
          maxWidth: "1300px",
          width: "100%",
          padding: "2rem 10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{ maxWidth: "600px", width: "100%", paddingBottom: "10px" }}
        >
          <h3 style={{ padding: "10px 0 5px" }}>
            {language === "eng" ? "For Best Results:" : "เคล็ดลับเพิ่มเติม:"}
          </h3>
          <ul style={{ paddingLeft: "15px" }}>
            <li style={{ maxWidth: "500px", fontWeight: "500" }}>
              {language === "eng"
                ? "Use the mask 2-3 times a week for optimal results."
                : "สามารถใช้ Earth Lab Whitening Mask ได้ทุกวัน หรือ 2-3 ครั้งต่อสัปดาห์ ตามสภาพผิว"}
            </li>
            <li style={{ maxWidth: "500px", fontWeight: "500" }}>
              {language === "eng"
                ? "Combine with other Earth Lab skincare products for a complete regimen."
                : "สามารถใช้เป็นมาส์กก่อนนอน เพื่อให้ผิวได้รับการบำรุงอย่างเต็มที่ตลอดคืน"}
            </li>
            <li style={{ maxWidth: "500px", fontWeight: "500" }}>
              {language === "eng"
                ? "Always perform a patch test before using a new product, especially if you have sensitive skin."
                : "หากมีปัญหาสิวอักเสบ สามารถใช้มาส์กบริเวณที่เป็นสิวโดยเฉพาะ เพื่อช่วยลดการอักเสบได้อย่างรวดเร็ว"}
            </li>
          </ul>
          <h3 style={{ padding: "10px 0 5px" }}>
            {language === "eng"
              ? "Achieve Your Glass Skin Goals with Earth Lab Whitening Mask:"
              : "บรรลุเป้าหมายผิวกระจกของคุณด้วย Earth Lab Whitening Mask:"}
          </h3>
          <p style={{ maxWidth: "500px", fontWeight: "500" }}>
            {language === "eng"
              ? "Don't let acne or sensitive skin hold you back from achieving your skincare dreams. Earth Lab Whitening Mask is your secret weapon for a brighter, clearer, and healthier complexion. Say hello to glass skin and goodbye to blemishes with this must-have mask!"
              : " อย่าปล่อยให้สิวหรือผิวแพ้ง่ายเป็นอุปสรรคต่อการบรรลุความฝันในการดูแลผิวของคุณ Earth Lab Whitening Mask คืออาวุธลับของคุณเพื่อผิวที่กระจ่างใส กระจ่างใส และมีสุขภาพดีขึ้น สวัสดีผิวกระจกและลาฝ้าด้วยมาส์กที่ต้องมี!"}
          </p>
        </div>
        <img
          src={whiteMask2}
          alt="/"
          style={{
            maxWidth: "500px",
            width: "100%",
            objectFit: "cover",
            height: "340px",
          }}
          loading="lazy"
        />
      </div>
      <div
        className="flex"
        style={{
          maxWidth: "1200px",
          width: "100%",
          padding: "20px 10px",
          flexWrap: "wrap",
        }}
      >
        <img src={final_03} alt="/" className="image-style" loading="lazy"/>
        <img
          src={whiteMask3}
          alt="/"
          className="image-style-1"
          loading="lazy"
        />
        <img src={final_03} alt="/" className="image-style" loading="lazy"/>
      </div>
      <div
        className="flex"
        style={{
          maxWidth: "1100px",
          width: "100%",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          padding: "15px 0",
          color: "#2e5353",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <h3>PLEASE SHARE THIS</h3>
        <div className="flex">
          <BiLogoFacebookSquare size={26} style={{ marginRight: "10px" }} />
          <FaTwitter size={26} style={{ marginRight: "10px" }} />
          <FaLine size={26} style={{ marginRight: "10px" }} />
          <GrInstagram size={24} style={{ marginRight: "10px" }} />
          <FaYoutube size={28} style={{ marginRight: "10px" }} />
          <FaTiktok size={24} />
        </div>
      </div>
    </div>
  );
};

export default WhiteMask;
