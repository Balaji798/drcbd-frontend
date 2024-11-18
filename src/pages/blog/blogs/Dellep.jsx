/* eslint-disable react/no-unescaped-entities */
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLine, FaTwitter, FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { useLanguage } from "../../../util/LanguageContext";
import { useNavigate } from "react-router-dom";
import dellep from "../../../assets/blog/deelp-1.png";
import dellep1 from "../../../assets/blog/deelp1.jpg";
import dellep2 from "../../../assets/blog/deelp2.jpg";
import dellep3 from "../../../assets/blog/deelp3.jpg";
import dellep4 from "../../../assets/blog/deelp4.jpg";
import dellep5 from "../../../assets/blog/LINE_ALBUM_240724_0.jpg";
import dellep6 from "../../../assets/blog/LINE_ALBUM_240724.jpg";
import dellep7 from "../../../assets/blog/LINE_ALBUM_240724_7.jpg";

const Dellep = () => {
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
          <img src={dellep} alt="/" className="blog-img" loading="lazy"/>
          <button
            style={{
              maxWidth: "150px",
              width: "100%",
              padding: "5px 0",
              textAlign: "center",
            }}
            onClick={() => {
              navigate(
                `/product-detail/CBD-SUPPLEMENTS/EARTH%20LAB%20CBD%20DE'LEEP`,
                {
                  state: { catName1: "CBD-SUPPLEMENTS" },
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
            ? "De' Leep: Your Ticket to Deep, Restorative Sleep"
            : "De’ Leep: ตัวช่วยคืนความสุขให้การนอนหลับของคุณ"}
        </h4>
        <p>
          {language === "eng"
            ? "Are you tired of tossing and turning all night? Do you wake up feeling groggy and unrested? If you're struggling with insomnia or any other sleep disorder, it's time to discover the power of De' Leep."
            : "คุณกำลังเผชิญกับปัญหาเหล่านี้อยู่หรือไม่? นอนไม่หลับ หลับไม่สนิท ตื่นกลางดึกบ่อยครั้ง หรือแม้กระทั่ง นอนดึก ตื่นเช้าแล้วไม่สดชื่น? ปัญหาเหล่านี้ส่งผลกระทบต่อคุณภาพชีวิตของคุณอย่างแน่นอน ไม่ว่าจะเป็นเรื่องสมาธิ ประสิทธิภาพในการทำงาน หรือแม้กระทั่งสุขภาพกายและสุขภาพจิต"}
        </p>
        <p>
          {language === "eng"
            ? "De' Leep is a revolutionary sleeping soft gel designed to help you achieve the deep sleep your body craves. Unlike traditional sleeping pills that can leave you feeling groggy and dependent, De' Leep harnesses the power of natural ingredients to promote relaxation and healthy sleep patterns."
            : "De’ Leep คืออะไร? De’ Leep คืออาหารเสริมรูปแบบแคปซูลนิ่ม ที่พัฒนาขึ้นมาเป็นพิเศษเพื่อช่วยให้คุณ หลับลึก และ หลับสนิท ตลอดคืน ด้วยส่วนผสมจากธรรมชาติที่คัดสรรมาอย่างดี De’ Leep จึงปลอดภัยและไม่ทำให้เกิดอาการติด"}
        </p>
        <h4 style={{ padding: "10px 0 5px" }}>
          {language === "eng"
            ? "What Makes De' Leep Different?"
            : "De’ Leep เหมาะกับใคร?"}
        </h4>
        <ul style={{ paddingLeft: "15px" }}>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {language === "eng" ? "Natural Ingredients:" : ""}{" "}
            </span>
            {language === "eng"
              ? "De' Leep is formulated with a unique blend of natural ingredients known for their sleep-enhancing properties, such as melatonin, valerian root, chamomile, and passionflower."
              : "ผู้ที่มีปัญหา นอนไม่หลับ หรือ หลับยาก"}
          </li>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {language === "eng" ? "Non-Habit Forming:" : ""}{" "}
            </span>
            {language === "eng"
              ? "De' Leep is not addictive and can be taken safely on a regular basis without the risk of developing dependency."
              : "ผู้ที่ นอนดึก เป็นประจำ"}
          </li>
          <li style={{ paddingBottom: "5px" }}>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng" ? "Gentle and Effective:" : ""}{" "}
            </span>
            {language === "eng"
              ? "De' Leep 's gentle formula promotes relaxation and helps you fall asleep naturally, without any harsh side effects."
              : "ผู้ที่ต้องการ หลับลึก และ หลับสนิท มากขึ้น"}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>
              {language === "eng" ? "Convenient Soft Gel Form:" : ""}
            </span>
            {language === "eng"
              ? "De' Leep 's easy-to-swallow soft gels make it a convenient addition to your nightly routine"
              : "ผู้ที่ต้องการ ตัวช่วยนอนหลับ ที่ปลอดภัยและไม่เป็นอันตราย"}
          </li>
        </ul>
      </div>
      <div
        className="flex"
        style={{ width: "100%", padding: "2rem 0", flexWrap: "wrap" }}
      >
        <img
          src={dellep1}
          alt="/"
          style={{ maxWidth: "700px", width: "100%", objectFit: "cover" }}
          loading="lazy"
        />
        <div style={{ maxWidth: "800px", width: "100%", padding: "0 10px" }}>
          <h3 style={{ padding: "10px 0 5px" }}>
            {language === "eng"
              ? "The Benefits of Deep Sleep"
              : "De’ Leep ปลอดภัยหรือไม่?"}
          </h3>
          <p style={{ maxWidth: "500px", fontWeight: "500" }}>
            {language === "eng"
              ? "Deep sleep is essential for both physical and mental well-being. During deep sleep, your body repairs and restores itself, consolidates memories, and strengthens your immune system. De' Leep helps you achieve the deep sleep you need to wake up feeling refreshed and rejuvenated."
              : "De’ Leep ผลิตจากส่วนผสมจากธรรมชาติที่คัดสรรมาอย่างดี และผ่านการรับรองความปลอดภัยจาก อย. จึงมั่นใจได้ว่าปลอดภัยและไม่ก่อให้เกิดผลข้างเคียง อยากนอน หลับสบาย คืนนี้ต้องมี De’ Leep! หมายเหตุ: ผลลัพธ์ที่ได้อาจแตกต่างกันไปในแต่ละบุคคล ควรปรึกษาแพทย์ก่อนใช้หากคุณกำลังตั้งครรภ์ ให้นมบุตร หรือมีโรคประจำตัว"}
          </p>
          <h3 style={{ padding: "10px 0 5px" }}>
            {language === "eng"
              ? "Say Goodbye to Insomnia and Sleep Disorders"
              : ""}
          </h3>
          <p style={{ maxWidth: "500px", fontWeight: "500" }}>
            {language === "eng"
              ? "If you're struggling with insomnia or any other sleep disorder, De' Leep can help. De' Leep's natural ingredients work together to regulate your sleep-wake cycle, reduce anxiety, and promote relaxation, making it easier for you to fall asleep and stay asleep."
              : ""}
          </p>
          <h3 style={{ padding: "10px 0 5px" }}>
            {language === "eng" ? "Experience the Power of De' Leep" : ""}
          </h3>
          <p style={{ maxWidth: "500px", fontWeight: "500" }}>
            {language === "eng"
              ? "Don't let sleep problems control your life any longer. Try De' Leep today and experience the transformative power of deep and restorative sleep."
              : ""}
          </p>
        </div>
      </div>
      <div className="flex" style={{ width: "100%" }}>
        <div
          style={{
            width: "45%",
            height: "5px",
            backgroundColor: "#004b47",
          }}
        />
        <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Blog</p>
        <div
          style={{
            width: "45%",
            height: "5px",
            backgroundColor: "#004b47",
          }}
        />
      </div>
      <div style={{ maxWidth: "1010px", width: "100%", padding: "0 10px" }}>
        <h4 style={{ padding: "20px 0 10px" }}>
          {language === "eng"
            ? "De' Leep: Your Key to Unlock the Superhero Stage of Sleep"
            : "De’ Leep: ปลดล็อกสู่การนอนหลับอย่างมีคุณภาพ เพื่อชีวิตที่สดใสในทุกเช้า"}
        </h4>
        <p>
          {language === "eng"
            ? "Ever wish you could just snap your fingers and drift off to dreamland? Well, with De' Leep, you're one step closer to that superpower! Deep sleep: It's like the superhero stage of sleep-it's where all the magic happens for your body and mind. It's when your cells regenerate, your brain processes information, and your body gets the deep rest it needs. Deep sleep keeps us healthy and balanced in both the body and mind."
            : "การนอนหลับเป็นรากฐานสำคัญของสุขภาพที่ดี แต่ในโลกที่เร่งรีบและเต็มไปด้วยความเครียด การนอนหลับให้เพียงพอและมีคุณภาพกลายเป็นเรื่องท้าทายสำหรับใครหลายคน ปัญหา การนอนไม่หลับ ส่งผลเสียต่อสุขภาพร่างกาย เกิดได้จากหลายปัจจัย ตั้งแต่ปัจจัยทางร่างกาย ปัจจัยทางจิตใจ ปัจจัยสิ่งแวดล้อมและอุปนิสัยการนอน เช่น การ นอนดึก ที่ทำให้ร่างกายไม่ได้รับการฟื้นฟูอย่างมีประสิทธิภาพ อาจจะทำให้มีโรคเข้ามาแทรกซ้อนในร่างกายอาจจะทำให้เกิด อาการโรคอ้วน ระบบย่อยอาหารผิดปกติ เบลอ สมาธิสั้น หรือแม้กระทั่ง อยากนอนแต่นอนไม่หลับ ซึ่งอาจเสี่ยงเป็นโรคนอนไม่หลับ หรือเกิดขึ้นได้จากสภาพแวดล้อมที่ไม่เหมาะสมต่อการนอน การนอนหลับที่ดีประกอบด้วยหลายช่วง "}
        </p>
        <p style={{ padding: "10px 0" }}>
          {language === "eng"
            ? "But what if you're one of the many people struggling with insomnia or other sleeping disorders? Insomnia is when you have a tough time falling asleep or staying asleep, and it messes with your ability to get the rest you need. Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both, despite having the opportunity to sleep. And other sleeping disorders, also known as a sleep disorder, refers to a condition that disrupts a person's normal sleep patterns, can make it even harder to reach that all-important deep sleep."
            : "หนึ่งในนั้นคือ การหลับลึก ซึ่งเป็นการที่ร่างกายเข้าสู่ภาวะพักผ่อนมากที่สุดและเป็นช่วงที่หลับสนิทที่สุดของการนอน ในช่วงนี้ร่างกายจะเริ่มไม่ค่อยตอบสนองต่อสิ่งเร้าภายนอก และเข้าสู่กระบวนการฟื้นฟูร่างกายและสมองอย่างเต็มที่ นอกจากนี้ การหลับสนิท ยังเป็นช่วงที่ร่างกายจะได้ปรับสมดุลของฮอร์โมน ซึ่งส่งผลต่อการเจริญเติบโตและสุขภาพร่างกาย อีกทั้งยังช่วยลดความเครียดและวิตกกังวล ทำให้ฟื้นฟูสภาพจิตใจ และช่วยให้พัฒนาความจำและการเรียนรู้ เพื่อให้คุณหลับลึกและหลับสนิทอย่างมีคุณภาพ เราขอแนะนำ De’ "}
        </p>
        <p>
          {language === "eng"
            ? "Enter sleeping pills: they're like a fast pass to dreamland when counting sheep just won't cut it. Also known as a sleep aid or hypnotic medication, these pharmaceutical drugs are prescribed to help people who have difficulty falling asleep or staying asleep. But they often come with side effects and the risk of dependency."
            : "Leep ตัวช่วยในการนอนหลับที่ไม่ใช่ ยานอนหลับ แต่เป็นอาหารเสริมที่สกัดจากธรรมชาติ ช่วยให้คุณผ่อนคลาย หลับสบาย และตื่นมาพร้อมความสดชื่นในทุกเช้า De’ Leep ทำงานโดยการปรับสมดุลของสารสื่อประสาทและฮอร์โมนที่เกี่ยวข้องกับการนอนหลับ ช่วยให้คุณเข้าสู่ภาวะหลับลึกได้ง่ายและยาวนานขึ้น ทำให้การนอนหลับของคุณมีประสิทธิภาพมากขึ้น De’ Leep เหมาะสำหรับผู้ที่มีปัญหาหลับยาก หลับไม่สนิท หรือผู้ที่ต้องการเพิ่มคุณภาพการนอนหลับให้ดียิ่งขึ้น ไม่ว่าคุณจะเผชิญกับความเครียดจากการทำงาน การเรียน หรือสภาพแวดล้อมที่ไม่เอื้ออำนวย De’ Leep จะช่วยให้คุณสามารถพักผ่อนได้อย่างเต็มที่ และตื่นมาพร้อมพลังในการใช้ชีวิตในทุกๆ วัน"}
        </p>
        <img
          src={dellep2}
          alt="/"
          style={{ width: "100%", padding: "20px 0" }}
          loading="lazy"
        />
        <h4>
          {language === "eng"
            ? "De' Leep: The Natural Alternative"
            : "เดอ ลีป: ทางเลือกจากธรรมชาติ"}
        </h4>
        <p>
          {language === "eng"
            ? "Now, there's a better way to get the sleep you need: De' Leep. This innovative sleeping soft gelis formulated with natural ingredients that gently guide your body into a state of deep, restorative sleep."
            : "ตอนนี้ มีวิธีที่ดีกว่าในการนอนหลับตามที่คุณต้องการ: เดอ ลีป เจลลี่เนื้อนุ่มสำหรับนอนหลับที่เป็นนวัตกรรมใหม่นี้จัดทำขึ้นด้วยส่วนผสมจากธรรมชาติที่ช่วยนำพาร่างกายของคุณเข้าสู่สภาวะการนอนหลับที่ลึกและได้รับการบูรณะอย่างอ่อนโยน"}
        </p>
        <p>
          {language === "eng"
            ? "Unlike sleeping pills, De' Leep is not habit-forming and doesn't leave you feeling groggy in the morning. It's a safe and effective way to support your body's natural sleep rhythms."
            : "เดอ ลีปไม่เหมือนกับยานอนหลับตรงที่ไม่สร้างนิสัยและไม่ทำให้คุณรู้สึกมึนในตอนเช้า เป็นวิธีที่ปลอดภัยและมีประสิทธิภาพในการสนับสนุนจังหวะการนอนหลับตามธรรมชาติของร่างกาย"}
        </p>
      </div>
      {language === "eng" && (
        <div
          className="flex"
          style={{ justifyContent: "center", flexWrap: "wrap" }}
        >
          <div style={{ maxWidth: "450px", padding: "0 10px" }}>
            <h4>Benefits of {"De'"} Leep:</h4>
            <ul>
              <li>
                <span>Promotes deep sleep:</span>Get the most restorative sleep
                possible.
              </li>
              <li>
                <span>Non-habit forming: </span>Feel good about taking it
                regularly.
              </li>
              <li>
                <span>Gentle and effective:</span> Enjoy a restful night's sleep
                without side effects.
              </li>
              <li>
                <span>Convenient soft gel form:</span> Easy to take and gentle
                on your stomach.
              </li>
            </ul>
            <p>
              Unlock the Power of Deep Sleep with De' Leep Don't let sleep
              problems hold you back from living your best life. Experience the
              difference De' Leep can make and wake up feeling refreshed,
              energized, and ready to conquer your day!
            </p>
          </div>
          <img
            src={dellep3}
            alt="/"
            style={{ maxWidth: "600px", width: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      )}
      <img
        src={dellep4}
        alt="/"
        style={{ width: "100%", objectFit: "cover" }}
        loading="lazy"
      />
      <div
        className="flex"
        style={{
          maxWidth: "1200px",
          width: "100%",
          padding: "20px 10px",
          flexWrap: "wrap",
        }}
      >
        <img src={dellep5} alt="/" className="image-style" style={{height:'600px'}} loading="lazy"/>
        <img
          src={dellep6}
          alt="/"
          className="image-style-1"
          style={{height:'600px'}}
          loading="lazy"
        />
        <img src={dellep7} alt="/" className="image-style" style={{height:'600px'}} loading="lazy"/>
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

export default Dellep;
