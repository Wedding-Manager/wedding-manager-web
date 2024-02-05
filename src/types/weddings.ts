import { create } from "zustand";
import { User } from "./global";
import { UploadImageFormData } from "./upload-files";

type UserOption = { label: string; value: string; data: User };

export type Mention = {
  id: string;
  display: string;
};

export type Comment = {
  message: string;
  mentions?: Mention[];
  _id?: string;
  replies?: Replies[];
  created_by?: User;
  created_on?: string;
  parent?: string;
};
export type Replies = Comment;

export type WeddingFormData = {
  title: string;
  bribe: UserOption;
  groom: UserOption;
  wedding_date: string;
  avenue: string;
  is_public: boolean;
  photo_gallery: UploadImageFormData[];
  wedding_description: string | Comment;
};

export type MyWeddingData = {
  _id: string;
  title: string;
  bribe: User;
  groom: User;
  food_gallery: UploadImageFormData[];
  photo_gallery: UploadImageFormData[];
  pending_invitations: string[];
  guests: string[];
  wedding_date: string;
  avenue: string;
  created_by: string;
  created_on: string;
  updated_on: string;
  is_public: boolean;
  likes: string[];
  comments: Comment;
  wedding_description: Comment;
  access_control?: string[];
};

export type LikeStatus = "Already updated" | "updated";
export type LikeType = {
  count: number;
  status?: LikeStatus;
  is_liked?: boolean;
};

export type MyWeddingPageProps = { props: any };

export type MyWeddingCarouselCardProps = {
  gallery: UploadImageFormData;
};

export type MyWeddingCarouselProps = {
  gallery: UploadImageFormData[];
};

export type MyWeddingGuestsProps = {
  weddingId: string;
  searchParams: { [query: string]: string };
  userWeddingInvitations?: Invitation[];
  accessControl?: string[];
};
export type InvitationStatus = "invited" | "accepted" | "rejected" | "";

export type Invitation = {
  _id: string;
  guest_id?: User;
  wedding_id: string;
  created_on: string;
  updated_on: string;
  email?: string;
  no_of_antendees: number;
  status: InvitationStatus;
  __v: number;
};

export type InvitationModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (status?: boolean) => void;
  weddingContext: { weddingId: string };
};
