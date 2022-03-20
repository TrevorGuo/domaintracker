import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DomainWeek() {
    return (
        <TableContainer component = {Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Monday</TableCell>
                        <TableCell>Tuesday</TableCell>
                        <TableCell>Wednesday</TableCell>
                        <TableCell>Thursday</TableCell>
                        <TableCell>Friday</TableCell>
                        <TableCell>Saturday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Mondstadt</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Liyue</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Inazuma</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}