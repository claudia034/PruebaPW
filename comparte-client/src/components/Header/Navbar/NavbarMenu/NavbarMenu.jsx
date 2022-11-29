import React, { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import { MdLogout, MdPerson } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import ButtonA from "../NavbarButton/NavbarButton";

import { useUserContext  } from "../../../../contexts/UserContext";

const AccountMenu = () => {

    // Manejar el LOGIN 

    const { logout, user } = useUserContext();
    const navigate = useNavigate();

    // ON PERFIL HANDLER

    const onPerfilHandler = () => {
        navigate("/user/profile");
    }

    // ON LOGOUT HANDLER

    const onLogoutHandler = async () => {
        logout();
        navigate("/");
    }

    // Manejar el menu

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // COMPONENTE

    return (
        <>

            {
                !user ? <ButtonA onClick={() => navigate("/auth/signin")} text="Log in" type="button" isLogs={false} /> :  
                <ButtonA
                onClick={handleClick}
                isLogs={true}
                text="" 
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} />
            }

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                        background: 'white',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '5px',
                        width: '8em',
                        height: '10em',
                        'div':
                        {
                            padding: '0.5',
                            margin: '0',
                        },
                        'ul':
                        {
                            listStyle: 'none',
                            paddingTop: '0.8em',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: '0.5em',
                        },
                        'li': {
                            fontFamily: 'Work Sans, sans-serif',
                            margin: '0',
                            padding: '0.5em',
                        },
                    }
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        color: 'black',
                        bgcolor: 'white',
                        transition: '0.5s',
                        filter: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        fontFamily: 'Work Sans',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'white',
                            transform: 'translateX(-300%) translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Avatar/>
                <MenuItem onClick = {onPerfilHandler}>
                    My profile
                </MenuItem>
                <Divider />
                <MenuItem onClick = {onLogoutHandler} >
                    <ListItemIcon>
                        <MdLogout />
                    </ListItemIcon>
                    Sign out
                </MenuItem>
            </Menu>
        </>
    );
}

export default AccountMenu;