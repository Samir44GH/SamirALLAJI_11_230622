import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
// import AffichHello from "./component/AffichHello";
//Création d'un composant qui est une fonction
const App = () => {
  //La fonction va retourner un return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <h1>Hello React</h1>
    //   <AffichHello text="Bonjour" />
    // </div>
  );
};
//A chaque fois notre fonction, nous l'exportons pour en faire ce que nous voulons
export default App;

// const App = () => {
//
//   return <h1>Hello React World</h1>;
// };

//
// export default App;

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
