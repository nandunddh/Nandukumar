import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}

      <Routes>
        <Route exact path="/Nandukumar" element={<Home />} />
        {/* <Route path="/#about" element={<Home />} /> */}
        {/* <Route path="/Nandukumar/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
