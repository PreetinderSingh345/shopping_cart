// importing react

import React from "react";

// defining and exporting the Navbar function

const Navbar=(props)=>{

        // returning the jsx for the Navbar

        return(

            <div id="navbar">

                <img src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg" alt="cart-icon"/>
                <span>{props.count}</span>

            </div>

        );

}

export default Navbar;