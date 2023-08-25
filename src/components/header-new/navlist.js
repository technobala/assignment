import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function Navlist() {
  return (
    <div>
        <div>
            <div className="dropdown">
                <button class="dropbtn">Projects</button>
                <button class="dropbtn">Visuals</button>
                <div class="dropdown-content" style={{display:"none"}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <MenuItem className={"navTitle"} >YEAR</MenuItem>
                        <MenuItem >2022</MenuItem>
                        <MenuItem >2021</MenuItem>
                        <MenuItem >2020</MenuItem>
                        <MenuItem >2019</MenuItem>
                        <MenuItem >2018</MenuItem>
                        <MenuItem >2017</MenuItem>
                        <MenuItem >2016</MenuItem>
                    </Grid>
                    <Grid item xs={6}>
                        <MenuItem className={"navTitle"} >DESIGN STUDIO</MenuItem>
                        <MenuItem >Bangalore</MenuItem>
                        <MenuItem >Chennai</MenuItem>
                        <MenuItem >Gurgaon</MenuItem>
                        <MenuItem >Hydrabad</MenuItem>
                        <MenuItem >Manila</MenuItem>
                        <MenuItem >Mumbai</MenuItem>
                        <MenuItem >Pune</MenuItem>
                        <MenuItem >Shanhai</MenuItem>
                        <MenuItem >Singapore</MenuItem>
                    </Grid>
                </Grid>
                </div>
                <div class="dropdown-content">
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} columns={16}>
                    <Grid item xs={4}>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >WORK SPACES</MenuItem>
                            <MenuItem >Cabins</MenuItem>
                            <MenuItem >Exceutive Cabins</MenuItem>
                            <MenuItem >Collab Spaces</MenuItem>
                            <MenuItem >Opem Work Zone</MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >SUPPORT SPACES</MenuItem>
                            <MenuItem >Arrival</MenuItem>
                            <MenuItem >Breakout Spaces</MenuItem>
                            <MenuItem >Gurgaon</MenuItem>
                            <MenuItem >Cafeteria</MenuItem>
                            <MenuItem >Elevator Lobby</MenuItem>
                            <MenuItem >Pantry</MenuItem>
                            <MenuItem >Phone Booths</MenuItem>
                            <MenuItem >Recreation</MenuItem>
                            <MenuItem >Restrooms</MenuItem>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >MEETINg SPACES</MenuItem>
                            <MenuItem >Boardrooms</MenuItem>
                            <MenuItem >Informal Meeting Roms</MenuItem>
                            <MenuItem >Large Meeting Rooms</MenuItem>
                            <MenuItem >Small Meeting Rooms</MenuItem>
                            <MenuItem >Training Rooms</MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >FEATURES</MenuItem>
                            <MenuItem >Arches</MenuItem>
                            <MenuItem >Booth Seating</MenuItem>
                            <MenuItem >Green Wall Feature</MenuItem>
                            <MenuItem >Sculpture</MenuItem>
                            <MenuItem >Staircase</MenuItem>
                            <MenuItem >Wall Treatment</MenuItem>
                            <MenuItem >Water Feature</MenuItem>
                            <MenuItem >Recreation</MenuItem>
                            <MenuItem >Restrooms</MenuItem>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >MATERIALS</MenuItem>
                            <MenuItem >Acoustic</MenuItem>
                            <MenuItem >Concrete</MenuItem>
                            <MenuItem >Fabric</MenuItem>
                            <MenuItem >Marble</MenuItem>
                            <MenuItem >Metal</MenuItem>
                            <MenuItem >Paint</MenuItem>
                            <MenuItem >Stone</MenuItem>
                            <MenuItem >Terrazzo</MenuItem>
                            <MenuItem >Tile</MenuItem>
                            <MenuItem >Wood</MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >ENVIRONMENTAL GRAPHICS</MenuItem>
                            <MenuItem >Branding</MenuItem>
                            <MenuItem >Signage/Wayfinding</MenuItem>
                            <MenuItem >Wall Graphics</MenuItem>
                            <MenuItem >Sculpture</MenuItem>
                            <MenuItem >Staircase</MenuItem>
                            <MenuItem >Wall Treatment</MenuItem>
                            <MenuItem >Water Feature</MenuItem>
                            <MenuItem >Recreation</MenuItem>
                            <MenuItem >Restrooms</MenuItem>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                    <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >CEILING</MenuItem>
                            <MenuItem >Open Ceiling</MenuItem>
                            <MenuItem >Grid Ceiling</MenuItem>
                            <MenuItem >Gypsum Board</MenuItem>
                            <MenuItem >Wooden Features</MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >FLOORING</MenuItem>
                            <MenuItem >Carpets</MenuItem>
                            <MenuItem >Concrete</MenuItem>
                            <MenuItem >Rugs</MenuItem>
                            <MenuItem >Stone</MenuItem>
                            <MenuItem >Terrazzo</MenuItem>
                            <MenuItem >Tile</MenuItem>
                            <MenuItem >Wood</MenuItem>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                    <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >COLOUR FAMILY</MenuItem>
                            <MenuItem >Black</MenuItem>
                            <MenuItem >White</MenuItem>
                            <MenuItem >Warm Tones</MenuItem>
                            <MenuItem >Cool Tones</MenuItem>
                            <MenuItem >Grey & Beige</MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                            <MenuItem className={"navTitle"} >LIGHTING</MenuItem>
                            <MenuItem >Barrisol</MenuItem>
                            <MenuItem >Linear</MenuItem>
                            <MenuItem >Pendant</MenuItem>
                            <MenuItem >Perimeter</MenuItem>
                            <MenuItem >Recessed</MenuItem>
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
                </div>
            </div>
        </div>
    </div>
  )
}
