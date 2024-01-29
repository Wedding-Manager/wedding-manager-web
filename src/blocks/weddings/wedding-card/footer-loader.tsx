import React from "react";

function FooterLoader() {
  return (
    <div className="bg-[#f0f0f0] animate-pulse shadow rounded-md  w-full mt-1 h-[50px]">
      <div className="animate-pulse flex ">
        <div className="rounded-full bg-slate-200 h-full w-full"></div>
      </div>
    </div>
  );
}

export default FooterLoader;
