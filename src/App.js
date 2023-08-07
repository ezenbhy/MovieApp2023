import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './routes/Home'
import About from './routes/About'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App