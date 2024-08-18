import React from "react";

import '../App.css';

// import { RecentlyViewedData } from "./RecentlyViewedData";

// the code below is used to map from the above data file, not yet implemented for desktop
// ------------------------------------------------
// {RecentlyViewedData.map((val,key) => {
//     return(
//         <li className="list-items">
            
//             <div className="link">
//                 <a href="{val.link}">{val.title}</a>
//             </div>
//             <div className="data">
//                 {val.date}
//             </div>

//         </li>
        
//     );
// })}
// ---------------------------------------------------


function RecentlyViewed(){

    return(
        <div className="recentlyViewed">
            
            <h3>Recently Viewed</h3>
            
            <ul className="viewList">
                <li>
                    none...
                </li>
                
                
                </ul>
                

        </div>
        



    );
}


export default RecentlyViewed;