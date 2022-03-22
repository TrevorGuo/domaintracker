import React, { useEffect } from "react";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function DomainWeek({characters, selectedCharacters, weapons, selectedWeapons}) {
    const [mondstadt, setMondstadt] = useState([[],[],[]]);
    const [liyue, setLiyue] = useState([[],[],[]]);
    const [inazuma, setInazuma] = useState([[],[],[]]);

    useEffect(() => {
        const newMondstadt = [[],[],[]];
        const newLiyue = [[],[],[]];
        const newInazuma = [[],[],[]];
        selectedCharacters.forEach(element => {
            switch(characters[element].mat) {
                case 'Freedom':
                    newMondstadt[0] = [...newMondstadt[0], characters[element].name];
                    break;
                case 'Resistance':
                    newMondstadt[1] = [...newMondstadt[1], characters[element].name];
                    break;
                case 'Ballad':
                    newMondstadt[2] = [...newMondstadt[2], characters[element].name];
                    break;
                case 'Prosperity':
                    newLiyue[0] = [...newLiyue[0], characters[element].name];
                    break;
                case 'Diligence':
                    newLiyue[1] = [...newLiyue[1], characters[element].name];
                    break;
                case 'Gold':
                    newLiyue[2] = [...newLiyue[2], characters[element].name];
                    break;
                case 'Transience':
                    newInazuma[0] = [...newInazuma[0], characters[element].name];
                    break;
                case 'Elegance':
                    newInazuma[1] = [...newInazuma[1], characters[element].name];
                    break;
                case 'Light':
                    newInazuma[2] = [...newInazuma[2], characters[element].name];
                    break;
                default:
                    break;
            }
        });
        selectedWeapons.forEach(element => {
            switch(weapons[element].mat) {
                case "Tile of Decarabian's Tower":
                    newMondstadt[0] = [...newMondstadt[0], weapons[element].name];
                    break;
                case "Boreal Wolf's Milk Tooth":
                    newMondstadt[1] = [...newMondstadt[1], weapons[element].name];
                    break;
                case 'Fetters of the Dandelion Gladiator':
                    newMondstadt[2] = [...newMondstadt[2], weapons[element].name];
                    break;
                case 'Luminous Sand from Guyun':
                    newLiyue[0] = [...newLiyue[0], weapons[element].name];
                    break;
                case 'Mist Veiled Lead Elixir':
                    newLiyue[1] = [...newLiyue[1], weapons[element].name];
                    break;
                case 'Grain of Aerosiderite':
                    newLiyue[2] = [...newLiyue[2], weapons[element].name];
                    break;
                case 'Coral Branch of a Distant Sea':
                    newInazuma[0] = [...newInazuma[0], weapons[element].name];
                    break;
                case "Narukami's Wisdom":
                    newInazuma[1] = [...newInazuma[1], weapons[element].name];
                    break;
                case 'Mask of the Wicked Lieutenant':
                    newInazuma[2] = [...newInazuma[2], weapons[element].name];
                    break;
                default:
                    break;
            }
        });

        setMondstadt(newMondstadt);
        setLiyue(newLiyue);
        setInazuma(newInazuma);

    }, [selectedCharacters, selectedWeapons])

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <TableContainer component = {Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {days.map(day => {
                            return (<TableCell>{day}</TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Mondstadt</TableCell>
                        {mondstadt.map(element => {
                            return(
                                <TableCell>
                                {element.map(name => {
                                    return (<div>{name}</div>);
                                })}
                                </TableCell>
                            );
                        })}
                        {mondstadt.map(element => {
                            return(
                                <TableCell>
                                    {element.map(name => {
                                        return (<div>{name}</div>)
                                    })}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell>Liyue</TableCell>
                        {liyue.map(element => {
                            return(
                                <TableCell>
                                    {element.map(name => {
                                        return (<div>{name}</div>)
                                    })}
                                </TableCell>
                            )
                        })}
                        {liyue.map(element => {
                            return(
                                <TableCell>
                                    {element.map(name => {
                                        return (<div>{name}</div>)
                                    })}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                    <TableRow>
                        <TableCell>Inazuma</TableCell>
                        {inazuma.map(element => {
                            return(
                                <TableCell>
                                    {element.map(name => {
                                        return (<div>{name}</div>)
                                    })}
                                </TableCell>
                            )
                        })}
                        {inazuma.map(element => {
                            return(
                                <TableCell>
                                    {element.map(name => {
                                        return (<div>{name}</div>)
                                    })}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}