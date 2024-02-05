// WeddingCard.js

import React, { Fragment } from "react";
import dayjs from "dayjs";
import { InvitationCardProps } from "@/types/invitation";
import { INVITATION_STATUS_TAG_COLORS } from "./constants";
import Link from "next/link";

const InvitationCard = (props: InvitationCardProps) => {
  const { wedding, status } = props;
  const { title, wedding_date, venue, groom, bride } = wedding;
  const statusTagBg = INVITATION_STATUS_TAG_COLORS?.[status] || "bg-blue-500";

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span
            className={`${statusTagBg} text-white font-bold py-1 px-2 rounded-full text-xs uppercase tracking-wide`}
          >
            {status}
          </span>
          <span className="text-gray-500 text-xs">
            {dayjs(wedding_date).format("MMMM D, YYYY")}
          </span>
        </div>
        <h2 className="text-xl font-bold my-2">{title}</h2>
        <p className="text-gray-600 mb-2">Venue: {venue}</p>
        <p className="text-gray-600 mb-2">Groom: {groom}</p>
        <p className="text-gray-600 mb-2">Bride: {bride}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href={`/weddings/${wedding?._id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export const InvitationsDashboardLoader = (): JSX.Element => {
  return (
    <div className="flex flex-wrap justify-start">
      {[1, 2, 3, 4, 5]?.map((_, index) => {
        return (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden m-4 w-[250px]"
            key={index}
          >
            <div className="p-4 w-[250px]">
              <div className="flex justify-between items-center">
                <span className=" text-white font-bold py-1 px-2 rounded-full text-xs uppercase tracking-wide bg-gray-200 h-6 w-[70px] animate-pulse"></span>
                <span className="text-gray-500 text-xs bg-gray-200 h-6  animate-pulse w-[80px]"></span>
              </div>
              <h2 className="text-xl font-bold my-2 bg-gray-200 h-8 w-full animate-pulse"></h2>
              <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full animate-pulse"></p>
              <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full animate-pulse"></p>
              <p className="text-gray-600 mb-2 bg-gray-200 h-4 w-full animate-pulse"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvitationCard;
