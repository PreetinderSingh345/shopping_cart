// importing react

import React from "react";

// defining and exporting the cart item class that extends the React.component class

class CartItem extends React.Component{    
    
    // decrease quantity function to decrease the quantity of the item

    decreaseQuantity=()=>{

        // setting the minimum quantity of the item to be 0

        const {qty}=this.state;
                    
        if(qty==0){

            alert("Cannot decrease quantity futher");
            return ;

        }

        this.setState((prevState)=>{
            return {
                qty: prevState.qty-1
            }
        });

    }

    // increase quantity function to increase the quantity of the item

    increaseQuantity=()=>{   

        // setting the maximum quantity of the item to be 10

        const {qty}=this.state;
        
        if(qty==10){

            alert("Cannot increase quantity further");
            return ;

        }

        this.setState((prevState)=>{
            return {
                qty: prevState.qty+1
            }
        });
        
    }

    // rendering the cart item component that returns the jsx for the cart item

    render(){

        // getting the values of the property object of the props object(object restructuring)

        const {description, title, price, qty}=this.props.product;        

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

                        <div className="cart-item-options dec-option" onClick={this.decreaseQuantity}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg" alt="minus"/>
                        </div>

                        <div className="cart-item-options inc-option" onClick={this.increaseQuantity}>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg" alt="plus"/></div>                      

                        <div className="cart-item-options delete-option">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg" alt="delete"/>
                        </div>

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