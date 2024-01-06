import React from "react";
import Logo from "../../components/logos/app-logo";
import NavItem from "./nav-item/page";

import dynamic from "next/dynamic";
const UserProfile = dynamic(() => import("./profile/page"), { ssr: false });

function NavigationBar(): JSX.Element {
  return (
    <div
      className={`w-full bg-fuchsia-600 flex justify-between items-center pl-10 pr-16 py-1 fixed top-0 z-[9999] `}
    >
      <div>
        <Logo />
      </div>
      <div className="flex gap-6">
        <NavItem href={"/weddings/create"} label={"Create Wedding"} />
        <NavItem href={"/weddings/my-weddings"} label={"My Weddings"} />
        <UserProfile />
      </div>
    </div>
  );
}

export default NavigationBar;
