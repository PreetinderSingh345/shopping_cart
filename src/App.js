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

  // add product function to add a product to the database(passed in the form of an object, then we print the document reference(after the add promise is resolved) and have a catch statement(to catch any error))

  addProduct=()=>{

    this.db
      .collection("products")  
      .add({

        img: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        title: "Laptop",
        description: "Macbook air",
        price: "54999",
        qty: "1"

      })
      .then((docRef)=>{ 
        console.log("Product has been added to the database : ",docRef);
      })
      .catch((err)=>{
        console.log("Error while adding product : "+err);
      })

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

    // getting the properties of the state

    const {products, loading}=this.state;

    // returning the App component, comprising of the Navbar, the loading html text(shown while the products are being fetched), an add product button(to add a laptop) with basic styling, the Cart components and the footer component(with their props)

    return (

      <div className="App">        
          
        <Navbar
          count={this.getItemCount()}
        />

        {loading && <h1>Loading products</h1>}

        <button onClick={this.addProduct} style={{

          padding: 10,
          margin: 10,
          backgroundColor: "lightsteelblue",
          border: "2px outline darkslategrey",
          borderRadius: "10px",
          fontWeight: "bold",
          outline: "none"

        }}>Add product</button>

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