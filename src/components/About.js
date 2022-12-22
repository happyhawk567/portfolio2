import React from "react";


import "./About.css";
// import "./logo512.png"
import logo from './smile.png'


export default function About() {
    return (


    <div className ="row">
      <div className ="column-left">
      <div className ="about">
          <div className="about-intro">
    
           <h1 class="about-intro"> Hello! My name is <div className="highlight"> Happy Hawk </div>  </h1> 
            <h2 class="about-intro">
              I am a Computer Science student at Brown University with an interest in web design and development. I am particulary interested in commerce platforms, as shown through multiple projects below. 
            </h2>
          </div>
          </div>
          </div>
          <div className ="column-right">
      
          <div className ="photo">
     
          <img src={logo} className="photo-img" alt="logo" />

        </div>
        </div>
        </div>
     
        
    );
  }