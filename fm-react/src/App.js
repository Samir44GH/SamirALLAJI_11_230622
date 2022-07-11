import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Error from "./pages/Error";

// import axios from "axios";
// import AffichHello from "./component/AffichHello";
//Création d'un composant qui est une fonction
const App = () => {
  // const [data, setData] = useState([]);

  //La fonction va retourner un return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home/:id" element={<Location />} /> */}
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        {/* //path="*" fonctionne si jamais l'url ne correspond à aucune page et redirige vers la page Error// */}
        <Route path="*" element={<Error />} />
        <Route path="/Error" element={<Error />} />
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
