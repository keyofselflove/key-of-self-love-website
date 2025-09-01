import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import SoundHealing from './components/SoundHealing'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [language, setLanguage] = useState('nl')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'nl' ? 'en' : 'nl')
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Navigation language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/sound-healing" element={<SoundHealing language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/testimonials" element={<Testimonials language={language} />} />
          <Route path="/blog" element={<Blog language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
