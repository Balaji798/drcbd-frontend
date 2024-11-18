import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLine, FaTwitter, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../../../util/LanguageContext";
import { useNavigate } from "react-router-dom";
import ampoule from "../../../assets/blog/ampoule.png";
import serum from "../../../assets/blog/serum.jpg";
import ampoule1 from "../../../assets/blog/ampoule1.jpg";
import ampoule2 from "../../../assets/blog/ampoule2.jpg";
import ampoule3 from "../../../assets/blog/ampoule-03.jpg";
import ampoule_1 from "../../../assets/blog/ampoule-02.jpg";
import ampoule_2 from "../../../assets/blog/ampoule-01.jpg";

const AmpoulSerum = () => {
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
          <img src={ampoule} alt="/" className="blog-img" loading="lazy"/>
          <button
            style={{
              maxWidth: "150px",
              width: "100%",
              padding: "5px 0",
              textAlign: "center",
            }}
            onClick={() => {
              navigate(
                `/product-detail/cbd%20face/EARTHLAB%20CBD%20AMPOULE%20SERUM`,
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
            ? "Achieve Glass Skin with CBD Ampoule Serum: The Secret Weapon for Sensitive, Acne-Prone Skin"
            : "CBD Ampoule Serum: เคล็ดลับผิวหน้าเด้ง เด็ก อ่อนเยาว์ ลดเลือนริ้วรอย"}
        </h4>
        <p>
          {language === "eng"
            ? `Dreaming of that flawless, radiant "glass skin" complexion? Look no further than CBD Ampoule - the revolutionary skincare solution that's transforming the way we approach sensitive, acne-prone skin.`
            : "ในยุคที่ทุกคนต่างมองหาเคล็ดลับผิวสวยอ่อนเยาว์ CBD Ampoule Serum กำลังเป็นที่จับตามองในวงการสกินแคร์ ด้วยคุณสมบัติอันน่าทึ่งจากสารสกัด CBD ที่ช่วยฟื้นฟูผิว ลดเลือนริ้วรอย และมอบความชุ่มชื้นให้ผิวอย่างล้ำลึก ทำให้ผิวหน้ากลับมาเด้ง เด็ก ดูสุขภาพดีอีกครั้ง"}
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${serum})`,
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
                ? "What is CBD Ampoule Serum?"
                : "CBD Ampoule Serum คืออะไร?"}
            </h4>
            <p>
              {language === "eng"
                ? "CBD Ampoule Serum is a potent serum, encased in a small, single-use glass vial, that harnesses the power of cannabidiol (CBD) to transform your skin. This miracle ingredient is renowned for its anti-inflammatory and antioxidant properties, making it a game-changer for those struggling with acne, redness, and sensitivity."
                : "CBD Ampoule Serum คือเซรั่มบำรุงผิวหน้าสูตรเข้มข้น ที่มีส่วนผสมหลักคือ CBD (Cannabidiol) สารสกัดจากกัญชง ที่มีคุณสมบัติโดดเด่นในการต้านอนุมูลอิสระ ลดการอักเสบ และกระตุ้นการสร้างคอลลาเจน ทำให้ผิวแข็งแรงขึ้น ริ้วรอยดูจางลง และผิวหน้ากลับมาดูอ่อนเยาว์"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1000px", width: "100%", padding: "20px 10px" }}>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "Why CBD Ampoule Serum is Perfect for Sensitive Skin:"
            : "ประโยชน์ของ CBD Ampoule Serum:"}
        </h4>
        <ul style={{ paddingLeft: "15px" }}>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng" ? "Gentle Yet Effective:" : "ลดเลือนริ้วรอย:"}
            </span>
            {language === "eng"
              ? "Unlike harsh acne treatments and wrinkle creams, CBD Ampoule Serum is gentle enough for even the most sensitive skin types. It calms inflammation, reduces redness, and soothes irritation without causing dryness or further breakouts."
              : "CBD ช่วยกระตุ้นการสร้างคอลลาเจนและอีลาสติน ซึ่งเป็นโปรตีนที่ช่วยให้ผิวแข็งแรงและยืดหยุ่น ทำให้ริ้วรอยต่างๆ ดูจางลง ผิวหน้าดูเรียบเนียนขึ้น"}
          </li>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng"
                ? "Targets Multiple Skin Concerns:"
                : "ผิวหน้าเด้ง อิ่มน้ำ: "}
            </span>
            {language === "eng"
              ? "CBD Ampoule Serum is a multi-tasking powerhouse. It not only helps heal and prevent acne but also reduces the appearance of fine lines and wrinkles, leaving your skin looking youthful and radiant."
              : "CBD ช่วยเพิ่มความชุ่มชื้นให้ผิวอย่างล้ำลึก ทำให้ผิวหน้าดูอิ่มน้ำ ฉ่ำวาว มีชีวิตชีวา"}
          </li>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng" ? "Promotes Glass Skin:" : "ผิวกระจ่างใส:"}
            </span>
            {language === "eng"
              ? "This ampoule works to improve skin texture, tone, and hydration, resulting in a smoother, more even complexion that glows from within."
              : "CBD ช่วยลดเลือนจุดด่างดำ รอยสิว และความหมองคล้ำ ทำให้ผิวหน้าดูสว่างกระจ่างใสขึ้น"}
          </li>
          {language === "thi" && (
            <li>
              <span style={{ fontWeight: "bold" }}>
                {language === "eng" ? "" : "ลดการอักเสบ: "}
              </span>
              {language === "eng"
                ? ""
                : "CBD มีคุณสมบัติต้านการอักเสบ ช่วยลดปัญหาสิว ผดผื่น และอาการระคายเคืองผิว"}
            </li>
          )}
          {language === "thi" && (
            <li>
              <span style={{ fontWeight: "bold" }}>
                {language === "eng" ? "" : "ผิวแข็งแรง:"}
              </span>
              {language === "eng"
                ? ""
                : "CBD ช่วยเสริมสร้างเกราะป้องกันผิวให้แข็งแรงขึ้น ทำให้ผิวทนทานต่อมลภาวะและปัจจัยภายนอกต่างๆ"}
            </li>
          )}
        </ul>
      </div>
      <div
        style={{
          backgroundImage: `url(${ampoule1})`,
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
                ? "How to use CBD Ampoule Serum into Your Routine:"
                : "วิธีใช้ CBD Ampoule Serum:"}
            </h4>
            <p style={{ paddingBottom: "5px" }}>
              1.
              {language === "eng"
                ? "Cleanse your face thoroughly and pat dry."
                : "ทำความสะอาดผิวหน้าให้สะอาด"}
            </p>
            <p style={{ paddingBottom: "5px" }}>
              2.
              {language === "eng"
                ? "Gently break open the ampoule and apply the serum evenly to your face and neck."
                : "หยด CBD Ampoule Serum ลงบนฝ่ามือ 2-3 หยด"}
            </p>
            <p style={{ paddingBottom: "5px" }}>
              3.
              {language === "eng"
                ? "Allow the serum to absorb fully before applying your moisturizer."
                : "นวดเบาๆ ให้ทั่วใบหน้าและลำคอ"}
            </p>
            <p>
              {language === "eng"
                ? "4.Use daily for best results."
                : "4.	ใช้เป็นประจำทุกเช้าเย็น เพื่อผลลัพธ์ที่ดีที่สุด"}
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${ampoule2})`,
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
                ? "Benefits of CBD Ampoule Serum for Sensitive Skin:"
                : "ประโยชน์ของ CBD Ampoule Serum สำหรับผิวบอบบาง:"}
            </h4>
            <ul style={{ paddingLeft: "15px" }}>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng" ? "Reduces Acne:" : "ลดสิว:"}
                </span>
                {language === "eng"
                  ? "CBD's anti-inflammatory properties help reduce acne inflammation and prevent new breakouts."
                  : "บรรเทาผิวที่ระคายเคืองและลดรอยแดง ทำให้ผิวรู้สึกสบายและสมดุล"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Soothes Sensitivity:"
                    : "บรรเทาความไว:"}
                </span>
                {language === "eng"
                  ? "Calms irritated skin and reduces redness, leaving it feeling comfortable and balanced."
                  : "บรรเทาผิวที่ระคายเคืองและลดรอยแดง ทำให้ผิวรู้สึกสบายและสมดุล"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Fights Signs of Aging:"
                    : "ต่อสู้กับสัญญาณแห่งวัย:"}
                </span>
                {language === "eng"
                  ? "Smooths fine lines and wrinkles, promoting a more youthful appearance"
                  : "ปรับริ้วรอยและร่องลึกให้เรียบเนียน ให้ดูอ่อนเยาว์ยิ่งขึ้น"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Boosts Hydration:"
                    : "เพิ่มความชุ่มชื้น:"}
                </span>
                {language === "eng"
                  ? "Provides deep hydration, leaving skin plump and supple."
                  : "ให้ความชุ่มชื้นอย่างล้ำลึก ทำให้ผิวอิ่มเอิบและอ่อนนุ่ม"}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Improves Skin Tone:"
                    : "ปรับปรุงสีผิว:"}
                </span>
                {language === "eng"
                  ? "Reduces the appearance of hyperpigmentation and uneven skin tone for a more radiant complexion."
                  : "ลดการปรากฏของรอยดำและสีผิวที่ไม่สม่ำเสมอเพื่อผิวกระจ่างใสยิ่งขึ้น"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1000px", width: "100%", padding: "2rem 10px" }}>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "Unlock Your Skin's Potential:"
            : "ปลดล็อกศักยภาพของผิวคุณ:"}
        </h4>
        <p style={{ paddingBottom: "20px" }}>
          {language === "eng"
            ? "Don't let acne or sensitivity hold you back from achieving your glass skin goals. CBD Ampoule Serum offers a gentle yet effective solution to transform your complexion. Say goodbye to blemishes, redness, and wrinkles, and hello to healthy,glowing skin!"
            : "อย่าปล่อยให้สิวหรืออาการแพ้ง่ายเป็นอุปสรรคต่อการบรรลุเป้าหมายผิวกระจก CBD Ampoule Serum มอบโซลูชั่นที่อ่อนโยนแต่ทรงประสิทธิภาพในการเปลี่ยนผิวของคุณ บอกลารอยตำหนิ รอยแดง และริ้วรอย แล้วพบกับผิวสุขภาพดีเปล่งประกาย!"}
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
        <img src={ampoule3} alt="/" className="image-style" loading="lazy"/>
        <img
          src={ampoule_1}
          alt="/"
          className="image-style-1"
          loading="lazy"
        />
        <img src={ampoule_2} alt="/" className="image-style" style={{objectFit: "cover"}} loading="lazy"/>
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

export default AmpoulSerum;
