/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardStyles from "./wedding-card.module.scss";
import Image from "next/image";
import { MyWeddingData } from "@/types/weddings";
import dynamic from "next/dynamic";
import Link from "next/link";

const ClgImg = dynamic(() => import("../clgI-image/page"), { ssr: false });

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
        <Link href={`/weddings/${wedding._id}`} className="bg-red-500">
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
            Date :<b>{wedding?.wedding_date}</b>{" "}
          </div>
          <div
            className={`block overflow-hidden text-ellipsis whitespace-nowrap`}
          >
            Venue :<b>{wedding?.avenue}</b>{" "}
          </div>
        </div>
      </div>
      {/* right pane */}
      <div className={`w-[100%] md:w-[50%] p-2 md:p-6 `}>
        <text className={`font-bold hidden md:block text-center py-4 `}>
          {wedding?.title}
        </text>
        <div>
          <p className={`max-h-[320px] text-ellipsis overflow-auto`}>
            {`
            In the enchanting tapestry of life, our love story unfolded, a
            serendipitous dance of two souls finding their rhythm. In crowded
            spaces and stolen glances, we discovered a connection that
            transcended time, sparking a flame that grew into a love that would
            weather life's storms. Underneath starlit skies, our first dance was
            a symphony of hearts beating in unison. Our shared laughter and
            moonlit strolls created a gallery of memories, painted by the
            strokes of destiny. Through sun-kissed picnics and whispered
            promises in love letters tucked into books, we built a sanctuary
            where our love blossomed like the flowers in our garden. In storms
            and sunshine, our love became the anchor and refuge, navigating the
            ebb and flow of life's challenges. We learned that love isn't just a
            feeling; it's a choice we make every day. With each passing year,
            our love deepened, leaving wrinkles etched with stories and silver
            strands as tokens of our enduring connection. As we stand on the
            threshold of forever, we marvel at the legacy we've built, a
            testament to the enduring power of our love. Through tears and
            triumphs, we've turned the pages of our love story, and today, we
            embark on a new chapter – a chapter called marriage. In the presence
            of family and friends, surrounded by the echoes of our shared
            journey, we say "I do." Hand in hand, we promise to continue writing
            the story of us, with its beautiful imperfections and unwavering
            commitment. And so, in this moment, we declare our love – a love
            that turned a serendipitous meeting into a lifetime of shared
            dreams, a love that will forever echo in the hearts of those who
            witness its beauty. Here's to us, to love, and to a lifetime of new
            beginnings. 💖 #OurLoveStory #ForeverYours #JustMarried

            `}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeddingCard;
