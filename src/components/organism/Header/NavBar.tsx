import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex-between">
      <Link href={"/"}>
        <Image src={"/logo.svg"} alt="Logo" width={120} height={40} />
      </Link>
      <button className="z-50 px-4 py-2 rounded-full border font-semibold hover-effect bg-white text-primary-blue cursor-pointer">
        Sign-Up
      </button>
    </nav>
  );
};

export default NavBar;
