const Steps = (props) => {
  const steps = [1, 2, 3, 4];

  return (
    <div className="cart-step-container">
      <div
        style={{ width: "100%", background: "#005652", height: "15px" }}
      ></div>
      <div className="step-container">
        {steps.map((index) => (
          <div
            style={{
              background: "#fff",
              width: 70,
              height: 70,
              borderRadius: "50%",
              padding: "5px",
            }}
            key={index}
          >
            <div
              className="steps"
              style={{
                // eslint-disable-next-line react/prop-types
                background: props?.stepsColor?.includes(index)
                  ? "#005652"
                  : "#7d998d",
                color: "#fff",
              }}
            >
              <h1 style={{ fontSize: "40px" }}>{index}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
