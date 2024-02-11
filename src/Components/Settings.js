import React from "react";
import { Icon } from "@iconify/react";
import OverviewCard from "./OverviewCard";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import profile from "../assets/images/profile (2).png";
const Settings = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" px-[25px] py-[40px]">
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
                <Tab label="Profile " value="1" />
                <Tab label="Your Story" value="2" />
                <Tab label="Studio Detail" value="3" />
                <Tab label="PickUp Availability" value="4" />
                <Tab label="Payments" value="5" />
                <Tab label="Customer Support" value="6" />
                <Tab label="other" value="7" />
                <Tab label="Legal" value="8" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {" "}
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="profile_img flex gap-5 items-center ">
                  <div className="img rounded-[50%] w-[150px] h-[140px] overflow-hidden ">
                    <img src={profile} alt="" className="w-full h-full" />
                  </div>
                  <div className="Update_photo ">Update Photo</div>
                </div>
                <div className="flex flex-col gap-[56px] pt-[56px]">
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Full Name"
                    placeholder="Enter Full Name"
                    multiline
                    maxRows={4}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    multiline
                    maxRows={4}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="WhatsApp Number"
                    placeholder="Enter Whatsapp Number"
                    multiline
                    maxRows={4}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Add Video"
                    placeholder=""
                    multiline
                    maxRows={4}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label=" Email"
                    placeholder="Enter Your Email"
                    // multiline
                    maxRows={4}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    InputProps={{
                      startAdornment: (
                        <FacebookIcon
                          style={{ marginRight: "8px", color: "#3b5998" }}
                        />
                      ),
                    }}
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Instagram"
                    multiline
                    maxRows={4}
                    InputProps={{
                      startAdornment: (
                        <InstagramIcon
                          style={{ marginRight: "8px", color: "#c13584" }}
                        />
                      ),
                    }}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Youtube"
                    multiline
                    maxRows={4}
                    InputProps={{
                      startAdornment: (
                        <YouTubeIcon
                          style={{ marginRight: "8px", color: "#ff0000" }}
                        />
                      ),
                    }}
                  />

                  <TextField
                    id="outlined-multiline-flexible"
                    label="Twitter"
                    multiline
                    maxRows={4}
                    InputProps={{
                      startAdornment: (
                        <TwitterIcon
                          style={{ marginRight: "8px", color: "#1da1f2" }}
                        />
                      ),
                    }}
                  />
                  <TextField
                    id="outlined-multiline-flexible"
                    label="LinkedIn"
                    multiline
                    maxRows={4}
                    InputProps={{
                      startAdornment: (
                        <LinkedInIcon
                          style={{ marginRight: "8px", color: "#0077b5" }}
                        />
                      ),
                    }}
                  />
                  <div className="flex gap-[45px]">
                    <button className="save">Save Changes </button>
                    <button className="cancel">Cancel</button>
                  </div>
                </div>
              </Box>
            </TabPanel>
            <TabPanel value="2"></TabPanel>
            <TabPanel value="3"> </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Settings;
