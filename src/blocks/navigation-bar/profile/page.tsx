/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fetchUser, useGlobalStore } from "@/stores/global";
import { User } from "@/types/global";
import api from "@/utils/api";

import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import Popup from "reactjs-popup";

function UserProfile() {
  const user = useGlobalStore();
  const isUserLogedIn = isLogedIn();
  const { userName, setUser } = user;
  const router = useRouter();

  useEffect(() => {
    const updateUser = async () => {
      const userData: User = await fetchUser();
      setUser({
        userId: userData?._id,
        userName: userData?.name,
        userRole: userData?.role,
      });
    };
    updateUser();
  }, []);

  return (
    <div className={`hidden lg:inline-block`}>
      {isUserLogedIn ? (
        <Popup
          trigger={
            <div className="menu-item mr-[25px]">
              <div className={`	 `}>
                <div className="whitespace-nowrap text-white px-2 rounded-full border-spacing-1 border-2	">
                  {userName?.[0]}
                </div>
              </div>{" "}
            </div>
          }
          position="bottom center"
          on={["hover", "click", "focus"]}
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{
            padding: "0px",
            border: "none",
            zIndex: 9999,
            marginRight: "25px",
          }}
          arrow={false}
        >
          <button
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200  w-fit"
            onClick={async () => {
              await api({ internal: true }).post(`/api/logout`);
              router.refresh();
            }}
          >
            Logout
          </button>
        </Popup>
      ) : (
        <Fragment>
          <Link
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="/login"
          >
            Sign In
          </Link>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="/signup"
          >
            Sign up
          </Link>
        </Fragment>
      )}
    </div>
  );
}

export default UserProfile;
