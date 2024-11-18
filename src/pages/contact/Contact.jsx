import { AiOutlineGlobal, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { RiLineFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import contact from "../../assets/contact.png";
import bg from "../../assets/bg.png";
import "./contact.css";

const Contact = () => {
  const contacts = [
    {
      link: "+66 65 141 6999",
      icon: <CgPhone size={40} color="#41631c" />,
      fontSize: 20,
    },
    {
      link: "www.drcbdgroup.com",
      icon: <AiOutlineGlobal size={30} color="#41631c" />,
      fontSize: 20,
    },
    {
      link: "@drcbdinnovation",
      icon: <BsFacebook size={30} color="#41631c" />,
      fontSize: 20,
    },
    {
      link: "https://line.me/R/ti//@808bzikn",
      icon: <RiLineFill size={30} color="#41631c" />,
      fontSize: 20,
    },
    {
      link: "www.youtube.com/@DrCBDOfficalChannel",
      icon: <AiFillYoutube size={30} color="#41631c" />,
      fontSize: 20,
    },
    {
      link: `255 Bangna-Trad 3, Bangna-Trad Rd.,BangnaNeua, Bangna, Bangkok 10260`,
      icon: <IoLocationSharp size={30} color="#41631c" />,
      fontSize: 20,
    },
  ];
  return (
    <div>
      <img
        src={contact}
        className="contact-banner"
        alt="/"
        loading="lazy"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowY:"hidden"
        }}
        className="contact"
      >
        <img
          src={bg}
          style={{
            objectFit: "cover",
            //width: "450px",
            maxWidth: "600px",
            position: "absolute",
            right: "-16em",
            top: "-6%",
          }}
          loading="lazy"
        />
        <img
          src={bg}
          style={{
            objectFit: "cover",
            width: "600px",
            position: "absolute",
            left: "-270px",
            bottom: "-10%",
            transform: "rotate(60deg)",
          }}
          loading="lazy"
        />
        <div style={{ maxWidth: 900, width: "100%", padding:'50px 1rem 0' }}>
          {contacts.map((item, index) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                paddingBottom: 15,
              }}
              key={index}
            >
              {item.icon}
              <p
                style={{
                  fontSize: item.fontSize,
                  color: "#41631c",
                  fontFamily: "Avenir",
                  width: "55%",
                  paddingLeft: 10,
                }}
              >
                {item.link}
              </p>
            </div>
          ))}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60810.78467790872!2d100.58209302270677!3d13.668730540013332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s255%20Bangna-Trad%203%2C%20Bangna-Trad%20Rd.%2CBangnaNeua%2C%20Bangna%2C%20Bangkok%2010260!5e0!3m2!1sen!2sin!4v1684082886671!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
