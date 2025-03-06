import React from "react";
import Input from "./Components/Input";

export default function App() {
  return (
    <section className=" px-6 py-8 md:p-10 overflow-hidden bg-white mt-20 md:mt-0 w-[90%] mx-auto rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] md:rounded-br-[10rem] md:w-170">
      <div className="flex flex-col">
        <div className="flex space-x-4 md:w-[80%]">
          <Input type={"DAY"} placeholder={"DD"}/>
          <Input type={"MONTH"} placeholder={"MM"}/>
          <Input type={"YEAR"} placeholder={"YYYY"}/>
        </div>

        <div className="relative h-[2px] bg-light-grey my-10 md:mt-8 md:mb-12">
          <div className="bg-purple w-14 md:w-20 h-14 md:h-20 rounded-full grid place-items-center absolute top-1/2 -translate-y-1/2 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 transition-colors duration-200 hover:bg-black cursor-pointer">
            <img src="/images/icon-arrow.svg" alt="arrow" className="w-6 md:w-10"/>
          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>years</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>months</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
