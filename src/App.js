// importing react, Cart and Navbar components, font awesome icons and firebase

import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";

import * as firebase from "firebase";

// defining and exporting the App class which extends the React.Component class 

class App extends React.Component {

  // defining the constructor, calling the super constructor(of the React.Component class), defining the state object containing the products array(empty initially) and the loading value(true initially) and the database

  constructor(){

    super();

    this.state={        

      products: [],
      loading: true

    }

    this.db=firebase.default.firestore();

  } 

  // component did mount function(called once, when the component is rendered initially) to make queries to the database(firebase)

  componentDidMount(){

    // making queries to the firestore(through firebase) i.e our database and adding on snapshot event listener(to listen for changes inside the products collection and re-render the component accordingly)

    this.db
      .collection("products")
      .onSnapshot((snapshot)=>{

        // iterating on the documents(each document is a product) of the snapshot, adding an id property to each product and populating products

        const products=snapshot.docs.map((doc)=>{
          
          const product=doc.data();
          product["id"]=doc.id;
          
          return product;

        })

        // set the state to the new products array and false loading value(loading should stop as the state is going to change)

        this.setState({

          products: products,
          loading: false

        });

      });

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

    // getting the reference of the document to be updated inside the database

    const docRef=this.db.collection("products").doc(products[index].id);

    // updating the quantity inside the document and printing a message for success/error

    docRef
      .update({
        qty: products[index].qty-1
      })
      .then(()=>{
        console.log("Updated successfully");
      })
      .catch((err)=>{
        console.log("Error while updating : "+err);
      })

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

    // getting the reference of the document to be updated inside the database

    const docRef=this.db.collection("products").doc(products[index].id);

    // updating the quantity inside the document and printing a message for success/error

    docRef
      .update({
        qty: products[index].qty+1
      })
      .then(()=>{
        console.log("Updated successfully");
      })
      .catch((err)=>{
        console.log("Error while updating : "+err);
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

    // getting the properties of the state

    const {products, loading}=this.state;

    // returning the App component, comprising of the Navbar, the loading html text(shown while the products are being fetched), an add product button(to add a laptop) with basic styling, the Cart components and the footer component(with their props)

    return (

      <div className="App">        
          
        <Navbar
          count={this.getItemCount()}
        />

        {loading && <h1>Loading products</h1>}

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