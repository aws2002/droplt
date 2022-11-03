import React from "react";

import { BiErrorCircle } from "react-icons/bi";

export default function AboutSec() {
  return (
    <section className="px-4">
      <div className="container">
        <div className="box-about hidden md:block bg-[#333333] md:p-20 p-5">
          <div className="grid grid-cols-2">
            <div className="md:col-span-1 col-span-full border-l-2 border-[#555555]  px-10">
              <BiErrorCircle className=" text-6xl"/>

              <h3 className="my-3 text-2xl">News item about the company</h3>
              <p className=" text-[#CCCCCC] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="md:col-span-1 col-span-full border-l-2 border-[#555555]  px-10">
              <BiErrorCircle className=" text-6xl"/>

              <h3 className="my-3 text-2xl">News item about the company</h3>
              <p className=" text-[#CCCCCC] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="box-about block  md:hidden bg-[#333333] md:p-20 p-5">
          <div className="grid grid-cols-1">
            <div className="md:col-span-1 col-span-full border-l-2 border-[#555555]  px-10">
              <BiErrorCircle className=" text-6xl"/>

              <h3 className="my-3 text-2xl">News item about the company</h3>
              <p className=" text-[#CCCCCC] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            
          </div>
        </div>
        <div className="box-about block  md:hidden bg-[#000] md:p-20 p-5">
          <div className="grid grid-cols-1">
            <div className="md:col-span-1 col-span-full border-l-2 border-[#555555]  px-10">
              <BiErrorCircle className=" text-6xl"/>

              <h3 className="my-3 text-2xl">News item about the company</h3>
              <p className=" text-[#CCCCCC] text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
