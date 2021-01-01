// importing react, react dom, index styling, App component, firebase and firestore

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from "firebase";
import "firebase/firestore"

// defining firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBu8eNJ9USJYO8WSV3N1qeIn7-CfPxZmu0",
  authDomain: "cart-8e29b.firebaseapp.com",
  projectId: "cart-8e29b",
  storageBucket: "cart-8e29b.appspot.com",
  messagingSenderId: "1095169277054",
  appId: "1:1095169277054:web:15af663d3db7b336602c2f"

};

// initializing firebase configuration

firebase.default.initializeApp(firebaseConfig);

// telling react dom to render the App component as the root element

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')

);