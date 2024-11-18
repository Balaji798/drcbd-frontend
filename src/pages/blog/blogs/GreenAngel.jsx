import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLine, FaTwitter, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../../../util/LanguageContext";
import { useNavigate } from "react-router-dom";
import greenAngel from "../../../assets/blog/greenAngel.png";
import greenAngel1 from "../../../assets/blog/greenAngel1.png";
import greenAngel2 from "../../../assets/blog/greenAngel2.jpg";
import greenAngel3 from "../../../assets/blog/greenAngel3.jpg";
import greenAngel4 from "../../../assets/blog/greenAngel4.jpg";
import greenAngel5 from "../../../assets/blog/greenAngel5.jpg";
import greenAngel6 from "../../../assets/blog/greenAngel6.jpg";

const GreenAngel = () => {
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
          <img src={greenAngel} alt="/" className="blog-img" loading="lazy"/>
          <button
            style={{
              maxWidth: "150px",
              width: "100%",
              padding: "5px 0",
              textAlign: "center",
            }}
            onClick={() => {
              navigate(
                `/product-detail/CBD-FACE/EARTHLAB%20CBD%20GREEN%20ANGEL%20HERBAL%20CREAM`,
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
      <div className="flex" style={{ width: "100%", padding: "2rem 0" }}>
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
            ? "Green Angel Cream: A Soothing Solution for Psoriasis and Seborrheic Dermatitis"
            : "Green Angel Cream: ทางเลือกใหม่เพื่อการดูแลผิวสำหรับผู้ป่วยโรคสะเก็ดเงินและผิวแพ้ง่าย"}
        </h4>
        <p>
          {language === "eng"
            ? "Psoriasis, a chronic autoimmune condition, can cause significant discomfort and self-consciousness due to its visible effects on the skin. It manifests as red, sicaly patches that can be itchy and painful, making daily life a challenge for those affected. While not a cure, effective skincare products can help manage symptoms and improve quality of life for individuals living with psoriasis."
            : "โรคสะเก็ดเงิน (Psoriasis) คืออะไร?โรคสะเก็ดเงินเป็นโรคผิวหนังเรื้อรังที่เกิดจากความผิดปกติของระบบภูมิคุ้มกัน ทำให้เซลล์ผิวหนังแบ่งตัวเร็วกว่าปกติ ส่งผลให้เกิดผื่นแดงหนา มีสะเก็ดสีเงินปกคลุม มักเกิดขึ้นบริเวณข้อศอก เข่า หนังศีรษะ และลำตัว ผู้ป่วยมักมีอาการคัน ผิวแห้ง และอาจมีอาการปวดหรือแสบร้อนร่วมด้วย"}
        </p>
        <img src={greenAngel1} alt="/" style={{ width: "100%" }} loading="lazy"/>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "Understanding Psoriasis"
            : "Green Angel Cream ช่วยอะไรได้บ้าง?"}
        </h4>
        <p>
          {language === "eng"
            ? "Psoriasis vulgaris, often referred to simply as plaque psoriasis, is the most common form of this condition. It's characterized by raised, inflamed, red patches of skin covered with silvery scales. These patches can appear anywhere on the body but are most commonly found on the elbows, knees, scalp, and lower back. Psoriasis is not contagious, but it can be triggered or worsened by various factors such as stress, infections, and certain medications."
            : "Green Angel Cream เป็นครีมบำรุงผิวที่พัฒนาขึ้นเป็นพิเศษสำหรับผู้ที่มีปัญหาผิวหนังอักเสบเรื้อรัง เช่น โรคสะเก็ดเงิน และโรคผิวหนังอื่นๆ เช่น โรคเซ็บเดิร์ม (Seborrheic dermatitis) ซึ่งเป็นโรคผิวหนังอักเสบเรื้อรังอีกชนิดหนึ่งที่ทำให้เกิดผื่นแดง คัน และมีสะเก็ด มักเกิดขึ้นบริเวณที่มีต่อมไขมันมาก เช่น หนังศีรษะ ใบหน้า หน้าอก และหลัง"}
        </p>
        <h4 style={{ padding: "5px 0" }}>
          {language === "eng"
            ? "Introducing Green Angel Cream"
            : "ขอแนะนำครีมแองเจิลเขียว"}
        </h4>
        <p>
          {language === "eng"
            ? "Green Angel Cream is a specially formulated skin care product designed to provide relief and nourishment to those struggling with psoriasis and seborrheic dermatitis. It harnesses the power of natural ingredients known for their soothing and healing properties, offering a gentle yet effective solution for irritated skin."
            : "Green Angel Cream เป็นผลิตภัณฑ์ดูแลผิวสูตรพิเศษที่ออกแบบมาเพื่อให้การบรรเทาและการบำรุงแก่ผู้ที่ดิ้นรนกับโรคสะเก็ดเงินและโรคผิวหนัง seborrheic โดยใช้ประโยชน์จากพลังของส่วนผสมจากธรรมชาติที่ขึ้นชื่อในด้านคุณสมบัติผ่อนคลายและการรักษา มอบวิธีแก้ปัญหาที่อ่อนโยนแต่มีประสิทธิภาพสำหรับผิวที่ระคายเคือง"}
        </p>
        <div
          className="flex"
          style={{ width: "100%", padding: "2rem 0", flexWrap: "wrap" }}
        >
          <img
            src={greenAngel2}
            alt="/"
            style={{
              maxWidth: "500px",
              height: "350px",
              width: "100%",
              objectFit: "cover",
            }}
            loading="lazy"
          />
          <div style={{ maxWidth: "480px", width: "100%", paddingLeft: "5px" }}>
            <h3 style={{ padding: "10px 0 5px" }}>
              {language === "eng"
                ? "How Green Angel Cream Works"
                : "ยังไง Green Angel ครีม ได้ผล"}
            </h3>
            {language === "thi" && (
              <p style={{ fontWeight: "500" }}>
                This cream helps to alleviate the symptoms of psoriasis and
                seborrheic dermatitis through a multi-faceted approach:
              </p>
            )}
            <ul style={{ paddingLeft: "15px", paddingTop: "10px" }}>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Soothes Inflammation:"
                    : "ลดอาการคันและระคายเคือง: "}
                </span>
                {language === "eng"
                  ? "The carefully selected natural ingredients in Green Angel Cream work to calm inflammation, reducing the redness and discomfort associated with psoriasis."
                  : "สารสกัดจากธรรมชาติช่วยปลอบประโลมผิว ลดอาการคัน และระคายเคือง"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Moisturizes and Hydrates:"
                    : "ลดผื่นแดงและสะเก็ด: "}
                </span>
                {language === "eng"
                  ? "Psoriasis often leads to dry, flaky skin. Green Angel Cream provides deep hydration, helping to restore the skin's moisture barrier and prevent further irritation."
                  : "ช่วยลดการอักเสบและการสร้างเซลล์ผิวหนังที่มากเกินไป ทำให้ผื่นแดงและสะเก็ดลดลง"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Promotes Healing: "
                    : "เพิ่มความชุ่มชื้น: "}
                </span>
                {language === "eng"
                  ? "The cream's nourishing properties aid in the skin's natural healing process, encouraging the regeneration of healthy skin cells."
                  : "ช่วยเติมเต็มความชุ่มชื้นให้ผิว ทำให้ผิวไม่แห้งกร้าน"}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Reduces Scaling:"
                    : "เสริมสร้างเกราะป้องกันผิว: "}
                </span>
                {language === "eng"
                  ? "By softening and loosening the scales, Green Angel Cream can improve the appearance of the affected areas."
                  : "ช่วยฟื้นฟูผิวที่ถูกทำลาย และเสริมสร้างเกราะป้องกันผิวให้แข็งแรงขึ้น"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${greenAngel3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
                ? "Suitable for Sensitive Skin"
                : "Green Angel Cream ปลอดภัยและเหมาะสำหรับผิวแพ้ง่าย"}
            </h4>
            <p>
              {language === "eng"
                ? "Green Angel Cream is crafted with sensitive skin in mind. It's free from harsh chemicals, fragrances, and irritants that could potentially worsen psoriasis symptoms. This makes it a safe and gentle option for those with easily irritated skin."
                : "Green Angel Cream ปราศจากสารสเตียรอยด์ น้ำหอม และสารเคมีที่ก่อให้เกิดการระคายเคือง จึงเหมาะสำหรับผู้ที่มีผิวแพ้ง่าย และสามารถใช้ได้เป็นประจำอย่างต่อเนื่อง"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1000px", width: "100%", padding: "2rem 10px" }}>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "Incorporating Green Angel Cream into Your Routine"
            : "ผสมผสานครีม Green Angel เข้ากับกิจวัตรของคุณ"}
        </h4>
        <p style={{ paddingBottom: "20px" }}>
          {language === "eng"
            ? "For best results, apply Green Angel Cream to clean, dry skin twice daily. Gently massage the cream into the affected areas until fully absorbed. It can be used on the face and body, making it a versatile solution for managing psoriasis wherever it appears."
            : "เพื่อผลลัพธ์ที่ดีที่สุด ให้ใช้ Green Angel Cream กับผิวที่สะอาดและแห้งวันละสองครั้ง นวดครีมเบา ๆ ลงในบริเวณที่ได้รับผลกระทบจนดูดซึมได้เต็มที่ สามารถใช้บนใบหน้าและร่างกายได้ ทำให้เป็นทางเลือกที่หลากหลายในการจัดการกับโรคสะเก็ดเงินไม่ว่าจะปรากฏที่ใดก็ตาม"}
        </p>

        <p>
          {language === "eng"
            ? "Remember, managing psoriasis is a journey, and Green Angel Cream can be your trusted companion along the way. By incorporating it into your skincare routime, you can experience relief from the discomfort of psoriasis and enjoy healthier, more comfortable skin."
            : "โปรดจำไว้ว่าการจัดการโรคสะเก็ดเงินคือการเดินทาง และ Green Angel Cream สามารถเป็นเพื่อนที่คุณไว้วางใจได้ตลอดการเดินทาง เมื่อรวมไว้ในกิจวัตรการดูแลผิวของคุณ คุณจะสัมผัสได้ถึงการบรรเทาความรู้สึกไม่สบายจากโรคสะเก็ดเงิน และเพลิดเพลินกับผิวที่มีสุขภาพดีและสบายตัวมากขึ้น"}
        </p>
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
        <img src={greenAngel4} alt="/" className="image-style" loading="lazy"/>
        <img
          src={greenAngel6}
          alt="/"
          className="image-style-1"
          style={{height:'600px'}}
          loading="lazy"
        />
        <img src={greenAngel5} alt="/" className="image-style" loading="lazy"/>
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

export default GreenAngel;
