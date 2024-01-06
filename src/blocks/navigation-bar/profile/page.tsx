/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fetchUser, useGlobalStore } from "@/stores/global";
import { User } from "@/types/global";

import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import React, { useEffect } from "react";

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
    <div>
      {isUserLogedIn ? (
        <div className="whitespace-nowrap text-white	">{userName}</div>
      ) : (
        <Link className="whitespace-nowrap text-white	" href={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
