import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getElementalExperiences } from '@/data/elementalExperiences'
import { getServicesContent } from '@/data/servicesContent'
import banyanHero from '../assets/collection-hero-banyan.jpg'
import sunsetPhoto from '../assets/experience-sunset.jpg'
import naturePhoto from '../assets/experience-nature.jpg'
import soundBowlPhoto from '../assets/experience-sound-bowl.jpg'
import beachPhoto from '../assets/experience-beach.jpg'
import rayPhoto from '../assets/experience-ray.jpg'
import couplesPhoto from '../assets/experience-couples.jpg'

const itemMedia = [
  { image:sunsetPhoto, imagePosition:'center' },
  { image:soundBowlPhoto, imagePosition:'center 52%' },
  { image:couplesPhoto, imagePosition:'center 58%' },
  { image:naturePhoto, imagePosition:'center 70%' },
  { image:beachPhoto, imagePosition:'center 62%' },
  { image:rayPhoto, imagePosition:'center 48%' }
]

const CollectionStory = ({ t, elementalExperiences, foundingGuestWhatsapp }) => {
  const c = t.collection
  return (
    <Card id="resonance-experience-collection" className="mb-12 overflow-hidden scroll-mt-28">
      <section className="relative min-h-[50rem] sm:min-h-[46rem] md:min-h-[43rem] flex items-end overflow-hidden">
        <img src={banyanHero} alt="Banyan tree at Key of Self Love in Aruba" className="absolute inset-0 w-full h-full object-cover object-[center_52%] saturate-[.82] contrast-[.94] brightness-[1.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,248,.88),rgba(255,253,248,.76)_58%,rgba(255,253,248,.64))]" />
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 pb-10 md:pb-14 max-w-5xl">
          <span className="inline-flex rounded-full bg-[rgba(87,216,201,.18)] backdrop-blur-sm border border-[rgba(87,216,201,.62)] px-3 py-1.5 text-xs uppercase tracking-widest text-green-700 mb-5">{c.available}</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 text-amber-700">{c.title}</h2>
          <p className="text-xl md:text-2xl mb-5 text-amber-700 font-serif">{c.subtitle}</p>
          <div className="max-w-3xl space-y-3 text-base md:text-lg leading-relaxed text-gray-700">
            {c.paragraphs.map((paragraph, index) => <p key={paragraph} className={index === 2 || index === 4 ? 'font-serif text-xl text-amber-700' : ''}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <CardContent className="px-5 sm:px-8 md:px-10 py-10 md:py-12">
        {/* TEMPORARY LAUNCH CONTENT: remove this complete section when the Founding Guest offer ends. */}
        <section id="founding-guest-experience" className="max-w-5xl mx-auto mb-12 rounded-2xl border border-[rgba(217,162,11,.26)] bg-[rgba(248,244,242,.78)] p-6 md:p-8" aria-labelledby="founding-guest-title">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 lg:gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[.2em] text-amber-700 mb-2">{c.limited}</p>
              <h3 id="founding-guest-title" className="text-3xl text-amber-700 mb-4">{c.foundingTitle}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{c.foundingIntro}</p>
              <p className="text-gray-700 leading-relaxed">{c.foundingText}</p>
            </div>
            <div className="rounded-xl bg-white/60 border border-white p-5">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div><p className="text-xs uppercase tracking-widest text-amber-700">{c.foundingRate}</p><p className="text-2xl font-serif text-amber-700 mt-1">{c.foundingPrice}</p></div>
                <div className="pt-4 border-t border-amber-200"><p className="text-xs uppercase tracking-widest text-gray-600">{c.futureRate}</p><p className="text-xl font-serif text-gray-700 mt-1">{c.futurePrice}</p></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 pt-7 border-t border-amber-200">
            <div className="text-gray-700">
              <p className="font-medium mb-3">{c.booking}</p>
              <p className="mb-3">{c.minimum}</p>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm">{c.groups.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="text-gray-700">
              <p className="mb-3">{c.exchange}</p>
              <ul className="space-y-2 text-sm">{c.requests.map(item => <li key={item} className="flex gap-2"><Check className="h-4 w-4 text-amber-700 shrink-0 mt-1" />{item}</li>)}</ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-7">{c.shape}</p>
          <p className="text-sm text-gray-600 mt-3">{c.private}</p>
          <Button asChild className="mt-6 min-h-11 bg-amber-700"><a href={foundingGuestWhatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 mr-2" />{c.enquire}</a></Button>
        </section>

        <section aria-labelledby="choose-element-title">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs uppercase tracking-[.2em] text-amber-700 mb-2">{c.elements}</p>
            <h3 id="choose-element-title" className="text-3xl md:text-4xl text-amber-700">{c.choose}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {elementalExperiences.map(experience => (
              <Link key={experience.slug} to={`/experiences/${experience.slug}`} className="group relative min-h-[22rem] sm:min-h-[25rem] overflow-hidden rounded-2xl border border-[rgba(87,216,201,.26)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
                <img src={experience.cardImage} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover saturate-[.82] contrast-[.94] brightness-[1.08] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,248,.84),rgba(255,253,248,.72)_58%,rgba(255,253,248,.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h4 className="text-3xl md:text-4xl leading-tight text-amber-700">{experience.name}</h4>
                  <p className="text-lg mt-2 font-serif text-amber-700">{experience.tagline}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-amber-700">{t.discover} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}

const Services = ({ language }) => {
  const t = getServicesContent(language)
  const elementalExperiences = getElementalExperiences(language)
  const items = t.items.map((item, index) => ({ ...item, ...itemMedia[index] }))
  const foundingGuestWhatsapp = `https://wa.me/2975614808?text=${encodeURIComponent(t.foundingMessage)}`

  return <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-center"><h1 className="text-5xl md:text-6xl font-serif text-amber-700 mb-4">{t.title}</h1><p className="text-xl text-gray-700">{t.sub}</p></section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <CollectionStory t={t} elementalExperiences={elementalExperiences} foundingGuestWhatsapp={foundingGuestWhatsapp} />
        <p className="text-center text-gray-600 mb-10">{t.prices}</p>
        <div className="grid md:grid-cols-2 gap-7">
          {items.map(item => { const itemWhatsapp=`https://wa.me/2975614808?text=${encodeURIComponent(item.whatsappMessage)}`; return <Card id={item.id} key={item.name} className="relative overflow-hidden border-2 border-pink-100 scroll-mt-28">
            {item.image && <><img src={item.image} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover saturate-[.78] contrast-[.94] brightness-[1.06]" style={{objectPosition:item.imagePosition}}/><div className="absolute inset-0 bg-[rgba(255,253,248,.86)]"/></>}
            <CardHeader className="relative z-10"><div className="flex flex-col sm:flex-row sm:justify-between gap-3"><div><span className={`text-xs uppercase tracking-widest ${item.status==='available'?'text-green-700':'text-purple-700'}`}>{t[item.status]}</span><CardTitle className="text-2xl text-amber-700 mt-2">{item.name}</CardTitle></div>{item.price&&<div className="font-semibold sm:text-right">{item.price}</div>}</div></CardHeader>
            <CardContent className="relative z-10"><p className="text-gray-700 mb-5">{item.text}</p><div className="flex items-center text-sm text-gray-600 mb-4"><Clock className="h-4 w-4 mr-2"/>{item.duration}</div><ul className="space-y-2 mb-4">{item.features.map(feature=><li key={feature} className="flex text-sm text-gray-700"><Check className="h-4 w-4 text-amber-700 mr-2 mt-0.5 shrink-0"/>{feature}</li>)}</ul>{item.note&&<p className="text-sm text-gray-600">{item.note}</p>}{item.status!=='available'&&<div className="mt-6 text-sm font-medium text-purple-700">{t[item.status]} — {t.notBookable}</div>}<Button asChild className="mt-6 bg-amber-700 min-h-11"><a href={itemWhatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 mr-2"/>{t.ask}</a></Button></CardContent>
          </Card>})}
        </div>
        <div className="mt-10 flex items-start gap-3 text-gray-600"><MapPin className="h-5 w-5 text-amber-700 shrink-0"/><p>{t.location}</p></div>
      </div>
    </section>
    <section className="py-14 bg-amber-50 text-center"><h2 className="text-3xl font-serif text-amber-700 mb-5">{t.question}</h2><Button asChild variant="outline"><Link to="/contact">{t.contact}</Link></Button></section>
  </div>
}

export default Services
