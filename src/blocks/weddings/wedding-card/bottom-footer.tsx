import { MyWeddingData } from "@/types/weddings";
import React from "react";
import Like from "../like";
import Comments from "../comment/comment-popup";

function SocialInteractionBlock(props: { wedding: MyWeddingData }) {
  const { wedding } = props;
  return (
    <div className={`flex gap-6`}>
      <Like wedding={wedding} />
      <Comments wedding={wedding} />
    </div>
  );
}

export default SocialInteractionBlock;
