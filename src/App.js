// importing react, Cart and Navbar components, font awesome icons and firebase

import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";

import * as firebase from "firebase";

// defining and exporting the App class which extends the React.Component class 

class App extends React.Component {

  // defining the constructor, calling the super constructor(of the React.Component class), defining the state object containing the products array(empty initially), the loading value(true initially), the selected value(pAsc-price and ascending initially) and the database

  constructor(){

    super();

    this.state={        

      products: [],
      loading: true,
      selectedValue: "pAsc"

    }

    this.db=firebase.default.firestore();    

  } 

  // component did mount function(called once, when the component is rendered initially) to make queries to the database(firebase)

  componentDidMount(){

    // making queries to the firestore(through firebase) i.e our database and adding on snapshot event listener(to listen for changes inside the products collection and re-render the component accordingly)

    this.db
      .collection("products")
      .orderBy("price", "asc")
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

    // resetting the selected and sort value(on snapshot will set it again to price-low to high)

    this.setState({
      selectedValue: "pAsc"
    }, ()=>{

      let element=document.getElementById("sort");
      element.value="pAsc";

    }); 

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

    // getting the reference of the document to be updated inside the database

    const docRef=this.db.collection("products").doc(products[index].id);

    // resetting the selected and sort value(on snapshot will set it again to price-low to high)

    this.setState({
      selectedValue: "pAsc"
    }, ()=>{

      let element=document.getElementById("sort");
      element.value="pAsc";

    }); 

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

    // getting the reference of the document to be deleted inside the database

    const docRef=this.db.collection("products").doc(id);

    // deleting the document and printing a message for success/error

    docRef
      .delete()
      .then(()=>{
        console.log("Deleted successfully")      
      })
      .catch((err)=>{
        console.log("Error while deleting : "+err);
      })


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

  // handle sort function to sort the products 

  handleSort=(event)=>{    

    // defining field and aOrd(ascending or descending) values according to the selectedValue
  
    let field=null;
    let aOrD=null;    

    let selectedValue=event.target.value;          

    if(selectedValue[0]=="p"){
      field="price";
    }
    else{
      field="qty";
    }

    if(selectedValue[1]=="A"){
      aOrD="asc";
    }
    else{
      aOrD="desc";    
    }

    // setting the state to the new selectedValue and loading value

    this.setState({

      selectedValue: selectedValue,        
      loading: true

    });   

    // sorting the products according to the field and aOrD values
    
      this.db
        .collection("products")
        .orderBy(field, aOrD)      
        .get()
        .then((snapshot)=>{

          // getting the products array

          const products=snapshot.docs.map((doc)=>{

            const product=doc.data();
            product["id"]=doc.id;
            
            return product;

          });

          // setting the state to the new products and loading value

          this.setState({

            products: products,
            loading: false

          });
          
        });
        
  }

  render(){

    // getting the properties of the state

    const {products, loading}=this.state;

    // returning the App component, comprising of the Navbar, the loading html text(shown while the products are being fetched), the Cart component(shown when the products have been fetched) and the footer component(with their props)

    return (

      <div className="App">        
          
        <Navbar

          selectValue={this.state.selectedValue}
          handleSort={this.handleSort}
          count={this.getItemCount()}        

        />                

        {
          
          loading 
          
          ? <div id="loading-container">
          <FontAwesomeIcon icon={faSpinner} id="loading-icon"/>
          <span>Loading</span>
          </div>            

          :<Cart          
        
          products={products}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDelete={this.handleDelete}
        
          />

        }

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