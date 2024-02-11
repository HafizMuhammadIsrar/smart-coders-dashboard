import React from "react";
import Topbar from "../Components/Topbar";
import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
const Dashboard = () => {
  return (
    <>
      <div className="Dashboard ">
        <Topbar />

        <div className="Content flex gap-2">
          <div className="Sidebar border-[#aca7a7] border-[1px] w-[240px] ">
            <ul className="flex flex-col gap-1 pt-3">
              <a href="/">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon
                    icon="material-symbols:dashboard-outline-rounded"
                    width="24"
                    height="24"
                  />
                  <span className=" text-blue-600">Overview</span>
                </li>
              </a>

              <a href="/store">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon icon="bx:store-alt" width="24" height="24" />
                  <span className=" text-blue-700">Store</span>
                </li>
              </a>

              <a href="/order">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon
                    icon="material-symbols:orders-outline"
                    width="24"
                    height="24"
                  />
                  <span className=" text-blue-700">Order</span>
                </li>
              </a>

              <a href="/chates">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon icon="fluent:chat-12-regular" width="24" height="24" />
                  <span className=" text-blue-700">Chates</span>
                </li>
              </a>

              <a href="/wallet">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon icon="clarity:wallet-line" width="24" height="24" />
                  <span className=" text-blue-700"> Wallet</span>
                </li>
              </a>
              <a href="/setting">
                <li className="flex gap-4 px-6 py-2 cursor-pointer">
                  <Icon icon="uil:setting" width="24" height="24" />
                  <span className=" text-blue-700">Settings</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="Righ_Content w-[100%] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
