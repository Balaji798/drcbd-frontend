import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLine, FaTwitter, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../../../util/LanguageContext";
import { useNavigate } from "react-router-dom";
import sleeping1 from "../../../assets/blog/sleeping-cream.png";
import cbd from "../../../assets/blog/9ce1.jpg";
import cbd1 from "../../../assets/blog/IMG_2154.png";
import cbd2 from "../../../assets/blog/cbd.jpg";
import cbd3 from "../../../assets/blog/Deep-Sleeping-Cream-02.jpg";
import cbd4 from "../../../assets/blog/sleeping-cream-1.jpg";
import cbd5 from "../../../assets/blog/9ce3.jpg";

const SleepingCream = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  return (
    <div className="center">
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
      <h2
        style={{ textAlign: "center", paddingTop: "10px", fontWeight: "bold" }}
      >
        9CE CBD Deep Sleeping Cream
      </h2>
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
            paddingBottom: "10px",
          }}
        >
          <img src={sleeping1} alt="/" className="blog-img" loading="lazy"/>
          <button
            style={{
              maxWidth: "150px",
              width: "100%",
              padding: "5px 0",
              textAlign: "center",
            }}
            onClick={() => {
              navigate(
                `/product-detail/CBD-FACE/9CE%20CBD%20DEEP%20SLEEPING%20CREAM`,
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
      <div className="flex" style={{ width: "100%" }}>
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
            ? "Sachet Cream to Go: Your Pocket-Sized Skincare Essentials for Radiant, Flawless Skin"
            : "ผิวสวยใส สุขภาพดี ในราคาหลักสิบ! 9CE ครีมซอง ตัวช่วยกู้ผิวสวยครบสูตร"}
        </h4>
        <p>
          {language === "eng"
            ? "In the world of skincare, convenience and efficacy go hand in hand. That's why sachet creams, those small, single-use packets of skincare goodness, have become a must-have for beauty enthusiasts on the go. Whether you're traveling,heading to the gym, or simply looking for a hassle-free way to maintain your skincare routine, sachet creams are your perfect companion."
            : "สาวๆ คนไหนอยากมีผิวสวยใส สุขภาพดี แต่ไม่อยากจ่ายแพง ต้องลอง 9CE ครีมซอง ที่มาพร้อมคุณสมบัติครบครัน ทั้งบำรุงผิว ลดเลือนจุดด่างดำ รอยแดง พร้อมปกป้องผิวจากแสงแดด ในราคาสบายกระเป๋า! ไม่ว่าคุณจะมีปัญหาผิวแห้ง ผิวมัน ผิวแพ้ง่าย หรือมีรอยดำ รอยแดงจากสิว 9CE ก็มีครีมซองสูตรเฉพาะที่ตอบโจทย์ทุกปัญหาผิวของคุณ"}
        </p>
      </div>
      <img src={cbd} alt="/" style={{ width: "100%", objectFit: "contain" }} loading="lazy"/>
      <div style={{ maxWidth: "1000px", width: "100%", padding: "10px" }}>
        <ul style={{ listStyle: "none" }}>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng"
                ? "Whitening Creams: "
                : "9CE CBD Brightening Ampoule: "}
            </span>
            {language === "eng"
              ? "While similar to brightening creams, whitening creams often contain ingredients that specifically target melanin production to lighten overall skin tone. If you have hyperpigmentation or uneven skin tone, these can be a great option."
              : "ลดรอยแดง รอยดำ ผิวแข็งแรง ด้วยสูตร Ampoule ที่ช่วยปลอบประโลมผิว ลดการระคายเคือง ลดเลือนรอยแดง รอยดำจากสิว พร้อมเสริมเกราะป้องกันผิวให้แข็งแรง เหมาะสำหรับผิวแพ้ง่าย หรือผิวที่มีปัญหาสิว"}
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1600px",
          width: "100%",
          padding: "3rem 0px 0px",
          objectFit: "cover",
        }}
      >
        <img src={cbd1} alt="/" style={{ maxWidth: "600px", width: "100%" }} loading="lazy"/>
        <div
          className="flex"
          style={{
            maxWidth: "600px",
            width: "100%",
            justifyContent: "flex-end",
            paddingLeft: "10px"
          }}
        >
          <div style={{ maxWidth: "580px" }}>
            <h4 style={{ padding: "10px 0 5px" }}>
              {language === "eng"
                ? "Why Choose Sachet Creams?"
                : "ทำไมต้องเลือก 9CE ครีมซอง?"}
            </h4>
            <ul style={{ listStyle: "none" }}>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Travel-Friendly: "
                    : "ครีมซองราคาถูก: "}
                </span>
                {language === "eng"
                  ? "They're TSA-approved and take up minimal space in your luggage or purse."
                  : "ราคาสบายกระเป๋า เริ่มต้นเพียงหลักสิบ! เหมาะสำหรับทุกคนที่อยากมีผิวสวยในราคาประหยัด"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng" ? "Hygienic: " : "ครีมพกพาง่าย: "}
                </span>
                {language === "eng"
                  ? "Each packet is a fresh dose, minimizing the risk of contamination."
                  : "ขนาดเล็กกะทัดรัด พกใส่กระเป๋าไปได้ทุกที่ ไม่ว่าจะไปทำงาน ไปเที่ยว หรือแม้แต่เดินทางไปต่างจังหวัด ก็ไม่ต้องกังวลเรื่องน้ำหนักกระเป๋าอีกต่อไป"}
              </li>
              <li style={{ paddingBottom: "5px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {language === "eng"
                    ? "Cost-Effective: "
                    : "●	คุณภาพเกินราคา: "}
                </span>
                {language === "eng"
                  ? "Try out different products without committing to a full-sized version."
                  : "ถึงแม้จะเป็นครีมซอง แต่คุณภาพไม่เป็นรองใคร เพราะอัดแน่นด้วยสารสกัดที่คัดสรรมาอย่างดี และเทคโนโลยีการผลิตที่ทันสมัย"}
              </li>
              {language === "eng" && (
                <li style={{ paddingBottom: "5px" }}>
                  <span style={{ fontWeight: "bold" }}>Versatile: </span>Perfect
                  for a quick refresh after a workout or a touch-up during the
                  day.
                </li>
              )}
            </ul>
            <h4 style={{ padding: "10px 0 5px" }}>
              {language === "eng"
                ? "Incorporating Sachet Creams into Your Routine"
                : "วิธีใช้ 9CE ครีมซองให้ได้ผลดีที่สุด"}
            </h4>
            {language === "eng" ? (
              <p>
                Sachet creams are incredibly easy to use. Simply tear open the
                packet and apply the contents to your cleansed face and neck.
                They can be used in the morning, evening, or whenever your skin
                needs a boost.
              </p>
            ) : (
              <ul style={{ listStyle: "none" }}>
                <li style={{ paddingBottom: "5px" }}>
                  1. ทำความสะอาดผิวหน้าให้สะอาด
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  2. ทาเซรั่มแอมพลู 9CE CBD Brightening Ampoule
                  ให้ทั่วใบหน้าและลำคอ
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  3. ทาครีมบำรุงผิว 9CE CBD Cream ให้ทั่วใบหน้าและลำคอ
                  (ในตอนเช้า)
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  4. ทาครีมกันแดด 9CE DD Sunscreen
                  เป็นขั้นตอนสุดท้ายก่อนแต่งหน้า (ในตอนเช้า)
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  5. ทา 9CE Deep Sleeping Cream เป็นขั้นตอนสุดท้ายก่อนนอน
                  (ในตอนกลางคืน)
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${cbd5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          width: "100%",
          padding: "2rem 10px",
        }}
        className="center"
      >
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div style={{ maxWidth: "750px" }}>
            <h4 style={{ padding: "10px 0 5px" }}>
              {language === "eng" ? "Remember:" : "เคล็ดลับเพิ่มเติม:"}
            </h4>
            <p>
              {language === "eng"
                ? "Always patch-test a new product before applying it to your entire face."
                : "สามารถใช้ 9CE CBD Brightening Ampoule ได้ทั้งเช้าและเย็น"}
            </p>
            <p>
              {language === "eng"
                ? "Choose sachet creams from reputable brands to ensure quality and safety."
                : "สำหรับผิวแห้งมาก สามารถทา 9CE CBD Cream ซ้ำระหว่างวันได้"}
            </p>
            {language === "thi" && (
              <p>
                อย่าลืมทาครีมกันแดด 9CE DD Sunscreen ทุกวัน
                แม้ในวันที่ไม่ได้ออกแดดจัด
              </p>
            )}
            {language === "eng" && (
              <h4 style={{ padding: "10px 0 5px" }}>
                Ready to Simplify Your Skincare?
              </h4>
            )}
            {language === "eng" && (
              <p>
                Sachet creams are a game-changer for anyone seeking a convenient
                and effective skincare solution. Embrace the {'"to-go"'}{" "}
                lifestyle and let these little packets unveil your most radiant,
                flawless skin yet!
              </p>
            )}
          </div>
        </div>
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
        <img src={cbd2} alt="/" className="image-style" loading="lazy"/>
        <img
          src={cbd3}
          alt="/"
          className="image-style-1"
          loading="lazy"
        />
        <img src={cbd4} alt="/" className="image-style" loading="lazy"/>
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

export default SleepingCream;
