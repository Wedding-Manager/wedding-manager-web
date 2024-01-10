"use client";

import CustomInput from "@/components/input";
import UserLookup from "@/components/look-up";
import { postInvitation } from "@/stores/weddings";
import { User } from "@/types/global";
import { InvitationModalProps } from "@/types/weddings";
import { CloseCircle } from "iconsax-react";
import React, { useState } from "react";
import { Control, FieldValues, useForm } from "react-hook-form";
import Popup from "reactjs-popup";

function InvitationModal(props: InvitationModalProps): JSX.Element {
  const { isModalOpen, setIsModalOpen, weddingContext } = props;
  const { weddingId } = weddingContext;
  const { register, handleSubmit, control, watch, formState } = useForm<{
    guest?: { label: string; value: string; data: User };
    email?: string;
  }>();
  const { errors } = formState;

  const email = watch("email");
  const guest = watch("guest");
  const isSubmitDisabled = !email && !guest;

  return (
    <div>
      <Popup
        open={isModalOpen}
        closeOnDocumentClick
        onClose={() => setIsModalOpen(false)}
      >
        <div
          className={`h-[100vh] w-[100vw] flex items-center justify-center relative `}
        >
          <div className={`bg-slate-300 p-10 w-[50%] relative`}>
            <div
              className={`absolute top-1 right-2 cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              <CloseCircle size="32" color="black" />
            </div>
            <form
              onSubmit={handleSubmit(async (data) => {
                const invitation = await postInvitation({
                  weddingId: weddingId,
                  data,
                });
                setIsModalOpen(false);
              })}
              className={`flex flex-col  mx-auto items-right gap-6 `}
            >
              <p className={`font-sans text-lg`}>
                Invite through either account or email{" "}
              </p>
              <UserLookup
                control={control as unknown as Control<FieldValues>}
                name="guest"
                label="Guest"
              />
              <p className={`font-bold`}>Or</p>
              <CustomInput
                {...register("email")}
                label={"Email"}
                isInvalid={!!errors?.email}
                type="email"
                placeholder="Guest email"
              />
              <button
                className={`bg-blue-500 ${
                  !isSubmitDisabled ? " hover:bg-blue-700" : ""
                } text-white font-bold py-2 px-4 rounded-lg w-[50%] ${
                  isSubmitDisabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                type="submit"
                disabled={(!email && !guest) || formState?.isSubmitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default InvitationModal;
