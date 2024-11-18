import { useLocation } from "react-router-dom";
import leader1 from "../../assets/aboutUs/leader-1.jpg";
import leader2 from "../../assets/aboutUs/leader-2.jpg";
import leader3 from "../../assets/aboutUs/leader-3.jpg";
import staff from "../../assets/aboutUs/staff.jpg"

const OurLeadership = () => {
  const location = useLocation();
  const data = [
    {
      image:leader1,
      name: "PORNCHAI PADMINDRA",
      designation: "CEO & FOUNDER",
    },
    {
      image:leader2,
      name: "TIYA PHAOSAWASDI",
      designation: "MANAGING DIRECTOR & FOUNDER",
    },
    {
      image:leader3,
      name: "SOMJITRA DHANASOBHON",
      designation: "DEPUTY MANAGING DIRECTOR",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "6rem",
        background: "#000",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "35px",
            textTransform: "capitalize",
            paddingBottom: "3rem",
            fontWeight: "bold",
          }}
        >
          {location.pathname.slice(1).split("-").join(" ")}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems:"center",
            width: "100%",
          }}
          className="leaders"
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "20rem",
                paddingTop: "10px",
                marginBottom: "3.5rem",
                height: "21rem",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* <img
                src={item.image}
                alt={item}
                key={index}
                style={{ objectFit: "contain", width: "100%" }}
              /> */}
              <div
                style={{
                  height: "10%",
                  background: "#000",
                  width: "100%",
                  textAlign: "end",
                  paddingTop: "0.3rem",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                    padding: "5px 0",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    padding: "5px 0",
                    color: "#c4c4c4",
                  }}
                >
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom:"2rem"
        }}
      >
        <img
          src={staff}
          style={{ objectFit: "contain", width: "80%", paddingTop: "1rem" }}
          alt="/"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default OurLeadership;
