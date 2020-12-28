// importing react, Cart and Navbar components and font awesome icons

import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";

// defining and exporting the App class which extends the React.Component class 

class App extends React.Component {

  // defining the constructor, calling the super constructor(of the React.Component class) and defining the state object containing the products array

  constructor(){

    super();

    this.state={           
      products: [

        {

          img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Phone",
          description: "Iphone 11",
          price: 64999,
          qty: 1,
          id: 1

        },

        {

          img: "https://images.unsplash.com/photo-1492065438790-d3c90cbc6e57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Watch",
          description: "Titan classic",
          price: 5999,
          qty: 1,
          id: 2

        },

        {

          img: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Laptop",
          description: "Macbook air",
          price: 54999,
          qty: 1,
          id: 3

        },

        {

          img: "https://images.unsplash.com/photo-1586952518485-11b180e92764?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBjJTIwc2NyZWVufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Desktop",
          description: "Hp ultra",
          price: 69999,
          qty: 1,
          id: 4

        },

        {

          img: "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Shoes",
          description: "Adidas air 2",
          price: 4999,
          qty: 1,
          id: 5

        },

        {

          img: "https://images.unsplash.com/photo-1595576700326-bdb94c8d4156?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFza3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Mask",
          description: "Lee cooper",
          price: 499,
          qty: 1,
          id: 6

        },

        {

          img: "https://images.unsplash.com/photo-1579038932368-c8da2ebcbd79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Headphones",
          description: "Marshall 3",
          price: 12999,
          qty: 1,
          id: 7

        },

        {

          img: "https://images.unsplash.com/photo-1515775356328-191f2e02390e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGdsYXNzZXN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Specs",
          description: "Rayban slim",
          price: 2999,
          qty: 1,
          id: 8

        },

        {

          img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Football",
          description: "Puma lite",
          price: 3499,
          qty: 1,
          id: 9

        },

        {

          img: "https://images.unsplash.com/photo-1579260668779-fb03c244ab66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Speaker",
          description: "Marshall base",
          price: 34999,
          qty: 1,
          id: 10

        },

        {

          img: "https://images.unsplash.com/photo-1518888732246-9f52469bfa65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN0bWFzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Decorations",
          description: "Home decor",
          price: 599,
          qty: 1,
          id: 11

        },

        {

          img: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Ball",
          description: "SG cherry",
          price: 999,
          qty: 1,
          id: 12

        },

        {

          img: "https://images.unsplash.com/photo-1596162955779-9c8faa3d4e3c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGFibGUlMjB0ZW5uaXN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Chair",
          description: "New tech",
          price: 4999,
          qty: 1,
          id: 13

        },

        {

          img: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          title: "Shelf",
          description: "Home solutions",
          price: 7999,
          qty: 1,
          id: 14

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
        
      alert("The seller does not allow more than 10 items for a customer");
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

  // get total amount function to get the total amount of the items

  getTotalAmount=()=>{

    // getting the products array and initialising the amount

    const {products}=this.state;
    let amount=0;

    // iterating over the products, adding their commulative prices to amount and returning it

    products.forEach((product)=>{
      amount+=(product.qty*product.price);
    });

    return amount;

  }

  render(){

    // getting the products array

    const {products}=this.state;

    // returning the App component, comprising of the Navbar, the Cart components and the footer component(with their props)

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

        <div id="footer">

          <FontAwesomeIcon id="bill-icon" icon={faMoneyBillAlt}/>
          <span>Subtotal : </span>
          <span id="total">{this.getTotalAmount()}</span>

        </div>
  
      </div>
  
    );
  }

}

export default App;