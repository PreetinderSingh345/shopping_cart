// importing react

import React from "react";

// defining and exporting the cart item class that extends the React.component class

class CartItem extends React.Component{

    // rendering the cart item component that returns the jsx for the cart item

    render(){
        return(            

            // cart item

            <div className="cart-item">

                {/* cart item image container */}

                <div className="cart-item-img-container">
                    <img style={styles.image}/>
                </div>

                {/* cart item main content and options container */}

                <div className="cart-item-main-content-options-container">

                    {/* cart item main content container */}

                    <div className="cart-item-main-content-contaier">

                        {/* cart item heading, description, price and quantity */}

                        <div className="cart-item-heading" style={{fontSize: 25}}>Phone</div>
                        <div className="cart-item-description" style={{color: "grey"}}>A phone</div>
                        <div className="cart-item-price" style={{color: "grey"}}>Rs: 999</div>
                        <div className="cart-item-quantity" style={{color: "grey"}}>Qty: 1</div>

                    </div>                    

                    {/* cart item options container */}

                    <div className="cart-item-options-container">

                        {/* cart item options */}

                        <div className="cart-item-options dec-option" ></div>
                        <div className="cart-item-options inc-option" ></div>

                        <div className="cart-item-options delete-option"></div>

                    </div>

                </div>

            </div>

        );
    }

}

// defining the styles object

const styles={

    // defining the image style object

    image: {

        height: 100,
        width: 100,
        borderRadius: 5,
        backgroundColor: "lightgrey"

    }

}

export default CartItem;