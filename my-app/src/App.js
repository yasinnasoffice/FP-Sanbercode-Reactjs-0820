import React from 'react';
//import ReactDom from 'react-dom';
//import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import Home from './FINALPROJECT/Pages/Home';
import Header from './FINALPROJECT/Component/Header';
import Footer from './FINALPROJECT/Component/Footer';
import Sidebar_class from'./FINALPROJECT/Component/Sidebar_class';
//import Login from './FINALPROJECT/Pages/Login';


function App() {
  return (
    <div className="App"> 
     <Header/>
     <Home/>
     <Footer/>
     <Sidebar_class/>
     </div>
  );
    
}

export default App;


