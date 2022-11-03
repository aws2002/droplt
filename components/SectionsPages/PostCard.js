import React from "react";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BiErrorCircle } from "react-icons/bi";

export default function PostCard() {
  return (
    <section className="px-4 text-black my-20">
      <div className="container">
        <div className="box-post-card bg-[#AAAAAA] md:p-20 p-8 md:pb-0 ">
          <div className="grid grid-cols-2">
            <div className="md:col-span-1 col-span-full">
              <h1 className="md:text-6xl text-5xl md:w-[70%] w-[100%] my-5">
              AI-powered crypto asset investment
              </h1>

              <p className="text-[#555555] whitespace-pre-line text-md md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. 
                
                
              </p>
              <p className="text-[#555555] whitespace-pre-line text-md md:text-lg mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. 
                
                
              </p>
              <button className="text-main my-5 rounded-2xl font-medium md:text-xl text-lg inline-block">
                Get Notified{" "}
                <HiOutlineArrowNarrowRight className=" inline-block text-3xl ml-1" />
              </button>

              <div className="border-l-2 border-[#000]  px-10">
            

              <h3 className="my-1 text-xl font-semibold">Quote</h3>
              <p className=" text-[#555555] text-md md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            </div>
            <div className="md:col-span-1 md:block hidden">
                <div>
                    <img src="./image.svg" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
