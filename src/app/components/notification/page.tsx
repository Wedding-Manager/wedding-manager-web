import React, { useState } from "react";

function Notification(props: { type: "error" | "success"; message: string }) {
  const { type, message } = props;
  const [triggerNotification, setTriggerNotification] = useState<boolean>();
  return (
    <div
      className={`${
        type === "error" ? "bg-red-700" : "bg-green-300"
      } fixed bottom-0 left-[50%]`}
    >
      {message}
    </div>
  );
}

export default Notification;
