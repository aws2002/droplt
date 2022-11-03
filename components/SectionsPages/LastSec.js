import React from "react";

export default function LastSec() {
  return (
    <section className="px-4 my-20">
      <div className="container">
        <div className="line"></div>
        <div className="grid grid-cols-2 md:gap-8 my-14">
          <div className="md:col-span-1 col-span-full">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <img src="./Rectangle 20.png" className="w-full h-full" alt="" />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-1 gap-8">
                  <div className="col-span-1">
                    <img src="./Rectangle 21.png" className="w-full" alt="" />
                  </div>
                  <div className="col-span-1">
                    <img src="./Rectangle 22.png" className="w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <img src="./large quote.png" className="w-full" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:block hidden">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-full">
                <img src="./large quote (1).png" className="w-full" alt="" />
              </div>
              <div className="col-span-2">
                <img src="./Rectangle 17.png" className="w-full" alt="" />
              </div>
              <div className="col-span-1">
                <img src="./Rectangle 18.png" className="w-full" alt="" />
              </div>
              <div className="col-span-1">
                <img src="./Rectangle 19.png" className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
}
