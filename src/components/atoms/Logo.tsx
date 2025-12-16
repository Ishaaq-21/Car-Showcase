import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.svg"} alt="Logo image" width={120} height={80} />
    </Link>
  );
};

export default Logo;
