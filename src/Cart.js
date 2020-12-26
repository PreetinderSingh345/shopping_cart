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

    // handle decrease quantity function to decrease the quantity of the product

    handleDecreaseQuantity=(product)=>{        

        // getting the products array and the index of the product passed as argument inisde the array
        
        const {products}=this.state;
        const index=products.indexOf(product);

        // setting the mininum quantity for the product

        if(products[index].qty==0){
            return ;
        }

        // making chnages in the quantity of the product and setting the state to the new products array

        products[index].qty--;

        this.setState({
            products: products
        });

    }
    
    // handle increase quantity function to increase the quantity of the product

    handleIncreaseQuantity=(product)=>{   
        
        // getting the products array and the index of the product passed as argument inisde the array

        const {products}=this.state;
        const index=products.indexOf(product);

        // setting the maximum quantity for the product

        if(products[index].qty==10){
            
            alert("Cannot increase quantity further");
            return ;
        
        }

        // making chnages in the quantity of the product and setting the state to the new products array

        products[index].qty++;

        this.setState({
            products: products
        });

    }    

    render(){

        //getting the products array property of the state object

        const {products}=this.state;

        return(

            <div className="cart">

                {/* iterating over the porducts and returning each CartItem component with its props object,containing product, key properties and functions to decrease and increase the quantity */}

                {products.map((product)=>{                
                    return(
                        <CartItem 
                    
                            product={product} 
                            key={product.id}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onIncreaseQuantity={this.handleIncreaseQuantity}

                        />
                    )
                })}

            </div>

        );

    }

}

export default Cart;