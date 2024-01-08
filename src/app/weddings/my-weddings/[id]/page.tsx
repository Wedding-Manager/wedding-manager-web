import MyWeddingCarousel from "@/blocks/weddings/my-wedding/carousel";
import MyWeddingGuests from "@/blocks/weddings/my-wedding/guests";
import { fetchWeddingById } from "@/stores/weddings";
import { PageProps } from "@/types/global";
import { MyWeddingPageProps } from "@/types/weddings";
import { cookies } from "next/headers";
import React from "react";

const MyWedding = async (props: PageProps & MyWeddingPageProps & any) => {
  const { params } = props;
  const { id } = params;
  const authCookie = cookies().get(process.env.ACCESS_TOKEN_KEY!)?.value;
  const wedding = await fetchWeddingById(id, { authCookie: authCookie });

  return (
    <div className={`p-6`}>
      <h1 className={`font-serif font-extrabold text-4xl w-ful text-center`}>
        {wedding?.title}
      </h1>
      <div className={`py-4 px-2`}>
        <MyWeddingCarousel gallery={wedding?.photo_gallery} />
      </div>
      <div>
        <MyWeddingGuests weddingId={id} />
      </div>
    </div>
  );
};

export default MyWedding;
