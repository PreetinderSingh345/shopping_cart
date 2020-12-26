// importing react and CartItem component

import React from "react";
import CartItem from "./CartItem";

// defining and exporting the cart class that extends the React.component class

class Cart extends React.Component{

    // defining the constructor, calling the super constructor(of the React.Component class) and defining the state object containing the props of each cart item component inside products array

    constructor(){

        super();

        this.state={           
            products: [

                {

                    img: "",
                    title: "Phone",
                    description: "A phone",
                    price: 999,
                    qty: 1,
                    id: 1

                },

                {

                    img: "",
                    title: "Watch",
                    description: "A watch",
                    price: 99,
                    qty: 4,
                    id: 2

                },

                {

                    img: "",
                    title: "Laptop",
                    description: "A laptop",
                    price: 9999,
                    qty: 8,
                    id: 3

                }
                
            ]
        }

    } 

    render(){

        //getting the products array property of the state object

        const {products}=this.state;

        return(

            <div className="cart">

                {/* iterating over the porducts and returning each CartItem component with its props object,containing product and key properties */}

                {products.map((product)=>{                
                    return(
                        <CartItem 
                    
                            product={product} 
                            key={product.id}

                        />
                    )
                })}

            </div>

        );

    }

}

export default Cart;