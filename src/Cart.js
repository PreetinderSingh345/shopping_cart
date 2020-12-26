// importing react and CartItem component

import React from "react";
import CartItem from "./CartItem";

// defining and exporting the cart class that extends the React.component class

class Cart extends React.Component{

    render(){
        return(

            <div className="cart">

                <CartItem/>
                <CartItem/>
                <CartItem/>

            </div>

        );
    }

}

export default Cart;