import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SpecificShow from "./pages/SpecificShow";
import Error from "./components/Error404/Error"
import Navbar from "./components/navBar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/details/:id" Component={SpecificShow} />
          <Route path="*" Component={Error} />

        </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
