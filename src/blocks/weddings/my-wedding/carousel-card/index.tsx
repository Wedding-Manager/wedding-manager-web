import ClgImage from "@/components/clg-images";
import { MyWeddingCarouselCardProps } from "@/types/weddings";

import React from "react";

function MyWeddingCarouselCard(props: MyWeddingCarouselCardProps) {
  const { gallery } = props;
  return (
    <div className={` flex flex-col items-center w-full gap-6 py-4 mx-2`}>
      <div className={`font-bold text-center`}>
        {gallery?.title || "Wedding Photo"}
      </div>
      <div className={`flex justify-center `}>
        <ClgImage url={gallery?.url} />
      </div>
    </div>
  );
}

export default MyWeddingCarouselCard;
