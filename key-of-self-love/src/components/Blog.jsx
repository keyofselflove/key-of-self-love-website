import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { BookOpen, Waves, Leaf, Heart } from 'lucide-react'
import journalHero from '../assets/journal-hero.jpg'

const copy={
  en:{title:'Journal',sub:'Reflections on sound, nature, Aruba and meaningful transformation.',intro:'The Journal is being created as a place for thoughtful, educational and experience-led stories. Articles will be published only when complete and properly reviewed.',topics:['Sound & Resonance','Aruba & Nature Immersion','Wellbeing & Conscious Living','Behind the Experience'],cta:'Have a question in the meantime?',contact:'Contact us',open:'Open Sound & Resonance stories'},
  nl:{title:'Journal',sub:'Reflecties over klank, natuur, Aruba en betekenisvolle transformatie.',intro:'Het Journal wordt een plek voor doordachte, educatieve en ervaringsgerichte verhalen. Artikelen verschijnen pas wanneer ze compleet en zorgvuldig gecontroleerd zijn.',topics:['Klank & resonantie','Aruba en natuurbeleving','Welzijn en bewust leven','Achter de ervaringen'],cta:'Heb je ondertussen een vraag?',contact:'Neem contact op',open:'Open de verhalen over Klank & resonantie'},
  es:{title:'Journal',sub:'Reflexiones sobre sonido, naturaleza, Aruba y una transformación significativa.',intro:'El Journal está concebido como un espacio para historias reflexivas, educativas y basadas en la experiencia. Los artículos se publicarán únicamente cuando estén completos y hayan sido revisados cuidadosamente.',topics:['Sonido y resonancia','Aruba e inmersión en la naturaleza','Bienestar y vida consciente','Detrás de la experiencia'],cta:'¿Tienes alguna pregunta mientras tanto?',contact:'Contáctanos',open:'Abrir las historias de Sonido y resonancia'}
}

const Blog=({language})=>{
  const t=copy[language]||copy.en
  const icons=[Waves,Leaf,Heart,BookOpen]

  return <div className="pt-20">
    <section className="min-h-[500px] md:min-h-[610px] flex items-center bg-cover bg-center text-center" style={{backgroundImage:`linear-gradient(rgba(255,253,248,.22),rgba(255,253,248,.70)),url(${journalHero})`}}>
      <div className="max-w-4xl mx-auto px-4 py-24">
        <BookOpen className="h-10 w-10 text-amber-700 mx-auto mb-5 drop-shadow-[0_2px_8px_rgba(255,255,255,.95)]"/>
        <h1 className="text-5xl md:text-6xl font-serif text-amber-700 mb-4 drop-shadow-[0_2px_12px_rgba(255,255,255,.95)]">{t.title}</h1>
        <p className="text-xl md:text-2xl text-gray-800 drop-shadow-[0_1px_8px_rgba(255,255,255,.95)]">{t.sub}</p>
      </div>
    </section>
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">{t.intro}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {t.topics.map((topic,index)=>{
            const Icon=icons[index]
            const content=<><Icon className="h-7 w-7 text-amber-700 mx-auto mb-4"/><p className="font-medium">{topic}</p></>
            return index===0
              ? <Link key={topic} to="/blog/sound-and-resonance" className="border border-pink-100 p-6 rounded-xl text-center hover:bg-amber-50 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300" aria-label={t.open}>{content}</Link>
              : <div key={topic} className="border border-pink-100 p-6 rounded-xl text-center">{content}</div>
          })}
        </div>
        <div className="text-center mt-14"><h2 className="text-2xl font-serif text-amber-700 mb-5">{t.cta}</h2><Button asChild variant="outline"><Link to="/contact">{t.contact}</Link></Button></div>
      </div>
    </section>
  </div>
}

export default Blog
