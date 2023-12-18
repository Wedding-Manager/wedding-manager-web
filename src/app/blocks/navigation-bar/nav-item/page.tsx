import Link from "next/link";
import React from "react";

function NavItem(props: { href: string; label: string }) {
  const { href, label } = props;
  return (
    <Link className="whitespace-nowrap text-white	" href={href}>
      {label}
    </Link>
  );
}

export default NavItem;
