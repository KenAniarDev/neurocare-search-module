import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const data = [
  "Acetaminopen",
  "Acetaminopen(Mapan)",
  "Acetaminopen(Tylenon)",
  "Acetaminopen(Calpol)",
  "Acetaminopen(Panadol)",
  "Acetaminopen(Calpol)",
];

export default function Search() {
  return (
    <div className="w-[400px] shadow-2xl rounded-3xl overflow-hidden bg-white">
      {/* Input */}
      <div className="w-full relative">
        <div className="p-4 absolute top-0 left-0">
          <FiSearch className="text-lg" />
        </div>
        <div className="relative flex pl-[42px] w-full h-[50px] items-center flex-wrap py-2.5 gap-2 overflow-y-auto">
          <span className="bg-[#1949D9] text-white px-2 py-0.5 rounded">
            Acetaminopen
          </span>
          <span className="bg-[#1949D9] text-white px-2 py-0.5 rounded">
            Acetaminopen
          </span>
          <span className="bg-[#1949D9] text-white px-2 py-0.5 rounded">
            Acetaminopen
          </span>
          <input className="outline-none text-lg caret-gray-500 text-gray-500" />
          <div className="fixed -translate-y-1/2 top-1/2 right-3 cursor-pointer">
            <GrFormClose className="text-2xl text-[#1949D9]" />
          </div>
        </div>
      </div>
      {/* Menu */}
      <div className="relative pb-14">
        <p className="pl-[42px] pr-2 font-bold pb-1">
          What generic name/brand name?
        </p>
        <ul>
          {data.map((item, i) => (
            <li
              className="pl-[42px] pr-2 hover:bg-[#EDEFFA] transition cursor-pointer py-1.5 hover:text-gray-900 text-gray-500"
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="absolute bottom-0 left-0 pl-[42px] right-0 bg-[#1949D9] h-12 flex items-center">
          <p className="text-white text-xs">
            Powered by <strong className="text-base">NeuroCare.AI</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
