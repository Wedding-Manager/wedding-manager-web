"use client";

import React from "react";
import { MentionsInput, Mention } from "react-mentions";
import commentBoxStyles from "./comment-box.module.scss";
import { CommentBoxProps } from "@/types/comment";
import { fetchUserMentions } from "@/stores/comments";

function CommentBox(props: CommentBoxProps) {
  const { message, handleCommentChange, placeholder, ...rest } = props;
  const handleInputChange = (
    event: any,
    newValue: any,
    newPlainTextValue: any,
    mentions: any
  ) => {
    handleCommentChange(newValue, mentions);
  };

  return (
    <div>
      <MentionsInput
        value={message?.message}
        onChange={handleInputChange}
        className="mentions"
        classNames={commentBoxStyles}
        placeholder={placeholder}
        a11ySuggestionsListLabel={"Suggested mentions"}
        {...rest}
      >
        <Mention
          data={fetchUserMentions}
          className={commentBoxStyles?.["mentions__mention"]}
          trigger={"@"}
        />
      </MentionsInput>
    </div>
  );
}

export default CommentBox;
