import React from "react";
import Logo from "../../components/logos/app-logo";
import NavItem from "./nav-item/page";

function NavigationBar(): JSX.Element {
  return (
    <div
      className={`w-full bg-fuchsia-600 flex justify-between items-center pl-10 pr-16 py-1 fixed top-0 z-[9999] `}
    >
      <div>
        <Logo />
      </div>
      <div>
        <NavItem href="/signup" label="Sign Up" />
      </div>
    </div>
  );
}

export default NavigationBar;
