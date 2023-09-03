import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Home />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
