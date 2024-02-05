import WeddingCard from "@/blocks/weddings/wedding-card/page";
import { fetchMyWeddings } from "@/stores/weddings";
import React, { Fragment } from "react";
import { cookies } from "next/headers";
import Link from "next/link";

const MyWeddings = async () => {
  const authCookie = cookies().get(process.env.ACCESS_TOKEN_KEY!)?.value;
  const myWeddings = await fetchMyWeddings(authCookie);

  return (
    <div className="flex flex-col items-center  w-full px-20 ">
      {!myWeddings?.length ? (
        <div
          className={`w-full  h-[80vh] flex items-center justify-center flex-col `}
        >
          No Weddings found
          <div className="px-6 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/weddings/create">+ Create</Link>
            </button>
          </div>
        </div>
      ) : null}
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
