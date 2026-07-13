import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Waves, Users, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/brand-logo.png'
import homeBeach from '../assets/aruba-home-hero.jpg'
import homeGong from '../assets/home-gong.jpg'

const copy = {
  en: {
    title: 'Transformational wellness experiences in Aruba',
    intro: 'Reconnect with yourself, nature and what truly matters through sound, resonance and meaningful experiences rooted in Aruba.',
    primary: 'Explore Experiences', secondary: 'Ask Us on WhatsApp',
    signature: 'The Resonance Experience', signatureText: 'A private half-day journey combining sound and resonance, nature, optional ocean and snorkeling elements, mindful nourishment, coaching and guided reflection. Available by appointment; the exact location is shared after booking.',
    pillars: ['Authentic connection', 'Small, personal groups', 'Nature-led wellbeing'],
    activeTitle: 'Available now', activeText: 'Resonance Healing Journeys, Sound Bath Experiences and The Resonance Experience are currently available by appointment.',
    futureTitle: 'Growing with intention', futureText: 'Couples experiences, workshops, retreats and selected partner programmes are being developed carefully and will only become bookable when operationally ready.',
    learn: 'View all experiences', about: 'Meet Mieke & Marcel'
  },
  nl: {
    title: 'Transformationele wellnesservaringen op Aruba',
    intro: 'Maak opnieuw verbinding met jezelf, de natuur en wat werkelijk belangrijk is via klank, resonantie en betekenisvolle ervaringen geworteld in Aruba.',
    primary: 'Bekijk Ervaringen', secondary: 'Vraag het via WhatsApp',
    signature: 'The Resonance Experience', signatureText: 'Een persoonlijke halve-dagervaring met klank en resonantie, natuur, optionele oceaan- en snorkelonderdelen, bewuste voeding, coaching en begeleide reflectie. Beschikbaar op afspraak; de exacte locatie wordt na boeking gedeeld.',
    pillars: ['Oprechte verbinding', 'Kleine, persoonlijke groepen', 'Welzijn vanuit de natuur'],
    activeTitle: 'Nu beschikbaar', activeText: 'Resonance Healing Journeys, Sound Bath Experiences en The Resonance Experience zijn momenteel op afspraak beschikbaar.',
    futureTitle: 'Bewust in ontwikkeling', futureText: 'Couples experiences, workshops, retreats en geselecteerde partnerprogramma’s worden zorgvuldig ontwikkeld en zijn pas boekbaar zodra ze operationeel gereed zijn.',
    learn: 'Bekijk alle ervaringen', about: 'Ontmoet Mieke & Marcel'
  },
  es: {
    title: 'Experiencias de bienestar transformador en Aruba',
    intro: 'Reconecta contigo, con la naturaleza y con lo que realmente importa mediante sonido, resonancia y experiencias significativas arraigadas en Aruba.',
    primary: 'Ver Experiencias', secondary: 'Pregúntanos por WhatsApp',
    signature: 'The Resonance Experience', signatureText: 'Una experiencia privada de medio día con sonido y resonancia, naturaleza, elementos opcionales de océano y esnórquel, alimentación consciente, coaching y reflexión guiada. Disponible con cita previa; la ubicación exacta se comparte después de reservar.',
    pillars: ['Conexión auténtica', 'Grupos pequeños y personales', 'Bienestar inspirado en la naturaleza'],
    activeTitle: 'Disponible ahora', activeText: 'Resonance Healing Journeys, Sound Bath Experiences y The Resonance Experience están disponibles con cita previa.',
    futureTitle: 'Creciendo con intención', futureText: 'Las experiencias para parejas, talleres, retiros y programas para socios están en desarrollo y solo se podrán reservar cuando estén listos.',
    learn: 'Ver todas las experiencias', about: 'Conoce a Mieke y Marcel'
  }
}

const Home = ({ language }) => {
  const t = copy[language] || copy.en
  const whatsapp = 'https://wa.me/2975614808?text=Hello%2C%20I%20would%20like%20more%20information%20about%20the%20experiences%20offered%20by%20Key%20of%20Self%20Love.'
  return <div className="pt-20">
    <section className="relative min-h-[85vh] flex items-center bg-cover bg-center" style={{backgroundImage:`linear-gradient(120deg,rgba(255,253,248,.84),rgba(239,253,250,.73),rgba(255,248,251,.78)),url(${homeBeach})`,backgroundPosition:'center 55%'}}>
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="max-w-5xl mx-auto px-4 text-center">
        <img src={logo} alt="Key of Self Love" className="h-28 w-28 mx-auto mb-6" />
        <p className="uppercase tracking-[.25em] text-amber-700 mb-4">Key of Self Love · Aruba</p>
        <h1 className="text-5xl md:text-7xl font-serif text-amber-700 mb-6">{t.title}</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-9">{t.intro}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800"><Link to="/services">{t.primary}</Link></Button>
          <Button asChild size="lg" variant="outline"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5 mr-2" />{t.secondary}</a></Button>
        </div>
      </motion.div>
    </section>
    <section className="py-20 bg-white"><div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div className="overflow-hidden rounded-2xl shadow-xl bg-amber-50">
        <img src={homeGong} alt="Gong used in Key of Self Love resonance experiences" className="w-full h-[520px] object-cover object-center brightness-[1.18] saturate-[.78] contrast-[.9]" />
      </div>
      <div><p className="text-sm uppercase tracking-widest text-amber-700 mb-3">Signature experience</p><h2 className="text-4xl font-serif text-amber-700 mb-5">{t.signature}</h2><p className="text-lg text-gray-700 leading-relaxed mb-8">{t.signatureText}</p><Button asChild className="bg-amber-700"><Link to="/services">{t.learn}</Link></Button></div>
    </div></section>
    <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"><div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">{t.pillars.map((x,i)=>{const Icon=[Heart,Users,Waves][i];return <div key={x} className="bg-white p-7 rounded-xl text-center shadow-sm"><Icon className="h-8 w-8 text-amber-700 mx-auto mb-4"/><h3 className="text-xl font-serif text-amber-700">{x}</h3></div>})}</div></section>
    <section className="py-20 bg-white"><div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      <div className="border border-amber-200 rounded-xl p-8"><span className="text-xs uppercase tracking-widest text-green-700">Current</span><h2 className="text-3xl font-serif text-amber-700 my-3">{t.activeTitle}</h2><p className="text-gray-700">{t.activeText}</p></div>
      <div className="border border-purple-200 rounded-xl p-8"><span className="text-xs uppercase tracking-widest text-purple-700">In development</span><h2 className="text-3xl font-serif text-amber-700 my-3">{t.futureTitle}</h2><p className="text-gray-700 mb-5">{t.futureText}</p><Link className="text-amber-700 underline" to="/about">{t.about}</Link></div>
    </div></section>
  </div>
}
export default Home
