// importing react and CartItem component

import React from "react";
import CartItem from "./CartItem";

// defining and exporting the Cart function

const Cart=(props)=>{

    //getting the products array from the props

    const {products}=props;

    return(

        <div className="cart">

            {/* iterating over the products and returning each CartItem component with its props object,containing product, key properties and functions to decrease, increase the quantity and delete the product */}

            {products.map((product)=>{                
                return(
                    <CartItem 
                
                        product={product} 
                        key={product.id}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDelete={props.onDelete}

                    />
                )
            })}

        </div>

    );

}

export default Cart;