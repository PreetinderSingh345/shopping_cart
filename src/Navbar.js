// importing react

import React from "react";

// defining and exporting the Navbar function

const Navbar=()=>{

        // returning the jsx for the Navbar

        return(

            <div style={styles.cartItemContainer}>

                <img style={styles.image} src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg" alt="cart-icon"/>
                <span>3</span>

            </div>

        );

}

// defining the styles object

const styles={

    // defining cart item container and image styling

    cartItemContainer: {

        padding: 10,
        backgroundColor: "lightgrey"        

    },

    image: {

        height: 50,
        width: 50
    
    }

}

export default Navbar;