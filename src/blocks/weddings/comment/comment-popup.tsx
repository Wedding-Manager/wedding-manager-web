/* eslint-disable react-hooks/exhaustive-deps */
import { MyWeddingData, Comment } from "@/types/weddings";
import { Messages2 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import CommentsContainer from "./container";
import { fetchWeedingComments, getCommentsTotal } from "@/stores/comments";

function CommentsBox(props: { wedding: MyWeddingData }) {
  const { wedding } = props;

  const [totalCommentsCount, setTotalComentsCount] = useState<number>(
    getCommentsTotal({ comments: wedding?.comments })
  );

  const updateTotalCommentsCount = (count: number) => {
    setTotalComentsCount(count);
  };
  useEffect(() => {
    const updateCount = async () => {
      const comments = await fetchWeedingComments({ weddingId: wedding?._id });
      const totalCommentCount = getCommentsTotal({ comments: comments });
      setTotalComentsCount(totalCommentCount);
    };
    updateCount();
  }, []);

  return (
    <div>
      <Popup
        trigger={
          <div className="flex items-center gap-2">
            <Messages2 size="32" color={"black"} variant={"Outline"} />
            <div>{totalCommentsCount}</div>
          </div>
        }
        contentStyle={{
          width: "100%",
          height: "100%",
          marginTop: "8%",
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.5)", // Add overlay blur effect
        }}
        nested
        offsetX={100}
        offsetY={500}
        lockScroll
        modal
      >
        {/* @ts-ignore */}
        {(close: any, isOpen: boolean) => {
          return (
            <>
              {isOpen && (
                <CommentsContainer
                  {...props}
                  popConfig={{ close }}
                  updateTotalCommentsCount={updateTotalCommentsCount}
                />
              )}
            </>
          );
        }}
      </Popup>
    </div>
  );
}

export default CommentsBox;
