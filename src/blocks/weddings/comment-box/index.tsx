import CommentBox from "@/components/comment-box";
import { CommentBoxProps } from "@/types/comment";
import { InfoCircle } from "iconsax-react";
import React from "react";
import Popup from "reactjs-popup";

function WeddingStory(
  props: CommentBoxProps & { isInvalid: boolean; errorMessage: string }
): JSX.Element {
  const { message, handleCommentChange, isInvalid, errorMessage, title } =
    props;
  return (
    <div>
      <div className={`flex items-center gap-7`}>
        {title ?? "Wedding Story"}
        {isInvalid && (
          <Popup
            key={`input-error`}
            trigger={
              <InfoCircle size="12" color="red" style={{ cursor: "pointer" }} />
            }
            position={"right center"}
            on={["hover", "focus"]}
            arrow={true}
          >
            <div className={`bg-black rounded-lg`}>
              <span className="text-white p-5">{errorMessage}</span>
            </div>
          </Popup>
        )}
      </div>
      <CommentBox
        placeholder="Add Comment..."
        message={message!}
        handleCommentChange={handleCommentChange}
      />
    </div>
  );
}

export default WeddingStory;
