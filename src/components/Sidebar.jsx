import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function Sidebar() {
    return (
        <nav className="sideBar">
            <ul>
                <li>
                    <a href="#">
                        <HomeRoundedIcon />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <DescriptionOutlinedIcon />
                        <span>Notes</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}