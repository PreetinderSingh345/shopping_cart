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

            <select 

                // calling the handle sort function(provided by props and passing to it the event) on the event when the selected value in the dropdown changes

                id="sort"
                value={props.selectedValue}
                onChange={(event)=>{props.handleSort(event)}}
                
            >                                

                <optgroup label="price">
                    <option value="pAsc">low to high(default)</option>
                    <option value="pDesc">high to low</option>
                </optgroup>

                <optgroup label="quantity">
                    <option value="qAsc">low to high</option>
                    <option value="qDesc">high to low</option>
                </optgroup>

            </select>

            <FontAwesomeIcon id="cart-icon" icon={faCartArrowDown}/>
            <span id="item-count">{props.count}</span>

        </div>

    );        

}

export default Navbar;