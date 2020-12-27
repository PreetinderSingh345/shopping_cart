// importing react

import React from "react";

// defining and exporting the CartItem function and passing to it the props object

const CartItem=(props)=>{        

    //getting the values of the needed properties and functions from props.product and props(object restructuring) 

    const {description, title, price, qty}=props.product;    

    const {

        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDelete
    
    }=props;      

    // returning the jsx for the CartItem   

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

                    <div className="cart-item-heading" style={{fontSize: 25}}>{title}</div>
                    <div className="cart-item-description" style={{color: "grey"}}>{description}</div>
                    <div className="cart-item-price" style={{color: "grey"}}>Rs: {price}</div>
                    <div className="cart-item-quantity" style={{color: "grey"}}>Qty: {qty}</div>

                </div>                    

                {/* cart item options container */}

                <div className="cart-item-options-container">

                    {/* cart item options */}

                    {/* calling the on increase, on decrease quantity and on delete functions of the props on the click of plus, minus and delete buttons respectively and passing to them the product(product id in case of delete) */}

                    <div className="cart-item-options dec-option" onClick={()=>onDecreaseQuantity(product)}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" alt="minus"/>
                    </div>

                    <div className="cart-item-options inc-option" onClick={()=>onIncreaseQuantity(product)}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" alt="plus"/></div>                      

                    <div className="cart-item-options delete-option" onClick={()=>onDelete(product.id)}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" alt="delete"/>
                    </div>

                </div>

            </div>

        </div>

    );

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