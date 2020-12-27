// importing react, Cart and Navbar components

import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

// defining and exporting the App function which returns the App component

function App() {
  return (

    <div className="App">

      <Navbar/>
      <Cart/>

    </div>

  );
}

export default App;