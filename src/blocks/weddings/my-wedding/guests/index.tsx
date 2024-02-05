/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  fetchInvitations,
  upadateTheInvitationStatus,
} from "@/stores/weddings";
import { User } from "@/types/global";
import { Invitation, MyWeddingGuestsProps } from "@/types/weddings";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { GUSET_TABLE_COLUMNS, INVITE_ACCESS_CONTROL } from "./constants";
import { isLogedIn } from "@/utils/run-time";
import InvitationModal from "../../invitation-modal/page";

function MyWeddingGuests(props: MyWeddingGuestsProps) {
  const { weddingId, userWeddingInvitations, accessControl } = props;
  const [invitations, setInvitations] = useState<Invitation[]>();
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState<boolean>();
  const router = useRouter();
  const searchParam = useSearchParams();
  const isInvitationPending = userWeddingInvitations?.some(
    (invitation) => invitation?.status === "invited"
  );
  const isInvited =
    searchParam?.get("guest_id")?.length ||
    searchParam?.get("guest_email")?.length;
  const canInvite = accessControl?.some(
    (access) => access === INVITE_ACCESS_CONTROL
  );
  useEffect(() => {
    const updateGuests = async () => {
      const guests = await fetchInvitations(weddingId);
      setInvitations(guests);
    };
    updateGuests();
  }, []);

  return (
    <div
      className={`w-[100%] bg-[#f7fafc] flex items-center flex-col justify-center mt-8 py-8 `}
    >
      <p className={`font-bold text-xl py-2 mb-2 `}>Guests</p>

      <div className={`w-[80%]  flex items-center justify-end mb-4 gap-4 `}>
        {isInvitationPending ||
        (!userWeddingInvitations?.length && isInvited) ? (
          <Fragment>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg`}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (isLogedIn()) {
                  const updates = await upadateTheInvitationStatus({
                    weddingId,
                    payload: { status: "accepted" },
                  });
                  router?.refresh();
                } else {
                  router?.push(
                    `/login?next=${window?.location?.pathname}${window?.location?.search}`
                  );
                }
              }}
            >
              Accept Invitaion
            </button>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg`}
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (isLogedIn()) {
                  const updates = await upadateTheInvitationStatus({
                    weddingId,
                    payload: { status: "rejected", reason: "abc" },
                  });
                  console.info("updates", updates);
                  router?.refresh();
                } else {
                  router?.push(
                    `/login?next=${window?.location?.pathname}${window?.location?.search}`
                  );
                }
              }}
            >
              Reject Invitation
            </button>
          </Fragment>
        ) : null}
        {isLogedIn() && canInvite ? (
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg`}
            onClick={async (e) => {
              e.stopPropagation();
              e.preventDefault();
              if (isLogedIn()) {
                setIsInvitationModalOpen(true);
              }
            }}
          >
            Invite Guest
          </button>
        ) : null}
      </div>

      <table className={`border-collapse border  border-slate-400  w-[80%] `}>
        <tr className={`bg-[#f7fafc] py-4 `}>
          {GUSET_TABLE_COLUMNS?.map((col) => {
            return (
              <th key={col?.heading} className={`border border-slate-300 py-4`}>
                {col?.heading}
              </th>
            );
          })}
        </tr>
        {invitations?.map((invitation, guestIndex) => {
          return (
            <tr key={invitation?._id} className={`bg-white py-4`}>
              {GUSET_TABLE_COLUMNS?.map((col) => {
                return (
                  <td
                    key={`${invitation?._id}-col-${col?.heading}`}
                    className={`border border-slate-300 pl-8 py-2`}
                  >
                    {col?.cell(invitation, guestIndex)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
      <InvitationModal
        isModalOpen={isInvitationModalOpen!}
        setIsModalOpen={(open) => setIsInvitationModalOpen(open)}
        weddingContext={{
          weddingId: weddingId,
        }}
      />
    </div>
  );
}

export default MyWeddingGuests;
