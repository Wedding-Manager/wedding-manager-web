import React from "react";
import { Mention, MentionsInput } from "react-mentions";
import mentionStyle from "./wedding-card.module.scss";

function MarriageDescription(props: { description: string }) {
  const { description } = props;

  return (
    <div>
      <MentionsInput
        value={description}
        className={mentionStyle[`mentionsInput`]}
        disabled
      >
        <Mention
          trigger="@"
          data={[]}
          className={mentionStyle?.["mentions__mention"]}
        />
      </MentionsInput>
    </div>
  );
}

export default MarriageDescription;
