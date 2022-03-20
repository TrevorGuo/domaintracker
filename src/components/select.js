import React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import characterData from '../data/characters.json';
import weaponData from '../data/weapons.json';

export default function Select(props) {
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
        console.log(checked)
    };
    
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                {props.character ? "Characters" : "Weapons"}
            </ListItem>
            {(props.character ? characterData.characters : weaponData.weapons).map((character, index) => {
            const labelId = `checkbox-list-label-${index}`;

            return (
                <ListItem
                key={character.name}
                disablePadding
                >
                <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={character.name} />
                </ListItemButton>
                </ListItem>
            );
            })}
        </List>
    );
}