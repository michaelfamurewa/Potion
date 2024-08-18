
import React,{useEffect, useState} from "react";

import {SidebarData} from './sidebarData.jsx';
// import $ from 'jquery';


function Sidebar(){

    
    //  style={{width: isOpen ? "270px" : "70px" }} 

    return(
        <div className="Sidebar">
            
            <ul className="Sidebar-shelf">
                <li className="search">
                    
                    <div className="icon">
                        
                    </div>
                    
                    <div className="search" >
                        <input type="search" placeholder="Search" />
                    </div>

                </li>
                <li className="home">
                    <div className="icon">

                    </div>
                    <div className="title">
                        Home
                    </div>
                </li>
                <li className="notes">
                    <div className="icon">

                    </div>
                    <div className="title">
                        Notes
                    </div>
                </li>

            </ul>
             
            
        </div>
        
    );
    
 }

export default Sidebar;
