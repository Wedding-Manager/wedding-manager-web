import React from "react";

const LoaderPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "6px solid rgba(0, 0, 0, 0.3)",
          borderRadius: "50%",
          borderTop: "6px solid #3498db",
          width: "50px",
          height: "50px",
          animation: "spin 1s linear infinite",
        }}
      ></div>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoaderPage;
