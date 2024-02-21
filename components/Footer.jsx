import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { socials } from "../constants";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full mt-10 p-3 px-5 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-5 lg:gap-16">
          <div className="flex flex-col items-start gap-3">
            <h3>
              COL<span>YZE</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam culpa, sequi voluptatem ipsum sapiente esse distinctio
              incidunt ducimus autem.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">About Us</p>
            <div className="flex flex-col items-start gap-2">
              <p className="hover:text-primary cursor-pointer">Home</p>
              <p className="hover:text-primary cursor-pointer">About Us</p>
              <p className="hover:text-primary cursor-pointer">Our Project</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Contact Us</p>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <IoMdMail size={15} />
                <p>colyze1@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt size={15} />
                <p>+91 8375005953</p>
              </div>

              <div className="flex items-center gap-2">
                <FaLocationDot size={15} />
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Privacy</p>
            <div className="flex flex-col items-start gap-2">
              <p>FAQ</p>
              <p>Terms</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
          <p>2024 - All Rights Reserved</p>
          <div className="flex items-center gap-3 text-xl">
            {socials.map((social, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary rounded-full text-background p-2">
                  <div>{social.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
