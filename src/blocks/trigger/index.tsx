import { Fragment } from "react";
import Popup from "reactjs-popup";

export const Trigger = (props: {
  children?: any;
  isDisabled?: boolean;
  triggerContent: JSX.Element;
}) => {
  const { children, triggerContent, isDisabled } = props;

  return (
    <Popup
      trigger={<Fragment>{children}</Fragment>}
      position="top center"
      on={["hover", "click", "focus"]}
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none", zIndex: 9999 }}
      arrow={false}
    >
      hiii {triggerContent}
    </Popup>
  );
};
