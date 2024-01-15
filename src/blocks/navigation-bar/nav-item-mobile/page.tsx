import Link from "next/link";
import React from "react";

function NavItemMobile(props: { href: string; label: string }) {
  const { href, label } = props;
  return (
    <Link
      className={`whitespace-nowrap block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded`}
      href={href}
    >
      {label}
    </Link>
  );
}

export default NavItemMobile;
