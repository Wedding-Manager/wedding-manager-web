/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Trigger } from "@/blocks/trigger";
import { fetchLikes, handleLikeChange } from "@/stores/weddings";
import { LikeType, MyWeddingData } from "@/types/weddings";
import { isLogedIn } from "@/utils/run-time";
import { Lovely } from "iconsax-react";
import { Fragment, useEffect, useState } from "react";

const Like = (props: { wedding: MyWeddingData }) => {
  const { wedding } = props;
  const [likes, setLikes] = useState<LikeType>({
    count: wedding?.likes?.length,
  });

  useEffect(() => {
    const updateLike = async () => {
      const like: LikeType = await fetchLikes({ weddingId: wedding?._id });

      if (like) setLikes(like);
    };
    updateLike();
  }, []);
  return (
    <Fragment>
      <Trigger
        isDisabled={isLogedIn()}
        triggerContent={
          <Fragment>
            <div className="rounded-xl border hidden md:block p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-fit">
              <p className="text-lg font-semibold">
                Please log in to access the like feature
              </p>
              <p className="text-sm mt-2">
                Logging in allows you to like and interact with content.
              </p>
            </div>
            <div className="rounded-xl border block md:hidden p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-fit">
              <p className="text-lg font-semibold">Please ,log in</p>
            </div>
          </Fragment>
        }
      >
        <div
          className={`${
            isLogedIn() ? "cursor-pointer" : "cursor-not-allowed"
          } flex items-center`}
          onClick={async (e) => {
            const prevLikes = likes;
            if (!isLogedIn()) return;
            setLikes((like) => {
              return {
                ...like,
                is_liked: like ? !like?.is_liked : true,
                count: like
                  ? like?.is_liked
                    ? like?.count - 1
                    : (like?.count || 0) + 1
                  : 1,
              };
            });
            await handleLikeChange({
              isLiked: !prevLikes?.is_liked,
              weddingId: wedding?._id,
              onError: () => {
                setLikes(prevLikes);
              },
            });
          }}
        >
          <Lovely
            size="32"
            color={likes?.is_liked ? "red" : "black"}
            variant={likes?.is_liked ? "Bold" : "Outline"}
          />
          <div>{likes?.count || 0}</div>
        </div>
      </Trigger>
    </Fragment>
  );
};

export default Like;
