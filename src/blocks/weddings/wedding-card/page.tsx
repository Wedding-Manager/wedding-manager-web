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
    <div className={`${cardStyles?.["card-wrapper"]}`}>
      <h2>{wedding?.title}</h2>
      <div className={`${cardStyles?.["card"]}`}>
        <Link href={`/weddings/${wedding._id}`}>
          <ClgImg url={wedding?.photo_gallery?.[0]?.url} />
        </Link>

        <div className={`${cardStyles?.["container"]}`}>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <p>Groom :</p>
              <h4>
                <b>{`${wedding?.groom?.surname} ${wedding?.groom?.name}`}</b>
              </h4>
            </div>
            <div className="flex gap-5">
              <p>Bride :</p>
              <h4>
                <b>{`${wedding?.bribe?.surname} ${wedding?.bribe?.name}`}</b>
              </h4>
            </div>
          </div>
          <div>
            Date :<b>{wedding?.wedding_date}</b>{" "}
          </div>
          <div>
            Place :<b>{wedding?.avenue}</b>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeddingCard;
