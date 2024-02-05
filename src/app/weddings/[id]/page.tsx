import MyWeddingCarousel from "@/blocks/weddings/my-wedding/carousel";
// import MyMarriageDescription from "@/blocks/weddings/my-wedding/description";
import { fetchUserWeddingStatus, fetchWeddingById } from "@/stores/weddings";
import { PageProps } from "@/types/global";
import { MyWeddingPageProps } from "@/types/weddings";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import React from "react";
import { DEFAULT_WEDDING_DESCRIPTION } from "../create/constants";

const MyWeddingGuests = dynamic(
  () => import("@/blocks/weddings/my-wedding/guests"),
  {
    ssr: false,
  }
);
const MyMarriageDescription = dynamic(
  () => import("@/blocks/weddings/my-wedding/description"),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);
const MyWedding = async (props: PageProps & MyWeddingPageProps & any) => {
  const { params, searchParams } = props;
  const { id } = params;
  const { guest_email, guest_id } = searchParams;
  const authCookie = cookies().get(process.env.ACCESS_TOKEN_KEY!)?.value;
  const userId = cookies().get(process.env.USER_ID_KEY!)?.value;
  const wedding = await fetchWeddingById(id, { authCookie: authCookie });

  const userWeddingInvitations = await fetchUserWeddingStatus({
    weddingId: id,
    authCookie,
    query:
      guest_id || userId
        ? `guest_id=${guest_id || userId}`
        : `email=${guest_email}`,
  });

  return (
    <div className={`p-6`}>
      <h1 className={`font-serif font-extrabold text-4xl w-ful text-center`}>
        {wedding?.title}
      </h1>
      <div className={`py-4 px-2`}>
        <MyWeddingCarousel gallery={wedding?.photo_gallery} />
      </div>
      <div>
        <MyMarriageDescription
          description={
            wedding?.wedding_description?.message || DEFAULT_WEDDING_DESCRIPTION
          }
        />
      </div>
      <div>
        <MyWeddingGuests
          userWeddingInvitations={userWeddingInvitations}
          searchParams={searchParams}
          weddingId={id}
          accessControl={wedding?.access_control}
        />
      </div>
    </div>
  );
};

export default MyWedding;
