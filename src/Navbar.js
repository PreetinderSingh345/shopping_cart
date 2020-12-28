// importing react and font awesome icons

import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the Navbar function

const Navbar=(props)=>{

        // returning the jsx for the Navbar

        return(

            <div id="navbar">

                <span id="heading">Your Cart</span>
                <FontAwesomeIcon id="cart-icon" icon={faCartArrowDown}/>
                <span id="item-count">{props.count}</span>

            </div>

        );

}

export default Navbar;