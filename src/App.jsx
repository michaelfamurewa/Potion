import React from "react";
import './App.css'

import CustomBackground from "./components/customBackground.jsx";

import Sidebar from "./components/Sidebar.jsx";
import RecentlyViewed from "./components/recentlyViewed.jsx";


export default function App() {
    return (
        <div className="App">
           
            {/* navbar container with sidebar component */}
            <div className="nav">
                <Sidebar/>
            </div>            
            <div className="main">
                {/* this is where the middle section of the app goes */}
                {/* implement following components: clock, custom background, recently viewed */}
                <CustomBackground/>
                <RecentlyViewed/>
                
            </div>  
        
        </div>
    )
}