// CoverPhoto.js
import React from "react";

const CoverPhoto = () => {
  return (
    <div
      style={{
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        overflow: "hidden",
        height: "200px",
        backgroundColor: "#f0f0f0",
        position: "relative",
      }}
    >
      <img
        src="https://via.placeholder.com/800x200"
        alt="Cover"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default CoverPhoto;
