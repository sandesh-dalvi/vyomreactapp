import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbCalendarDown } from "react-icons/tb";
import { TbCalendarShare } from "react-icons/tb";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const index = () => {
  const [dateValue, setDateValue] = useState([dayjs(), dayjs()]);

  return (
    <main>
      <section className="bg-[url('/img/banner-search.png')] bg-cover w-full h-[50vh] flex justify-center items-center">
        <div className=" text-center">
          <h1 className=" text-white font-black text-3xl">Travel With Vyom</h1>
          <h2 className=" text-white font-bold text-xl">
            Goa's trusted local travel expert.
          </h2>
        </div>
      </section>
      <section className=" -mt-20 flex justify-center items-center px-4 ">
        <div className="md:max-w-[766px] lg:max-w-[1023px] xl:max-w-[1279px] 2xl:max-w-[1535px]">
          <div className=" bg-white border border-neutral-50 shadow-lg rounded-3xl text-base lg:text-lg leading-[26px] text-neutral-950">
            <div className="block">
              <div className=" w-full border-b border-b-neutral-100 p-3 md:p-4">
                <div className=" flex justify-start items-center">
                  <div>
                    <IoLocationOutline className=" w-8 h-8" />
                  </div>
                  <div className=" cursor-pointer text-[14px] md:text-base ">
                    <label className=" text-[#232323] text-base font-medium leading-[26px] block">
                      Destination
                    </label>

                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      className=" text-[14px] text-[#5e6d77] block font-normal leading-[22px] w-full outline-none rounded"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>
              </div>

              {/*  */}

              <div className=" w-full border-b border-b-neutral-100 p-3 md:p-4">
                <DemoContainer components={["DateRangePicker"]}>
                  <DemoItem component="DateRangePicker">
                    {/* <TbCalendarDown />
                    <TbCalendarShare /> */}
                    <DateRangePicker
                      value={dateValue}
                      onChange={(newValue) => setDateValue(newValue)}
                      localeText={{ start: "Check-in", end: "Check-out" }}
                    />
                  </DemoItem>
                </DemoContainer>
              </div>

              {/*  */}
              <div className=" w-full border-b border-b-neutral-100 p-3 md:p-4">
                <div className=" flex justify-start items-center">
                  <div>
                    <IoLocationOutline className=" w-8 h-8" />
                  </div>
                  <div className=" cursor-pointer text-[14px] md:text-base ">
                    <label className=" text-[#232323] text-base font-medium leading-[26px] block">
                      Destination
                    </label>

                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      className=" text-[14px] text-[#5e6d77] block font-normal leading-[22px] w-full outline-none rounded"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <button className=" w-full rounded-b-3xl flex items-center justify-center bg-primary text-white transition-all duration-200 leading-[20px] text-base py-4 px-9 font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default index;
