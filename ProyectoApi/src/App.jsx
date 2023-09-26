import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SpecificShow from "./pages/SpecificShow";
import Error from "./pages/Error"
import Navbar from "./components/generals/navBar/Navbar";
import Footer from './components/generals/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/details/:id" Component={SpecificShow} />
          <Route path="/*" Component={Error} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
