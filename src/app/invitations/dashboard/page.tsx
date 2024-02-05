/* eslint-disable react-hooks/exhaustive-deps */

// import InvitationsDashboard from "@/blocks/invitations/dashboard";

import { InvitationsDashboardLoader } from "@/blocks/invitations/dashboard/card";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";

const InvitationsDashboard = dynamic(
  () => import("@/blocks/invitations/dashboard"),
  {
    loading: () => (
      <Fragment>
        <InvitationsDashboardLoader />
      </Fragment>
    ),
  }
);

function Dashboard() {
  return (
    <div>
      <InvitationsDashboard />
    </div>
  );
}

export default Dashboard;
