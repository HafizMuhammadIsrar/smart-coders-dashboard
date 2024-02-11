import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modal_img from "../assets/images/modal_img.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  Category,
  Description,
  Price,
  Qty,
  Date,
  Status,
  More
) {
  return {
    name: name,
    Category: Category,
    Description: Description,
    Price: Price,
    Qty: Qty,
    Date: Date,
    Status: Status,
    More: More,
  };
}

const rows = [
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Pending",
    "view"
  ),
];

const confirm = [
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "confirmed",
    "view"
  ),
];

const rows1 = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Order = () => {
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className=" px-[25px] py-[40px] w-full ">
      My Order
      <Box sx={{ width: "100%", typography: "body1" }} className=" w-full">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Pending Order" value="1" />
              <Tab label="Confirm Order" value="2" />
              <Tab label="Order Out of Delivery" value="3" />
              <Tab label="Delivered Orders" value="4" />
              <Tab label="Canceled Order" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Product Category</TableCell>
                    <TableCell align="right">Product Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Date Created</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">More</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>{" "}
                      <TableCell align="right">{row.Category}</TableCell>
                      <TableCell align="right">{row.Description}</TableCell>
                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">{row.Qty}</TableCell>
                      <TableCell align="right">{row.Date}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <button
                          className={` px-3 py-[8px] rounded-[25px] ${
                            row.Status === "Active"
                              ? "bg-[#EBF9F1] text-[green]"
                              : row.Status === "Pending"
                              ? "bg-[#F9F4EA] text-[orange]"
                              : "bg-[#F9EAEA] text-[red]"
                          } `}
                        >
                          {row.Status}
                        </button>
                      </TableCell>
                      <TableCell align="right">
                        <button
                          onClick={handleOpen}
                          className=" text-[blue] hover:bg-[#EBF9F1] px-3 py-[8px] rounded"
                        >
                          {row.More}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Product Category</TableCell>
                    <TableCell align="right">Product Description</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Date Created</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">More</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {confirm.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>{" "}
                      <TableCell align="right">{row.Category}</TableCell>
                      <TableCell align="right">{row.Description}</TableCell>
                      <TableCell align="right">{row.Price}</TableCell>
                      <TableCell align="right">{row.Qty}</TableCell>
                      <TableCell align="right">{row.Date}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <button
                          className={` px-3 py-[8px] rounded-[25px] ${
                            row.Status === "Active"
                              ? "bg-[#EBF9F1] text-[green]"
                              : row.Status === "Pending"
                              ? "bg-[#F9F4EA] text-[orange]"
                              : row.Status === "confirmed"
                              ? "bg-[#EBF9F1] text-[blue]"
                              : "bg-[#F9EAEA] text-[red]"
                          } `}
                        >
                          {row.Status}
                        </button>
                      </TableCell>
                      <TableCell align="right">
                        <button
                          onClick={handleOpen}
                          className=" text-[blue] hover:bg-[#EBF9F1] px-3 py-[8px] rounded"
                        >
                          {row.More}
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value="3"> </TabPanel>
          <TabPanel value="4"> </TabPanel>
          <TabPanel value="5"></TabPanel>
        </TabContext>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <Typography>
            <div className="flex w-full gap-4">
              <img src={modal_img} alt="" className="w-[50%] h-[200px]" />
              <div className=" w-[50%] ">
                <h1 className="text-xl ">Earthenware Pot </h1>
                <p>$100</p>
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Customer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Chidinma
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Category
          </Typography>
          <Typography>Pottery</Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Quantity
          </Typography>
          <Typography>3 Pieces</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Colour
          </Typography>
          <Typography>Rosegold</Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Material Used
          </Typography>
          <Typography>Clay</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Order;
