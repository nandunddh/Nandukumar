import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
