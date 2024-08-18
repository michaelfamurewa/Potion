import React from "react";

import '../App.css';
import '../clockscript';



function CustomBackground(){
    return(
        <section className="backgroundContainer">
            {/* this will be the custom image for the background but i cant implement it yet
            <img src={val.bg_image} alt="Your Custom Image" /> */}

            <img src="src/assets/background.jpg" alt="Your Custom Image" /> 

            <div className="clock">
        
                <ul className="time">
                    <li id="hours">
                        00
                    </li>
                    <li>
                        : 
                    </li>

                    <li id="mins">
                        00
                    </li>
                    
                </ul>
                <h2 id="date" className="date">none </h2>
        
            </div>
            <script src="../clockscript.js"></script>
            
        </section>

    );
}   


export default CustomBackground;
