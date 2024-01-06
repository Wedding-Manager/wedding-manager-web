import WeddingCard from "@/blocks/weddings/wedding-card/page";
import { fetchMyWeddings } from "@/stores/weddings";
import React, { Fragment } from "react";
import { cookies } from "next/headers";

const MyWeddings = async () => {
  const authCookie = cookies().get(process.env.ACCESS_TOKEN_KEY!)?.value;
  const myWeddings = await fetchMyWeddings(authCookie);

  return (
    <div className="grid grid-cols-auto  w-full px-20 ">
      {myWeddings?.map((wedding) => {
        return (
          <Fragment key={wedding?._id}>
            <WeddingCard wedding={wedding} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default MyWeddings;
