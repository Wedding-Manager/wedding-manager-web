import { User } from "./global";
import { UploadImageFormData } from "./upload-files";

type UserOption = { label: string; value: string; data: User };

export type WeddingFormData = {
  title: string;
  bribe: UserOption;
  groom: UserOption;
  wedding_date: string;
  avenue: string;
  is_public: boolean;
  photo_gallery: UploadImageFormData[];
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
