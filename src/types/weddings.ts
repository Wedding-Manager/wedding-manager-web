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
  photo_gallery: UploadImageFormData;
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

  // Add other wedding properties if needed
};
