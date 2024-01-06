import { User } from "./global";

type UserOption = { label: string; value: string; data: User };

export type WeddingFormData = {
  title: string;
  bribe: UserOption;
  groom: UserOption;
  wedding_date: string;
  avenue: string;
};

export type MyWeddingData = {
  _id: string;
  title: string;
  bribe: User;
  groom: User;
  food_gallery: string[];
  photo_gallery: string[];
  pending_invitations: string[];
  guests: string[];
  wedding_date: string;
  avenue: string;
  created_by: string;
  created_on: string;
  updated_on: string;
  // Add other wedding properties if needed
};
