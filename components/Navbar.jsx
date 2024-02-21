"use client";
import { menuLinks } from "@/constants";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Button from "./Button";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20 px-4 lg:px-10">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Link href="/">
            <h2>
              COL<span>YZE</span>
            </h2>
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-lg">
            {menuLinks.map((list, index) => {
              return (
                <ul
                  key={index}
                  className="hover:text-secondary duration-500 ease-out">
                  <Link href={list.path}>
                    <li>{list.label}</li>
                  </Link>
                </ul>
              );
            })}
          </div>

          <Link href="/signup">
            <Button title="Login / SignUp" className="hidden lg:flex" />
          </Link>

          <div
            className="block lg:hidden bg-secondary text-background rounded-full p-2"
            onClick={handleChange}>
            {nav ? <IoCloseSharp size={30} /> : <MdOutlineMenu size={30} />}
          </div>

          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
            }>
            <Link href="/" onClick={handleChange}>
              <h2 className="text-background">
                COL<span>YZE</span>
              </h2>
            </Link>
            <div className="flex flex-col items-center justify-center w-full h-full gap-10">
              {menuLinks.map((link, index) => (
                <ul
                  key={index}
                  className="text-xl text-background"
                  onClick={handleChange}>
                  <Link
                    href={link.path}
                    className="text-background hover:text-secondary text-center duration-200">
                    <li>{link.label}</li>
                  </Link>
                </ul>
              ))}

              <Link href="/signup" onClick={handleChange}>
                <Button title="Login / SignUp" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
