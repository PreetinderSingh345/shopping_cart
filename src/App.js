// importing react, Cart and Navbar components

import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

// defining and exporting the App class which extends the React.Component class 

class App extends React.Component {

  // defining the constructor, calling the super constructor(of the React.Component class) and defining the state object containing the products array

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

    // making chnages in the quantity of the product and setting the state of products to the new products array

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

    // making chnages in the quantity of the product and setting the state of products to the new products array

    products[index].qty++;

    this.setState({
      products: products
    });

  }    

  // handle delete function to delete the product associated with the provided id

  handleDelete=(id)=>{

    // getting the products array and filtering the array to remove the product with the id i.e. passed as the argument

    const {products}=this.state;

    const items=products.filter((item)=>{
      return item.id!=id
    })

    // setting the state of products to the items

    this.setState({
      products: items
    });

  }

  // get item count function to get the count of the total number of items

  getItemCount=()=>{

    // getting the products array and initialising the count

    const {products}=this.state;
    let count=0;

    // iterating over the products, adding their quantity to count and returning it

    products.forEach((product)=>{
      count+=product.qty;
    });

    return count;

  }

  render(){

    // getting the products array

    const {products}=this.state;

    // returning the App component, comprising of the Navbar and the Cart components(with their props)

    return (

      <div className="App">
  
        <Navbar
          count={this.getItemCount()}
        />

        <Cart
        
          products={products}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDelete={this.handleDelete}
        
        />
  
      </div>
  
    );
  }

}

export default App;