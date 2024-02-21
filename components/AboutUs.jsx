import React from "react";
import HeadingButton from "./HeadingButton";
import Image from "next/image";

const AboutUs = ({ aboutUs }) => {
  return (
    <div className="w-fulll py-10 px-4 lg:px-10" id="about-us">
      <div className="container mx-auto">
        <div className="flex items-start">
          <HeadingButton title="About Us" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 md:gap-28 mt-5">
          <p className="text-justify max-w-[700px]">{aboutUs.content}</p>
          <Image src={aboutUs.image} width={500} height={500} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
