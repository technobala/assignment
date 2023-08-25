import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function PopOverMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Hover with a Popover.
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      ><div style={{width:"1080px", height:"400px", margin:"0px 5px 0px 5px", background:"#ccc"}}>Hello world</div>
        <Typography sx={{ p: 1 }}>I use Popover.sdfgsdfgfgdfsgf sdfgdsfgfg</Typography>
      </Popover>
    </div>
  );
}
