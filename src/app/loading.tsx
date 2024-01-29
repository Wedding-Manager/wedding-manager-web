import React from "react";
import pageLoaderStyles from "./loader.module.scss"; // Import CSS file for styling

const Loader = () => {
  return (
    <div className={`${pageLoaderStyles["loader-container"]}`}>
      <div className={`${pageLoaderStyles["loader"]}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
