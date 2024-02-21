import React from "react";
import Button from "./Button";
import HeadingButton from "./HeadingButton";

const WhyUs = ({ whyUs }) => {
  return (
    <div className="w-full px-4 lg:px-10 py-10">
      <div className="container mx-auto">
        <div className="flex items-start">
          <HeadingButton title={whyUs.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-10 gap-10">
          {whyUs.content.map((list, index) => {
            return (
              <div key={index} className="flex item-start gap-5">
                <div className="flex items-start gap-5">
                  <h2 className="text-secondary">{list.index}</h2>
                  <div className="flex flex-col items-start gap-2">
                    <h4>{list.title}</h4>
                    <p className="max-w-[500px] text-justify">{list.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
