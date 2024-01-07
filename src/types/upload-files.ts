import { UseFormReturn } from "react-hook-form";

export type UploadImageProps = {
  formMethods: UseFormReturn<any>;
  parentName: string;
};

export type GalleryType = "wedding" | "food";

export type UploadImageFormData = {
  is_public: boolean;
  url: string;
  id: string;
  type: GalleryType;
  title: string;
};
