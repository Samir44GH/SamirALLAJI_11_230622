import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import About from "./pages/About";
import Error from "./pages/Error";

//Création d'un composant qui est une fonction
const App = () => {
  // const [data, setData] = useState([]);

  //La fonction va retourner un return
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
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
