import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="men"
        aria-controls={open ? 'men' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Button
        id="women"
        aria-controls={open ? 'women' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="men"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-men',
        }}
      >
        <MenuItem onClick={handleClose} style={{color:"red"}}>shirt</MenuItem>
        <MenuItem onClick={handleClose}>t-shit</MenuItem>
        <MenuItem onClick={handleClose}>jeans</MenuItem>
      </Menu>
      <Menu
        id="women"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-women',
        }}
      >
        <MenuItem onClick={handleClose} style={{color:"red"}}>watch</MenuItem>
        <MenuItem onClick={handleClose}>saree</MenuItem>
        <MenuItem onClick={handleClose}>jeans</MenuItem>
      </Menu>
    </div>
  );
}