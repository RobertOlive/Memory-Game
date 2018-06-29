import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardCont from "./components/CardCont";
import "./components/styles.css"

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Hero/>
        <CardCont className="cardCont"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
