import React from "react";
import cardStyles from "./wedding-card.module.scss";
import Image from "next/image";
import { MyWeddingData } from "@/types/weddings";

function WeddingCard(props: { wedding: MyWeddingData }) {
  const { wedding } = props;
  console.log("wedding", wedding);
  return (
    <div className={`${cardStyles?.["card-wrapper"]}`}>
      <h2>{wedding?.title}</h2>
      <div className={`${cardStyles?.["card"]}`}>
        <Image
          src="/wedding-palceholder.jpeg"
          alt="Avatar"
          width={100}
          height={200}
          style={{ width: "100%", height: "50%" }}
        />
        <div className={`${cardStyles?.["container"]}`}>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <p>Groom :</p>
              <h4>
                <b>{`${wedding?.groom?.surname} ${wedding?.groom?.name}`}</b>
              </h4>
            </div>
            <div className="flex gap-5">
              <p>Bribe :</p>
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
