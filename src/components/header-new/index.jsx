import { AppBar, Box, Button, FormControl, InputAdornment, Menu, OutlinedInput, Toolbar, Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { menuItem } from './menuitem';
import Modal from '@mui/material/Modal';
import Navlist from './navlist';
import MenuItem from '@mui/material/MenuItem';


const styles = {
    appLogo: {
        height: 85,
    }
}



function HeaderNew() {
    

    return (
        <BrowserRouter>
            <AppBar position="sticky" style={{ background: '#000', pt: 0, m: 0 }} className={"header-section"}>
                <Toolbar sx={{ p: 0, m: 0 }} className={"toolbar"}>
                        <Box sx={{ width: '12%' }}>
                            <Link to={'/'}>
                                <Box component={'img'} sx={styles.appLogo} src="logo.png" />
                            </Link>

                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={"search-section"}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ ml: 15 }}>
                                        <FormControl fullWidth sx={{ m: 1, width: '56%', height: '27px' }}>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                startAdornment={<InputAdornment position="start"><SearchIcon
                                                    sx={{ color: "#000" }} /></InputAdornment>}
                                                placeholder="Search Projects, Locations, Spaces"
                                                sx={{ bgcolor: '#fff', height: '27px', borderRadius: 1 }}
                                            />
                                        </FormControl>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={{ mt: 5 }} className={"menu-section"}>
                                <Grid container spacing={1}>
                                <Navlist/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box sx={{
                            width: '11%', alignItems: 'center',
                            flexDirection: 'column'
                        }} display="flex" className={"header-right"}>
                            <Box display={"flex"}>
                                <Button className={"primary-button upload-btn"} sx={{
                                    padding: "2px 23px 2px 23px;", bgcolor: "#fff", color: "#000", ":hover": {
                                        bgcolor: "red",
                                        color: "white"
                                    }
                                }}
                                    variant="primary">
                                    <Typography sx={{ fontSize: 11 }}>Upload</Typography>
                                </Button>
                            </Box>
                            <Box display={"flex"} sx={{ mt: 5 }} className={"goto-dboard"}>
                                <Link to={"/"} className={"header-menu"}>
                                    <Typography sx={{ color: "primary.main", fontWeight: 500, fontSize: '1rem', borderRadius: 1 }}>Design Boards</Typography>
                                </Link>
                            </Box>
                        </Box>
                </Toolbar>
            </AppBar>
        </BrowserRouter>
    );
}

export default HeaderNew;