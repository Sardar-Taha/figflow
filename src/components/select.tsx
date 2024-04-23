"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const SelectComponent = ({
  placeholder,
  optionsArray,
  className,
}: {
  placeholder: string;
  optionsArray: string[];
  className?: string;
}) => {
  const [dropdownCollapsed, setDropdownCollapsed] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(
    placeholder ? placeholder : ""
  );
  const ref = useRef<any>(null);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownCollapsed &&
        ref.current &&
        dropdownRef.current &&
        !ref.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownCollapsed(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownCollapsed]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setDropdownCollapsed((prev) => !prev)}
        className={twMerge(
          `w-full bg-transparent border border-borderDarkColor cursor-pointer relative px-4 h-12 placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-30 mt-2 ${
            dropdownCollapsed && "border-white border-opacity-30"
          }`,
          className
        )}
      >
        <IoIosArrowDown
          className={`absolute top-1/2 -translate-y-1/2 text-white text-opacity-30 transition-all duration-300 ${
            dropdownCollapsed ? "rotate-180" : "rotate-0"
          } text-xl z-[1] right-2`}
        />
        <p
          className={`relative top-1/2 -translate-y-1/2 text-white ${
            selectedValue === placeholder
              ? "text-opacity-50"
              : "text-opacity-100"
          }`}
        >
          {selectedValue}
        </p>
      </div>
      {dropdownCollapsed && (
        <div
          ref={dropdownRef}
          className="absolute flex flex-col z-[2] bg-[#040816] gap-2 left-0 top-14 rounded-[3px] w-full max-h-[200px] overflow-y-auto bg-transparent border border-borderDarkColor py-2"
          onClick={() => setDropdownCollapsed(false)}
        >
          {optionsArray &&
            optionsArray.map((option) => (
              <p
                className={`text-opacity-50 text-white hover:bg-white hover:bg-opacity-5 cursor-pointer select-none px-4 py-1 ${
                  selectedValue === option
                    ? "bg-white bg-opacity-5"
                    : "bg-transparent"
                }`}
                key={option}
                onClick={() => {
                  setSelectedValue(option);
                  setDropdownCollapsed(false);
                }}
              >
                {option}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
