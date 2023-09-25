
function App() {

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SpecificShow from "./pages/SpecificShow";
import Error from './components/Error 404/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/detalles" Component={SpecificShow} />
           <Error/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
