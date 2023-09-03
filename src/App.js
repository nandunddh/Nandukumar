import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Home />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
