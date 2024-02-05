"use client";

import React from "react";
import { Mention, MentionsInput } from "react-mentions";
import descStyle from "./description.module.scss";

function MyMarriageDescription(props: { description: string }) {
  const { description } = props;

  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-lg p-4 text-lg mt-8 bg-white`}
    >
      <MentionsInput
        value={description}
        className={descStyle[`mentionsInput`]}
        disabled
      >
        <Mention
          trigger="@"
          data={[]}
          className={descStyle?.["mentions__mention"]}
        />
      </MentionsInput>
    </div>
  );
}

export default MyMarriageDescription;
