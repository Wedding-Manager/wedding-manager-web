"use client";

import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { UploadImageFormData, UploadImageProps } from "@/types/upload-files";
import { useFieldArray } from "react-hook-form";

export default function UploadImage(props: UploadImageProps): JSX.Element {
  const { formMethods, parentName } = props;
  const { control, register, watch } = formMethods;
  const { fields: images, append } = useFieldArray<any>({
    name: `${parentName}`,
    control: control,
  });
  const defaultTitle = watch()?.title;

  return (
    <div>
      <CldUploadWidget
        uploadPreset={process.env.CLOUDINARY_PRESET_NAME}
        onSuccess={(result: any) => {
          append({
            is_public: false,
            url: result?.info?.url,
            type: "wedding",
            title: defaultTitle || result?.info?.original_filename,
          });
        }}
      >
        {({ open }) => {
          return (
            <button
              className="border-solid bg-purple-500	 px-10  py-2 text-white mt-6 rounded-md  "
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                open();
              }}
            >
              + Upload Images
            </button>
          );
        }}
      </CldUploadWidget>
      <div className={`mt-6`}>
        {images?.map((image: any, index) => {
          return (
            <div key={image?.id} className={`mt-2`}>
              <div className="hidden">
                <input
                  {...register(`${parentName}.${index}.id`)}
                  defaultValue={image?.id}
                />
                <input
                  {...register(`${parentName}.${index}.url`)}
                  defaultValue={image?.url}
                />
                <input
                  {...register(`${parentName}.${index}.type`)}
                  defaultValue={image?.type}
                />
              </div>
              <div className={`py-3`}>
                <span>{`${index + 1}.`}</span>
                <input
                  {...register(`${parentName}.${index}.title`, {
                    required: { value: true, message: "Title is bRequired" },
                  })}
                  defaultValue={image?.title}
                  className="border-none	"
                  placeholder="Give title..."
                />
              </div>

              <CldImage
                width="400"
                height={"400"}
                src={image?.url}
                sizes="400px"
                style={{ width: "400px" }}
                alt="Description of my image"
              />
              <div className={`flex mt-3`}>
                <input
                  type="checkbox"
                  id={`${parentName}.${index}.is_public`}
                  {...register(`${parentName}.${index}.is_public`)}
                  defaultValue={image?.is_public}
                  defaultChecked={image?.is_public}
                />
                <span className={`ml-4`}>Accessible to Public.</span>
              </div>
            </div>
          );
        })}
      </div>
      {}
    </div>
  );
}
