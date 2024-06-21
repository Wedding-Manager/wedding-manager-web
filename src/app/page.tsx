import WeddingCard from "@/blocks/weddings/wedding-card/page";
import { fetchPublicWeddings } from "@/stores/weddings";
import React, { Fragment } from "react";
import { cookies } from "next/headers";
import LazyLoader from "@/components/lazy-component";

const MyWeddings = async () => {
  const authCookie = cookies().get(process.env.ACCESS_TOKEN_KEY!)?.value;
  const weddingCollections = await fetchPublicWeddings(authCookie);

  return (
    <div className="flex flex-col items-center  w-full px-2 sm:px-10 md:px-20 ">
      {weddingCollections?.map((wedding) => {
        return (
          <Fragment key={wedding?._id}>
            {/* <LazyLoader title={wedding?.title} id={wedding._id}> */}
            <WeddingCard wedding={wedding} />
            {/* </LazyLoader> */}
          </Fragment>
        );
      })}
    </div>
  );
};

export default MyWeddings;
