import React from 'react'

export default function Compeny() {
  return (
  
        <section className="px-4 my-10">
            <div className="container">
                <div className="grid md:grid-cols-5 grid-cols-4 md:gap-x-28 gap-10">
                    <div className="md:col-span-1 col-span-2">
                        <img src="./1.svg" alt="" />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <img src="./2.svg" alt="" />
                    </div>

                    <div className="md:col-span-1 col-span-2">
                        <img src="./3.svg" alt="" />
                    </div>
                    <div className="md:col-span-1 col-span-2">
                        <img src="./4.svg" alt="" />
                    </div>
                    <div className="md:col-span-1 hidden md:block">
                        <img src="./5.svg" alt="" />
                    </div>

                </div>
            </div>
        </section>
 
  )
}
