/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Fragment } from "react";
import { MyWeddingData } from "@/types/weddings";
import dynamic from "next/dynamic";
import Link from "next/link";
import { DEFAULT_WEDDING_DESCRIPTION } from "@/app/weddings/create/constants";
import ClImgLoader from "../clgI-image/loader";
import MarriageDescriptionLoader from "./description-loader";
import FooterLoader from "./footer-loader";
import dayjs from "dayjs";

const SocialInteractionBlock = dynamic(() => import("./bottom-footer"), {
  ssr: false,
  loading: () => <FooterLoader />,
});
const ClgImg = dynamic(() => import("../clgI-image/page"), {
  ssr: false,
  loading: () => (
    <div>
      <ClImgLoader />
    </div>
  ),
});
const MarriageDescription = dynamic(() => import("./description"), {
  ssr: false,
  loading: () => <MarriageDescriptionLoader />,
});

function WeddingCard(props: { wedding: MyWeddingData }) {
  const { wedding } = props;

  return (
    <div
      className={`flex gap-2 w-[-webkit-fill-available] bg-white  my-4  md:flex-row flex-col shadow-inner border rounded-md  `}
    >
      {/* left pane */}
      <div className={`w-full md:w-[50%]`}>
        <text className={`font-bold block md:hidden text-center p-6 `}>
          {wedding?.title}
        </text>
        <Link href={`/weddings/${wedding._id}`} className="">
          <ClgImg url={wedding?.photo_gallery?.[0]?.url} />
        </Link>
        <div className={`p-6  `}>
          <div className="flex gap-0 md:gap-5 flex-col md:flex-row">
            <div className="flex gap-2 md:gap-5 whitespace-nowrap text-ellipsis overflow-hidden ">
              <p>Groom :</p>
              <h4 className={`block overflow-hidden text-ellipsis`}>
                <b>{`${wedding?.groom?.surname} ${wedding?.groom?.name}`}</b>
              </h4>
            </div>
            <div className="flex  gap-2 md:gap-5  whitespace-nowrap">
              <p>Bride :</p>
              <h4 className={`block overflow-hidden text-ellipsis`}>
                <b>{`${wedding?.bribe?.surname} ${wedding?.bribe?.name}`}</b>
              </h4>
            </div>
          </div>
          <div
            className={`block overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Date :<b>{dayjs(wedding?.wedding_date).format("MMMM D, YYYY")}</b>
          </div>
          <div
            className={`block overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Venue :<b>{wedding?.avenue}</b>{" "}
          </div>
        </div>
      </div>
      {/* right pane */}
      <div className={`w-[100%] md:w-[50%] p-2 md:p-6 justify-between `}>
        <text className={`font-bold hidden md:block text-center py-4 `}>
          {wedding?.title}
        </text>
        <div className={`h-[380px]`}>
          <p className={`h-[380px] text-ellipsis overflow-auto`}>
            <MarriageDescription
              description={
                wedding?.wedding_description?.message ||
                DEFAULT_WEDDING_DESCRIPTION
              }
            />
          </p>
        </div>
        <SocialInteractionBlock wedding={wedding} />
      </div>
    </div>
  );
}

export default WeddingCard;
