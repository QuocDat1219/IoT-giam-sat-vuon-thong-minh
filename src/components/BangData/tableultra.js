import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableultra = (props) => {

  return props.data.length != 0 ?(
    <TableContainer component={Paper} className="table container mx-auto">
      <h2>Lưu lượng nước bình chứa</h2>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell" align="center">
              Lưu lượng nước
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
                <TableCell className="tableCell" align="center">
                  {item.ultra}
                </TableCell>
                <TableCell className="tableCell" align="center">
                  {item.createAt}
                </TableCell>
              </TableRow>
            ))
            .slice(-5)}
        </TableBody>
      </Table>
    </TableContainer>
  ): (
    <div>
        <h1>loading...</h1>
    </div>
  );
};
export default tableultra;
