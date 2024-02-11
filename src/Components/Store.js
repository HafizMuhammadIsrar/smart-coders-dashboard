import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
    "InActive",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Active",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "Active",
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
    "InActive",
    "view"
  ),
  createData(
    "Lab Earrings",
    "Jewelry",
    "This is jewelry",
    "24$",
    9,
    "27/02/2023",
    "InActive",
    "view"
  ),
];
const Store = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className=" px-[25px] py-[40px]">
      <div className="header flex justify-between w-full">
        <div className="left flex gap-3 items-center">
          <h1 className=" text-[28px] ">My Store</h1>
          <button className=" bg-[#341E9D] text-white px-[5px] rounded-[20px]">
            100
          </button>
        </div>
        <div className="right  flex p-3 gap-3 rounded-[14px]">
          <div className="filter">
            <Icon icon="mi:filter" width="24" height="24" />
            filters
          </div>
          <div className="newList">
            <Icon
              icon="material-symbols:add"
              color="white"
              width="24"
              height="24"
            />
            newList
          </div>
        </div>
      </div>

      <div className="">
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
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <Typography>
            <img src={modal_img} alt="" />
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Craft description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Earthenware pots, often called terracotta, absorbs liquids such as
            water. However, earthenware can be made impervious. Earthenware is
            glazed or unglazed nonvitreous pottery that has normally been fired
            below 1,200 °C. Basic earthenware, absorbs liquids such as water.
            However, earthenware can be made impervious to liquids by coating it
            with a ceramic glaze, which the great majority of modern domestic
            earthenware has.
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dimensions
          </Typography>
          <Typography>(cm) 10 (W) X 10 (L) X 10(H)</Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Weight in grams
          </Typography>
          <Typography>10g</Typography>
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

export default Store;
