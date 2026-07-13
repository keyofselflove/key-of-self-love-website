import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
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
import Partners from './components/Partners'
import Policies from './components/Policies'

function App() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'nl' : prev === 'nl' ? 'es' : 'en')
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
          <Route path="/partners" element={<Partners language={language} />} />
          <Route path="/policies" element={<Policies language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
        <a
          href="https://wa.me/2975614808?text=Hello%2C%20I%20would%20like%20more%20information%20about%20the%20experiences%20offered%20by%20Key%20of%20Self%20Love."
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Key of Self Love on WhatsApp"
          className="fixed bottom-5 right-5 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <footer className="bg-gray-900 text-gray-200 py-10">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div><p className="font-serif text-xl text-amber-400">Key of Self Love</p><p className="text-sm mt-2">Transformational wellness experiences in Aruba.</p></div>
            <div className="text-sm space-y-2"><p>By appointment only.</p><p>+297 56 14 808</p><p>keyofselflove@gmail.com</p></div>
            <div className="text-sm flex md:justify-end gap-5"><Link to="/policies" className="hover:text-amber-400">Guest policies</Link><Link to="/contact" className="hover:text-amber-400">Contact</Link></div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
