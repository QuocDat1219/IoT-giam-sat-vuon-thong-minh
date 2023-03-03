import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RingLoader from "react-spinners/RingLoader";
const tablemh = (props) => {
  return props.data.length != 0 ? (
    <TableContainer component={Paper} className="table container mx-auto">
      <h2>Độ ẩm đất</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="center">
              Độ ẩm đất
            </TableCell>
            <TableCell className="tableCell" align="center">
              Thời gian
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  {item.mh}%
                </TableCell>
                <TableCell align="center">
                  {item.createAt}
                </TableCell>
              </TableRow>
            ))
            .slice(-5)}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div className="ND flex justify-center items-center">
      <RingLoader color="#4cd137" />
    </div>
  );
};
export default tablemh;
