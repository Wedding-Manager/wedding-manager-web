"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

function ClgImg(props: { url: string }) {
  const { url } = props;
  return (
    <CldImage
      width="550"
      height="550"
      crop="fill"
      src={url}
      alt="Description of my image"
    />
  );
}

export default ClgImg;
