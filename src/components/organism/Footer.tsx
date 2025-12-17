import React from "react";
import Container from "../common/Container";
import Logo from "../atoms/Logo";
import Link from "next/link";
import { about, company, Socials } from "@/src/data/footer";

const Footer = () => {
  return (
    <Container className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 border-y border-black/20">
        <div className="flex-2">
          <Logo />
          <p className="text-lg font-semibold text-black/40 mt-4">
            CarHub 2025
          </p>
          <p className="text-lg font-semibold text-black/40 mt-2">
            All right Reserved &copy;
          </p>
        </div>
        <div className="mt-10 flex-2 flex flex-col gap-y-5 md:flex-row items-start md:items-center justify-between md:self-end">
          <div>
            <h2 className="font-semibold text-black/70 text-xl">About</h2>
            {about.map((link) => (
              <Link
                key={link}
                href={"/"}
                className="text-black/40 text-lg font-semibold block mt-2 hover:text-primary-blue hover-effect"
              >
                {link}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="font-semibold text-black/70 text-xl">Company</h2>
            {company.map((link) => (
              <Link
                key={link}
                href={"/"}
                className="text-black/40 font-semibold text-lg block mt-2 hover:text-primary-blue hover-effect"
              >
                {link}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="font-semibold text-black/70 text-xl">Socials</h2>
            {Socials.map((link) => (
              <Link
                key={link}
                href={"/"}
                className="text-black/40 font-semibold text-lg block mt-2 hover:text-primary-blue hover-effect"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10 flex justify-between items-center">
        <p>@ 2025 All Rights Reserved</p>
        <div className="flex gap-5">
          <Link
            href={"/"}
            className="text-black/50 hover:text-primary-blue hover-effect"
          >
            Privacy & Policy
          </Link>
          <Link
            href={"/"}
            className="text-black/50 hover:text-primary-blue hover-effect"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
