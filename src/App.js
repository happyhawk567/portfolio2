import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css"


export default function App() {
  <head>
        <base href="~/" />
    </head>
  return (

    <div class="App">
      <div class="topnav">
   
   <a href="#about">ABOUT ME</a>
   <a href="#projects">PROJECTS</a>

 </div>
      <section id="about">
      <About/>
      </section>
      <section id="projects">
      <Projects/>
      </section>

      
      <section id="iterative">
 
      </section>
    </div>
  );
}





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
