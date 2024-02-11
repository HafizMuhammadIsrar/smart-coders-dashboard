import React from "react";
import { Icon } from "@iconify/react";
import OverviewCard from "./OverviewCard";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Mon", uv: 400, pv: 700, amt: 2400 },
  { name: "Tue", uv: 500, pv: 600, amt: 2400 },
  { name: "Wed", uv: 1200, pv: 600, amt: 2400 },
  { name: "Thu", uv: 800, pv: 400, amt: 2400 },
  { name: "Fri", uv: 900, pv: 400, amt: 2400 },
  { name: "Sat", uv: 900, pv: 300, amt: 2400 },
  { name: "Sun", uv: 900, pv: 300, amt: 2400 },
];

const Data = [
  {
    id: 1,
    heading: "Total Views",
    numbers: "2000",
    percentage: "48%",
  },
  {
    id: 2,
    heading: "Total Vists",
    numbers: "1000",
    percentage: "48%",
  },
  {
    id: 3,
    heading: "Total Orders",
    numbers: "200",
    percentage: "48%",
  },
  {
    id: 4,
    heading: "Total Revenue",
    numbers: "4000",
    percentage: "48%",
  },
];

const Overview = () => {
  return (
    <div className="px-[25px] py-[40px] Custom_height">
      <div className="header flex justify-between flex-col md:flex-row w-full">
        <div className="left">
          <h1 className=" text-[22px]">Hello, Chidinma</h1>
          <p className=" text-[#777485]"> Saturday, 22 January 2022</p>
        </div>
        <div className="right bg-[#F0F0F7] flex-col md:flex-row flex p-3 rounded-[14px]">
          <div className="current">
            <p>Current</p>
            <div className="flex items-center justify-center gap-2">
              <div className="ratio">4.00</div>
              <div className="stars flex items-center gap-2">
                <Icon icon="emojione:star" width="18" height="18" />
                <Icon icon="emojione:star" width="18" height="18" />
                <Icon icon="ph:star-light" width="15" height="15" />
                <Icon icon="ph:star-light" width="15" height="15" />
                <Icon icon="ph:star-light" width="15" height="15" />
              </div>
            </div>
          </div>
          <hr className="mx-6 bg-black w-[2px] " />
          <div className="active">
            <p>Active Listings</p>
            <p className="  text-xl">100 Craft</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {Data.map((data) => {
          return (
            <>
              <OverviewCard
                key={data.id}
                id={data.id}
                heading={data.heading}
                numbers={data.numbers}
                percentage={data.percentage}
              />
            </>
          );
        })}
      </div>

      <div className="w-full mt-5">
        <LineChart
          width={1236}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          className="w-full  "
        >
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Overview;
