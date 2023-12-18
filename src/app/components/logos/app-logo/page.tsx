import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center bg-white px-2 rounded-full">
      <Image
        src={`/wedding-manager.svg`}
        alt={"WeddingManager"}
        width={70}
        height={50}
      />
      <span className="ml-[-25px] "> Wedding Manager</span>
    </Link>
  );
}

export default Logo;
