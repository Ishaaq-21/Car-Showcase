import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex-between">
      <Image src={"/logo.svg"} alt="Logo" width={120} height={40} />
      <button className="z-50 px-4 py-2 rounded-full border font-semibold hover-effect bg-white text-primary-blue cursor-pointer">
        Sign-Up
      </button>
    </div>
  );
};

export default NavBar;
