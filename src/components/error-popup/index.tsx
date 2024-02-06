/* eslint-disable react-hooks/exhaustive-deps */
import { ErrorPopProps } from "@/types/global";
import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { CloseCircle } from "iconsax-react";

const ErrorPopup = (props: ErrorPopProps) => {
  const { isOpen, onClose, message } = props;

  const closeModal = () => {
    onClose?.();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        onClose?.();
      }, 3000);
    }
  }, [isOpen]);

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
      <div className="flex flex-col items-center justify-center bg-red-500 rounded-lg shadow-lg p-6 w-[100vw]">
        <button
          className="absolute top-0 right-0 m-2 p-2 rounded-full bg-red-700 text-white"
          onClick={closeModal}
        >
          <CloseCircle size="32" color="#fff" />
        </button>
        <h2 className="text-xl font-bold mb-4 text-white">Error</h2>
        <p className="text-white">{message}</p>
      </div>
    </Popup>
  );
};

export default ErrorPopup;
