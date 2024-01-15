/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fetchUser, useGlobalStore } from "@/stores/global";
import { User } from "@/types/global";

import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import Popup from "reactjs-popup";

function UserProfileMobile() {
  const user = useGlobalStore();
  const isUserLogedIn = isLogedIn();
  const { userName, setUser } = user;

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
    <Fragment>
      {isUserLogedIn ? (
        <Popup
          trigger={
            <div className="menu-item">
              <div className={`	 `}>
                <div className="whitespace-nowrap text-black  block  py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl	">
                  {userName}
                </div>
              </div>{" "}
            </div>
          }
          position="right center"
          on={["hover", "click", "focus"]}
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none", zIndex: 9999 }}
          arrow={false}
        >
          <div className={`w-full bg-blue-500 text-white px-4   py-2 `}>
            <div className="menu-item  cursor-pointer hover:text-black">
              {" "}
              logout
            </div>
          </div>
        </Popup>
      ) : (
        <Fragment>
          <Link
            className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
            href={"/login"}
          >
            Sign in
          </Link>
          <Link
            className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            href="/signup"
          >
            Sign Up
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
}

export default UserProfileMobile;
