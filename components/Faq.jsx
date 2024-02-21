"use client";
import React, { useState } from "react";
import classname from "classname";
import HeadingButton from "./HeadingButton";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Image from "next/image";
const Accordion = ({ faq }) => {
  const list = faq.content
    ? faq.content.map((listItem, index) => {
        return { ...listItem, open: false, index: index };
      })
    : [];

  const openOrClose = (item) => {
    setAccordion((prevState) =>
      prevState.map((listItem) => {
        if (item.index === listItem.index) {
          return {
            ...listItem,
            open: !listItem.open,
          };
        } else {
          return listItem; 
        }
      })
    );
  };

  const questionBorder = (index, item, list) => {
    if (index < list.length - 1 && !item.open) {
      return true;
    } else {
      return false;
    }
  };

  const [accordion, setAccordion] = useState(list);

  return (
    <div className="w-full px-4 lg:px-10" id="faq">
      <div className="container mx-auto">
        <div className="flex items-start">
          <HeadingButton title="FAQ" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-64 mt-10">
          <Image src={faq.image} alt="faq" width={500} height={500} />

          <div className="md:min-w-[500px]">
            {accordion.map((item, index) => {
              if (!item) {
                return null;
              }
              return (
                <div key={index}>
                  <h4 className="font-heading">
                    <button
                      className={classname(
                        "flex w-full items-center justify-between border border-gray-200 bg-background px-6 py-4",
                        {
                          "rounded-t-2xl": index === 0,
                          "bg-gray-600": item.open,
                          "border-b-0": questionBorder(index, item, list),
                        }
                      )}
                      onClick={() => openOrClose(item)}>
                      <span className="text-primary">{item.title}</span>
                      <MdOutlineKeyboardArrowDown
                        size={25}
                        className={classname(
                          "transition-transform duration-500",
                          { "rotate-180": item.open }
                        )}
                      />
                    </button>
                  </h4>

                  <div
                    className={classname("bg-background", {
                      hidden: !item.open,
                    })}>
                    <div
                      className={classname("bg-background p-5", {
                        "border-b-0": index < list.length - 1,
                      })}>
                      <p className="max-w-[500px]">{item.ans}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
