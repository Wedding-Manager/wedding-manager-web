import React from "react";
import shimmerEffectStyles from "./wedding-card.module.scss"; // Import SCSS module for styling

const MarriageDescriptionLoader = () => {
  return (
    <span
      className={`${shimmerEffectStyles["shimmer"]}  w-full rounded-md block bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse`}
    >
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    </span>
  );
};

export default MarriageDescriptionLoader;
