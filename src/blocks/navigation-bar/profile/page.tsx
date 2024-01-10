/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fetchUser, useGlobalStore } from "@/stores/global";
import { User } from "@/types/global";

import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import React, { useEffect } from "react";
import Popup from "reactjs-popup";

function UserProfile() {
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
    <Popup
      trigger={
        <div className="menu-item">
          <div className={`	 `}>
            {isUserLogedIn ? (
              <div className="whitespace-nowrap text-white px-2 rounded-full border-spacing-1 border-2	">
                {userName?.[0]}
              </div>
            ) : (
              <Link className="whitespace-nowrap text-white	" href={"/login"}>
                Login
              </Link>
            )}
          </div>{" "}
        </div>
      }
      position="bottom center"
      on={["hover", "click", "focus"]}
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none", zIndex: 9999 }}
      arrow={false}
    >
      <div className={`w-fit bg-blue-500 text-white px-4 mt-4 py-2 `}>
        <div className="menu-item  cursor-pointer hover:text-black">
          {" "}
          logout
        </div>
        <div className="menu-item  cursor-pointer hover:text-black">
          {" "}
          Invitations
        </div>
        <div className="menu-item cursor-pointer hover:text-black">
          Weddings
        </div>
      </div>
    </Popup>
  );
}

export default UserProfile;
