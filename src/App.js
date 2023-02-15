
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Momoments from './components/Momoments/Momoments';
import Footer from './components/Footer/Footer';

const App = () => {


  return (
    
   <div className="App">
      <Header />
      <Banner />
      <Services />
      <Momoments />
      <Footer />
  </div>
  )
};

export default App;
