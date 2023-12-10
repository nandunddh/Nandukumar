import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <BrowserRouter basename="/Nandukumar">
        <Routes>
          <Route exact path="/Nandukumar" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
