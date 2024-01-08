"use client";
import { MyWeddingCarouselProps } from "@/types/weddings";
import React from "react";
import MyWeddingCarouselCard from "../carousel-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyWeddingCarousel = (props: MyWeddingCarouselProps): JSX.Element => {
  const { gallery } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className={``}>
      <Slider {...settings}>
        {gallery?.map((photo) => {
          return <MyWeddingCarouselCard gallery={photo} key={photo?.id} />;
        })}
      </Slider>
    </div>
  );
};

export default MyWeddingCarousel;
