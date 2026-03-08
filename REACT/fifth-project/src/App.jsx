import React from "react";
import './App.css';
import Footer from './footer';


function App() {
return(
  <div className="app">
    {/* Header */}
    <div className="header">
      <div className="logo">
        <h1>Lexus</h1>
      </div>
      <nav className="navigation">
        <a href="#">Home </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Location</a>
      </nav>
    </div>
      {/* Hero */}
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Hello Welcome to Nalunda</h2>
        <p className="hero-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn">Get Start</button>
      </div>
    </section>
    {/* card */}
    <section className="card">
      <div className="top">
        <h2 className="top-title">Our Features</h2>
        <p className="top-subtitle">check it out</p>
      </div>
      <div className="card-container">
        <div className="cards">
          <h1>Name</h1>
          <p>Number</p>
          <p>Address</p>
        </div>
        <div className="cards">
          <h1>Name</h1>
          <p>Number</p>
          <p>Address</p>
        </div>
        <div className="cards">
          <h1>Name</h1>
          <p>Number</p>
          <p>Address</p>
        </div>
        <div className="cards">
          <h1>Name</h1>
          <p>Number</p>
          <p>Address</p>
        </div>
      </div>
    </section>
    {/* Footer */}
    <Footer />
  </div>
)
}
export default App;