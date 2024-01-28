"use client";
import CommentBox from "@/components/comment-box";
import { fetchUserMentions, formatCommentDate } from "@/stores/comments";
import type { Comment, Mention as MentionType } from "@/types/weddings";
import { isLogedIn } from "@/utils/run-time";
import { color } from "framer-motion";
import { Send } from "iconsax-react";
import React, { Fragment, useState } from "react";
import { Mention, MentionsInput } from "react-mentions";

function Comment(props: {
  comment: Comment;
  handleSave?: (params: { weddingId?: string; payload: Comment }) => void;
}) {
  const { comment, handleSave } = props;
  const [reply, setReply] = useState<Comment | undefined>();
  const handleReplyChange = (newValue: any, mentions: any) => {
    setReply((comment) => {
      return {
        ...comment,
        message: newValue,
        mentions: mentions,
      };
    });
  };
  const defultMention = [
    {
      id: comment?.created_by?._id,
      display: `${comment?.created_by?.surname} ${comment?.created_by?.name}`,
    },
  ];
  const defaultMessage = `@[${defultMention?.[0]?.display}](${defultMention?.[0]?.id})`;
  return (
    <Fragment>
      <div className="flex justify-between mb-2 items-start">
        <div className="flex items-center gap-2">
          <div className="rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center text-gray-500">
            {`${comment?.created_by?.surname[0]}${comment?.created_by?.name[0]}`}
          </div>
          <div>
            <div className="text-gray-800 font-semibold">{`${comment?.created_by?.surname} ${comment?.created_by?.name}`}</div>
            <div className="text-gray-500 text-sm">
              {formatCommentDate(comment?.created_on!)}
            </div>
          </div>
        </div>
        <button
          className={`text-blue-500 ${
            isLogedIn() ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => {
            if (!isLogedIn()) return;
            setReply({
              message: defaultMessage,
              parent: comment?._id,
              mentions: defultMention as unknown as MentionType[],
            });
          }}
        >
          Reply
        </button>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg">
        <MentionsInput value={comment?.message} disabled>
          <Mention data={[]} trigger={"@"} style={{ color: "#3B82F6" }} />
        </MentionsInput>
      </div>
      {comment?.replies?.map((reply) => (
        <div key={reply?._id} className="ml-8 mb-2 items-start">
          <div className="flex justify-between mb-2 items-start">
            <div className="flex items-center gap-2">
              <div className="rounded-full h-8 w-8 bg-gray-300 flex items-center justify-center text-gray-500">
                {`${reply?.created_by?.surname[0]}${reply?.created_by?.name[0]}`}
              </div>
              <div>
                <div className="text-gray-800 font-semibold">{`${reply?.created_by?.surname} ${reply?.created_by?.name}`}</div>
                <div className="text-gray-500 text-sm">
                  {formatCommentDate(reply?.created_on!)}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <MentionsInput value={reply?.message} disabled>
              <Mention data={[]} trigger={"@"} style={{ color: "#3B82F6" }} />
            </MentionsInput>
          </div>
        </div>
      ))}
      {reply ? (
        <div className={`flex items-center`}>
          <div className=" p-3 rounded-lg  w-[90%] ">
            <CommentBox
              message={reply!}
              handleCommentChange={handleReplyChange}
              placeholder="Comment..."
              disabled={!isLogedIn()}
            />
          </div>
          <Send
            size="32"
            color="#3B82F6"
            variant="Bold"
            onClick={() => {
              if (!isLogedIn()) return;
              handleSave?.({ payload: reply });
              setReply(undefined);
            }}
          />
        </div>
      ) : null}
    </Fragment>
  );
}

export default Comment;
