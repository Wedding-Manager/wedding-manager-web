import React from "react";
import dayjs from "dayjs";
import { InvitationStatus } from "./weddings";

export interface InvitationCard {
  _id: string;
  title: string;
  venue: string;
  wedding_date: string;
  bride: string;
  groom: string;
}

export interface Invitation {
  _id: string;
  status: InvitationStatus;
  wedding: InvitationCard;
  updated_on: string;
}

export type InvitationsDashboardProps = {
  invitations: Invitation[];
  isInvitationsLoading: boolean;
};
export type InvitationCardProps = {
  status: InvitationStatus;
  wedding: InvitationCard;
};
