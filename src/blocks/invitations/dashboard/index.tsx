"use client";

import React, { useEffect, useState } from "react";
import InvitationCard from "./card";
import { getMyInvitations } from "@/stores/invitations";
import { Invitation } from "@/types/invitation";

const InvitationsDashboard = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [isInvitationsLoading, setIsInvitationsLoading] =
    useState<boolean>(true);
  useEffect(() => {
    const updateInvitations = async () => {
      try {
        const invitations = await getMyInvitations();
        setInvitations(invitations);
      } catch (err) {
        console.log("ERROR", err);
      } finally {
        setIsInvitationsLoading(false);
      }
    };
    updateInvitations();
  }, []);

  return (
    <div className="flex flex-wrap justify-start">
      {!invitations?.length ? (
        <div className={`w-full  h-[80vh] flex items-center justify-center `}>
          No Invitations found
        </div>
      ) : null}
      {invitations?.map((invitation) => (
        <InvitationCard
          key={invitation?._id}
          wedding={invitation.wedding}
          status={invitation?.status}
        />
      ))}
    </div>
  );
};

export default InvitationsDashboard;
