import React from "react";

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
function HeroSec() {
  return (
    <section className="HeroSec px-4">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-5 col-span-12 mt-20 flex justify-center items-center">
            <div className="box-hero-item">
              <span className="text-main text-xl">Launching 5.16</span>
              <h1 className="md:text-7xl text-6xl my-5">
                AI-powered crypto asset investment
              </h1>
              <button className="bg-main my-5 rounded-2xl text-black font-medium text-xl inline-block px-5 py-3">
                Get Notified <HiOutlineArrowNarrowRight className=" inline-block text-3xl ml-1"/>
              </button>
              <div className="my-10">
                <div className="grid grid-cols-2 gap-x-10">
                  <div className="col-span-1">
                    <div className="box-card-hero">
                      <div className="line"></div>
                      <div className="box-card-img mt-5">
                        <img src="./saa.png" className="w-full" alt="" />
                      </div>
                      <h2 className=" font-medium md:text-2xl text-xl my-3">News item about the company</h2>
                      <h2 className=" font-medium md:text-2xl text-xl my-3">4.13.22</h2>
                      <p className="text-[#CCCCCC] text-md">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="box-card-hero">
                      <div className="line"></div>
                      <div className="box-card-img mt-5 ">
                        <img src="./sad.png" className="w-full" alt="" />
                      </div>
                      <h2 className=" font-medium md:text-2xl text-xl my-3">News item about the company</h2>
                      <h2 className=" font-medium md:text-2xl text-xl my-3">4.13.22</h2>
                      <p className="text-[#CCCCCC] text-md">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="box-hero-img relative lg:left-[125px] top-20 md:left-[5px]">
              <img src="./graphic.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
