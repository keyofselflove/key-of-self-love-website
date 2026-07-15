import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
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
import ElementalExperienceDetail from './components/ElementalExperienceDetail'
import { MoreThanWhatWeHear, SoundResonanceCategory } from './components/JournalSoundResonance'
import ReviewForm, { ReviewConfirmation } from './components/ReviewForm'

const ScrollToPageTop = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        if (target) target.scrollIntoView()
        else window.scrollTo({ top:0, left:0 })
      } else window.scrollTo({ top:0, left:0 })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('key-of-self-love-language') || 'en')
  const globalCopy = {
    en: { whatsapp:'Hello, I would like more information about the experiences offered by Key of Self Love.', whatsappLabel:'Contact Key of Self Love on WhatsApp', tagline:'Transformational wellness experiences in Aruba.', appointment:'By appointment only.', policies:'Guest policies', contact:'Contact' },
    nl: { whatsapp:'Hallo, ik ontvang graag meer informatie over de ervaringen van Key of Self Love.', whatsappLabel:'Neem via WhatsApp contact op met Key of Self Love', tagline:'Transformerende wellnesservaringen op Aruba.', appointment:'Alleen op afspraak.', policies:'Voorwaarden voor gasten', contact:'Contact' },
    es: { whatsapp:'Hola, me gustaría recibir más información sobre las experiencias de Key of Self Love.', whatsappLabel:'Contactar con Key of Self Love por WhatsApp', tagline:'Experiencias de bienestar transformacional en Aruba.', appointment:'Solo con cita previa.', policies:'Condiciones para participantes', contact:'Contacto' }
  }
  const g = globalCopy[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'nl' : prev === 'nl' ? 'es' : 'en')
  }

  useEffect(() => {
    window.localStorage.setItem('key-of-self-love-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <Navigation language={language} toggleLanguage={toggleLanguage} />
        <ScrollToPageTop />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/sound-healing" element={<SoundHealing language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/experiences/:element" element={<ElementalExperienceDetail language={language} />} />
          <Route path="/resonance-collection" element={<Navigate to="/services" replace />} />
          <Route path="/resonance-healing-journey" element={<Navigate to="/services#resonance-healing-journey" replace />} />
          <Route path="/testimonials" element={<Testimonials language={language} />} />
          <Route path="/share-your-experience" element={<ReviewForm language={language} />} />
          <Route path="/review-thank-you" element={<ReviewConfirmation language={language} />} />
          <Route path="/blog" element={<Blog language={language} />} />
          <Route path="/blog/sound-and-resonance" element={<SoundResonanceCategory language={language} />} />
          <Route path="/blog/sound-and-resonance/more-than-what-we-hear" element={<MoreThanWhatWeHear language={language} />} />
          <Route path="/partners" element={<Partners language={language} />} />
          <Route path="/policies" element={<Policies language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
        <a
          href={`https://wa.me/2975614808?text=${encodeURIComponent(g.whatsapp)}`}
          target="_blank"
          rel="noreferrer"
          aria-label={g.whatsappLabel}
          className="fixed bottom-5 right-5 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <footer className="bg-[#CFC8BD] text-gray-800 py-10">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            <div><p className="font-serif text-xl text-amber-700">Key of Self Love</p><p className="text-sm mt-2">{g.tagline}</p></div>
            <div className="text-sm space-y-2"><p>{g.appointment}</p><p>+297 56 14 808</p><p><a href="mailto:keyofselflove@gmail.com" className="hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">keyofselflove@gmail.com</a></p></div>
            <div className="text-sm flex md:justify-end gap-5"><Link to="/policies" className="hover:text-amber-700">{g.policies}</Link><Link to="/contact" className="hover:text-amber-700">{g.contact}</Link></div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
