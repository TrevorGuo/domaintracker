import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import { Modal } from '@mui/material';

const useStyles = makeStyles({
    list: {
        borderRadius: '15px',
        margin: '3vh 3vw',
        padding: '2vh 2vw',
        backgroundColor: '#408ec6',
    },
    listItem: {
        borderRadius: '25px',
        padding: '5px',
    },
    hoverStrike: {
        '&:hover': {
            textDecoration: 'line-through',
            cursor: 'pointer',
        }
    },
    modalBox: {
        display: 'block',
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    modalDialog: {
        overflowY: 'initial',
    },
    modalContent: {
        height: '70vh',
        overflowY: 'auto',
    }
});

export default function Select({data, checked, setChecked}) {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleClear = () => {
        setChecked([]);
    };
    
    return(
        <List className={styles.list}>
            <ListItemButton 
            onClick={handleOpen}
            className={styles.listItem}
            >
                Add {data[0].name === 'Albedo' ? 'Characters' : 'Weapons'}
            </ListItemButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <List className={`${styles.list} ${styles.modalContent}`}>
                    {data.map((item, index) => {
                    const labelId = `checkbox-list-label-${index}`;

                    return (
                        <ListItem
                        key={index}
                        disablePadding
                        >
                            <ListItemButton 
                            role={undefined} 
                            onClick={handleToggle(index)} 
                            className={styles.listItem}
                            dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                    edge='left'
                                    checked={checked.indexOf(index) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    sx={{
                                        '&.Mui-checked': {
                                            color: 'orange',
                                        },
                                    }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                    })}
                </List>
            </Modal>
            {checked.length > 0 && 
            <ListItemButton 
            onClick={handleClear}
            className={styles.listItem}
            >
                Reset
            </ListItemButton>
            }
            {checked.map((index) => {
                return(
                    <ListItem
                    key={index}
                    dense
                    className={`${styles.listItem} ${styles.hoverStrike}`}
                    onClick={handleToggle(index)}
                    >
                        {data[index].name}
                    </ListItem>
                )
            })}
        </List>
    )
}