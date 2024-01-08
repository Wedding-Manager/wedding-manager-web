"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

function ClgImage(props: any) {
  const { url } = props;
  return (
    <CldImage
      width="500"
      height="500"
      src={url}
      crop="fill"
      //   removeBackground
      //   underlay={url}
      alt="Description of my image"
    />
  );
}

export default ClgImage;
