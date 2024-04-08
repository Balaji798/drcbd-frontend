"use client";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const NHI = () => {
  const data = [
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/news.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/health.png",
    "https://drcbd-cloud.s3.ap-southeast-1.amazonaws.com/dr/innovation.png",
  ];
  const uData = [
    {
      title: "Health",
      data: [1, 2, 3],
    },
    {
      title: "Medical",
      data: [1, 2, 3],
    },
    {
      title: "Research",
      data: [1, 2, 3],
    },
    {
      title: "NEWS",
      data: [1, 2, 3],
    },
    {
      title: "Press Release",
      data: [1, 2, 3],
    },
  ];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 4;
  const category = ["Health", "Medical", "Research", "News", "Press Release"];
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(arr.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = arr.slice(startIndex, endIndex);


  return (
    <div>
      <img
        src={data[0]}
        alt="/"
        style={{ objectFit: "cover", width: "100%", height: "25em" }}
      />
      <div style={{ padding: "50px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.8rem",
            paddingBottom: "1.5rem",
          }}
        >
          CATEGORIES LIST
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {category.map((item, index) => (
            <h1
              key={index}
              style={{ padding: "0 1rem", borderRight: "1px solid" }}
            >
              {item}
            </h1>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            paddingTop: 50,
          }}
        >
          <div
            style={{
              width: "45%",
              height: 400,
              background: "#e8eae1",
              marginRight: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  background: "#005652",
                  color: "#fff",
                  fontSize: 13,
                  padding: "5px 15px",
                }}
              >
                JANUARY 14,2023
              </div>
            </div>
            <div
              style={{ width: "100%", height: 20, background: "#005652" }}
            ></div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {currentItems.map((item, index) => {
              // if (index % 4 === 1 || index % 4 === 2) {
              //   return (
              //     <div
              //       style={{
              //         width: "59%",
              //         height: 200,
              //         background: "#e8eae1",
              //         marginRight: 10,
              //         display: "flex",
              //         flexDirection: "column",
              //         justifyContent: "space-between",
              //       }}
              //       key={index}
              //     >
              //       <div
              //         style={{
              //           width: "100%",
              //           display: "flex",
              //           justifyContent: "flex-end",
              //         }}
              //       >
              //         {item}
              //         <div
              //           style={{
              //             background: "#005652",
              //             color: "#fff",
              //             fontSize: 13,
              //             padding: "5px 15px",
              //           }}
              //         >
              //           JANUARY 14,2023
              //         </div>
              //       </div>
              //       <div
              //         style={{ width: "100%", height: 20, background: "#005652" }}
              //       ></div>
              //     </div>
              //   );
              // }
              // if (index == 0) {
              //   return (
              //     <div
              //       style={{
              //         width: "40%",
              //         height: 400,
              //         background: "#e8eae1",
              //         marginRight: 10,
              //         display: "flex",
              //         flexDirection: "column",
              //         justifyContent: "space-between",
              //       }}
              //       key={index}
              //     >
              //       <div
              //         style={{
              //           width: "100%",
              //           display: "flex",
              //           justifyContent: "flex-end",
              //         }}
              //       >
              //         {item}
              //         <div
              //           style={{
              //             background: "#005652",
              //             color: "#fff",
              //             fontSize: 13,
              //             padding: "5px 15px",
              //           }}
              //         >
              //           JANUARY 14,2023
              //         </div>
              //       </div>
              //       <div
              //         style={{ width: "100%", height: 20, background: "#005652" }}
              //       ></div>
              //     </div>
              //   );
              // } else {
              return (
                <div
                  style={{
                    width: "49%",
                    height: 197,
                    background: "#e8eae1",
                    margin: "0 5px 5px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  key={index}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {item}
                    <div
                      style={{
                        background: "#005652",
                        color: "#fff",
                        fontSize: 13,
                        padding: "5px 15px",
                      }}
                    >
                      JANUARY 14,2023
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: 20, background: "#005652" }}
                  ></div>
                </div>
              );
              //}
            })}
          </div>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              style={{
                margin: "0 5px",
                border: "0.5px solid silver",
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background:"#fff",
                color:"#000",
                borderRadius:3
              }}
            >
              {index + 1}
            </button>
          ))}
          <div
            style={{
              margin: "0 5px",
              border: "0.5px solid silver",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background:"#fff",
              borderRadius:3
            }}
          >
            <MdArrowForwardIos color="#000" size={25}/>
          </div>
        </div> */}
      </div>
      <div style={{ background: "#000", color: "#fff",padding:"2rem" }}>
        {uData.map((item, index) => (
          <div key={index}>
            <h1 style={{fontSize:"2.5rem",padding:"1rem 0"}}>{item.title}</h1>
            <div
              style={{
                display: "flex",
                justifyContent:"space-between"
              }}
            >
              {item.data.map((items, i) => (
                <div
                  style={{
                    width: "32.5%",
                    height: 240,
                    background: "#e8eae1",
                    margin: "0 5px 5px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  key={i}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {items}
                    <div
                      style={{
                        background: "#005652",
                        color: "#fff",
                        fontSize: 13,
                        padding: "5px 15px",
                      }}
                    >
                      JANUARY 14,2023
                    </div>
                  </div>
                  <div
                    style={{ width: "100%", height: 20, background: "#005652" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NHI;
