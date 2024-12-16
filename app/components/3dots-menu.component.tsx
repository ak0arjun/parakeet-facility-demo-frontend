import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';

type ThreeDotMenuConfig = {
    id: string;
    onClick: (rowId: string, type: string) => void;
}

export default function ThreeDotMenu(threeDotMenuConfig: ThreeDotMenuConfig) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = (type: string) => {
        threeDotMenuConfig.onClick(threeDotMenuConfig.id, type);
        setAnchorEl(null);
    };

    return (
        <div>
            <div
                className=" p-2 h-11 w-6 relative cursor-pointer "
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                <Image
                    src="/media/svg/ico-dots-vertical.svg"
                    fill
                    alt="facility icon"
                />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleClose("update")}>Update Facility</MenuItem>
                <MenuItem onClick={() => handleClose("delete")}>Delete Facility</MenuItem>
            </Menu>
        </div>
    );
}