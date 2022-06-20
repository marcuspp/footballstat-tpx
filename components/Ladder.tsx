import {Component} from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class Ladder extends Component {
    render() {
        const rows = Array.from(this.props.seasonData['standings']);

        return (
            <TableContainer component={Paper} sx={{maxWidth: 800}}>
                <Table sx={{minWidth: 650, maxWidth: 800}} aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>Games played</TableCell>
                            <TableCell>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                             key={row.position}
                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.position}</TableCell>
                                <TableCell><Avatar alt="Remy Sharp" src={row.team.logo}/> {row.team['name']}</TableCell>
                                <TableCell>{row.gamesPlayed}</TableCell>
                                <TableCell>{row.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Ladder;
