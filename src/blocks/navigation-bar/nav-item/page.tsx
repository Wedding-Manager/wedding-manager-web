import Link from "next/link";
import React from "react";
import { CSSRuleObject } from "tailwindcss/types/config";

function NavItem(props: { href: string; label: string; className?: string }) {
  const { href, label, className } = props;
  return (
    <Link
      className={`whitespace-nowrap text-white hover:text-gray-500 ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
}

export default NavItem;
