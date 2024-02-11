import React, { useState } from "react";
import { Icon } from "@iconify/react";
const Topbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className="flex">
        <div
          className={`icon bg-slate-500  min-h-[64px] border-bottom-[#aca7a7] border-[1px] px-5 flex justify-end items-center ${
            show ? "hide" : "show"
          } `}
        >
          <Icon
            icon="formkit:left"
            width="16"
            height="18"
            className=" cursor-pointer"
            onClick={() => {
              setshow(!show);
            }}
          />
        </div>
        <div
          className={`Topbar  bg-[#1976D2] flex justify-between items-center  px-[24px] min-h-[64px] ${
            show ? "full" : "half"
          }`}
        >
          <div className="flex items-center gap-6 ">
            <Icon
              icon="entypo:menu"
              color="white"
              width="24"
              height="24"
              className={`me-9 -ms-2  cursor-pointer  ${
                show ? "block" : "hidden"
              }`}
              onClick={() => {
                setshow(!show);
              }}
            />
            <h1 className="text-white text-[20px] font-semibold">Dashboard</h1>

            <div className="Search flex items-center bg-[#3B8AD9] rounded  relative">
              <div className="icon absolute top-[2] left-4 -z-1  ">
                <Icon
                  icon="ic:baseline-search"
                  color="white"
                  width="24"
                  height="24"
                />
              </div>
              <input
                type="text"
                className=" bg-transparent ps-[48px] pe-[8px] py-[8px] h-[39px] z-10 focus:outline-none caret-white placeholder:text-[#8DBBE9] "
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="Profile flex items-center gap-6">
            <div className="active text-white text-base ">
              {" "}
              <label class="relative inline-flex items-center me-1 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700   dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65C466]"></div>
                <span class="ms-2 text-base font-medium text-white dark:text-gray-300">
                  Active
                </span>
              </label>
            </div>

            <div className="message relative">
              <div className="value min-w-[22px] text-center absolute p-[3px] rounded-[50%] bg-[#D32F2F] text-[10px] text-white -top-[13px] -right-[10px] ">
                4
              </div>
              <Icon
                icon="ooui:message"
                width="22"
                height="22"
                color="white"
                className=" cursor-pointer"
              />
            </div>
            <div className="notification relative">
              <div className="value min-w-[22px] text-center absolute p-[3px] rounded-[50%] bg-[#D32F2F] text-[10px] text-white -top-[13px] -right-[10px] ">
                21
              </div>
              <Icon
                icon="clarity:notification-solid"
                color="white"
                width="22"
                height="22"
                className=" cursor-pointer"
              />
            </div>

            <Icon
              icon="iconamoon:profile-circle-fill"
              width="24"
              height="24"
              color="white"
              className=" cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
