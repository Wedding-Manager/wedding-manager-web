"use client";

import { useGlobalStore } from "@/stores/global";
import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import React from "react";

function UserProfile() {
  const user = useGlobalStore();
  const isUserLogedIn = isLogedIn();
  const { userName } = user as any;
  console.log("isUserLogedIn", isUserLogedIn, user, userName);

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
