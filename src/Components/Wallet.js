import React from "react";
import { Icon } from "@iconify/react";
import OverviewCard from "./OverviewCard";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

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
const Wallet = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" px-[25px] py-[40px]">
      <div className="header flex justify-between w-full">
        <div className="left flex gap-3 items-center">
          <h1 className=" text-[28px] ">My Wallet</h1>
        </div>
        <div className="right  flex p-3 gap-3 rounded-[14px]">
          <div className="withdraw">
            <Icon
              icon="uil:money-withdraw"
              color="white"
              width="24"
              height="24"
            />
            Withdraw Funds
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
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

      <div className="">
        <Box sx={{ width: "100%", typography: "body1" }} className=" w-full">
          <TabContext value={value}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="All Transaction " value="1" />
                <Tab label="Paid Funds" value="2" />
                <Tab label="WithDrawn Funds" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1"></TabPanel>
            <TabPanel value="2"> </TabPanel>
            <TabPanel value="3"> </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Wallet;
