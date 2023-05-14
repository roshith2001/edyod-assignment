import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NavBar = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return(
        <div 
            id='navbar-container'
            className='w-full h-full py-2 bg-text4 flex
                        justify-between items-center font-raleway'
        >
            <div
                id='navbar-left'
                className='w-5/12 flex flex-wrap items-center justify-around'
            >
                <div 
                    className='w-fit'
                >
                    <p 
                        className='text-4xl font-black w-fit'
                        style={{
                            backgroundImage: 'linear-gradient(90.72deg, #0096FF 42.18%, #0048FF 93.77%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}    
                    >EDYODA</p>
                </div>
                <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        fontFamily:['Raleway', 'sans-serif'],
                        color: '#000000',
                        fontWeight: '500',
                        textTransform: 'none',
                        fontSize: '16px',

                    }}
                >Courses
                <ExpandMoreIcon 
                    fontSize='inherit'
                    sx={{
                        marginLeft: '1rem',
                    }}
                />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>React JS</MenuItem>
                    <MenuItem onClick={handleClose}>Full Stack Development</MenuItem>
                    <MenuItem onClick={handleClose}>Python</MenuItem>
                </Menu>
                </div>
                <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        fontFamily:['Raleway', 'sans-serif'],
                        color: '#000000',
                        fontWeight: '500',
                        textTransform: 'none',
                        fontSize: '16px',

                    }}
                >Programs
                    <ExpandMoreIcon 
                    fontSize='inherit'
                    sx={{
                        marginLeft: '1rem',
                    }}
                />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>MS in Web Development</MenuItem>
                    <MenuItem onClick={handleClose}>Diploma in Data SCience</MenuItem>
                    <MenuItem onClick={handleClose}>Diploma in Cryptography</MenuItem>
                </Menu>
                </div>
            </div>
            <div
                id='navbar-left'
                className='w-1/3 flex flex-wrap items-center justify-around'
            >
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button
                    sx={{
                        fontFamily:['Raleway', 'sans-serif'],
                        color: '#000000',
                        fontWeight: '500',
                        textTransform: 'none',
                        fontSize: '16px',
                    }}
                >
                    Log in
                </Button>
                <Button
                variant='contained' 
                sx={{
                    fontFamily:['Raleway', 'sans-serif'],
                    color: '#FFFFFF',
                    borderRadius: '52px', 
                    backgroundImage: 'linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)',
                    paddingX: '2rem',
                }}>
                    Join Now
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
