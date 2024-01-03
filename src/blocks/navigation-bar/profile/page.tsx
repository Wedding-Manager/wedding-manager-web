"use client";

import { isLogedIn } from "@/utils/run-time";
import Link from "next/link";
import React from "react";

function UserProfile() {
  const isUserLogedIn = isLogedIn();
  return (
    <div>
      {isUserLogedIn ? (
        <div className="whitespace-nowrap text-white	">User</div>
      ) : (
        <Link className="whitespace-nowrap text-white	" href={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
}

export default UserProfile;
