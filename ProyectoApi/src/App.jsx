

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SpecificShow from "./pages/SpecificShow";
import Error from './components/Error 404/Error'
import Search from "./components/Error 404/Search/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/detalles" Component={SpecificShow} />
          <Route path="/*" Component={Error}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
