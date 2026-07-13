import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, MapPin, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import elementalExperiences from '@/data/elementalExperiences'
import banyanHero from '../assets/collection-hero-banyan.jpg'
import sunsetPhoto from '../assets/experience-sunset.jpg'
import naturePhoto from '../assets/experience-nature.jpg'
import soundBowlPhoto from '../assets/experience-sound-bowl.jpg'
import beachPhoto from '../assets/experience-beach.jpg'
import rayPhoto from '../assets/experience-ray.jpg'
import couplesPhoto from '../assets/experience-couples.jpg'

const labels = {
  en: { title:'Experiences', sub:'Current offerings and experiences being developed with care.', available:'Available by appointment', coming:'Coming Soon', development:'In Development', included:'All listed prices include taxes and service charges unless stated otherwise.', location:'The exact location depends on the programme and is shared after booking.', question:'Questions about an experience?', interest:'Contact us for future retreat updates' },
  nl: { title:'Ervaringen', sub:'Huidig aanbod en ervaringen die zorgvuldig worden ontwikkeld.', available:'Beschikbaar op afspraak', coming:'Binnenkort', development:'In ontwikkeling', included:'Alle genoemde prijzen zijn inclusief belastingen en servicekosten, tenzij anders vermeld.', location:'De exacte locatie hangt af van het programma en wordt na boeking gedeeld.', question:'Vragen over een ervaring?', interest:'Neem contact op voor toekomstige retreatupdates' },
  es: { title:'Experiencias', sub:'Oferta actual y experiencias que se desarrollan cuidadosamente.', available:'Disponible con cita previa', coming:'Próximamente', development:'En desarrollo', included:'Todos los precios incluyen impuestos y cargos de servicio salvo indicación contraria.', location:'La ubicación exacta depende del programa y se comparte después de reservar.', question:'¿Preguntas sobre una experiencia?', interest:'Contáctanos para recibir novedades sobre retiros' }
}

const items = [
  {id:'resonance-healing-journey',status:'available',name:'Resonance Healing Journey',price:'USD 195',duration:'90–120 minutes',text:'A private, one-to-one experience for guests who value personal attention and a calm setting. Sound, resonance, coaching and guided integration are brought together in a programme adapted to the individual.',features:['Personalised guidance','Sound and resonance','Time for reflection and integration','Available by appointment'],note:'Transport is optional and can be added on request.',image:soundBowlPhoto,imagePosition:'center 52%'},
  {status:'available',name:'Sound Bath Experience',price:'USD 65 per person',duration:'Group experience',text:'A small-group sound and resonance experience for people who want to slow down and experience sound in a welcoming shared setting.',features:['Small-group setting','Maximum 8 participants at the current location','Available by appointment','Hosted in the garden unless another location is arranged'],image:sunsetPhoto,imagePosition:'center'},
  {status:'development',name:'Couples Resonance Experience',price:'USD 555 per couple',duration:'Programme in development',text:'A private experience for two people who want to step away from daily routines and spend meaningful time together through sound, presence, nature and shared reflection.',features:['Introductory total price','Personal and private format','Snorkeling may be included as part of the programme','Not yet bookable'],image:couplesPhoto,imagePosition:'center 58%'},
  {status:'coming',name:'Transformational Workshops',price:'Starting from USD 595 per person',duration:'Programme dependent',text:'Small-group workshops exploring themes such as sound, resonance, self-awareness and conscious living. Content, duration, materials and location will vary by workshop.',features:['Materials included','Minimum 4 participants','Maximum 8 at the current home location','Up to 12 at a suitable larger venue'],image:naturePhoto,imagePosition:'center 70%'},
  {status:'coming',name:'Transformational Retreats',price:null,duration:'Multiple formats in development',text:'Intentionally small retreat experiences in Aruba, bringing together sound and resonance, nature, ocean experiences, conscious living, personal development and meaningful connection. The first planned format is a three-day pilot retreat.',features:['Coming Soon','Minimum 6 participants','Maximum 10 participants','Not yet bookable'],interest:true,image:beachPhoto,imagePosition:'center 62%'},
  {status:'coming',name:'Private Group Experiences',price:'Custom quotation',duration:'Tailored',text:'Bespoke small-group experiences shaped around the occasion, location and needs of the group. The programme may bring together sound, nature, reflection and shared time.',features:['Programme-dependent capacity','Transport included where applicable','Location selected to suit the programme','Not yet bookable'],image:rayPhoto,imagePosition:'center 48%'}
]

const CollectionStory = ({ foundingGuestWhatsapp }) => (
  <Card id="resonance-experience-collection" className="mb-12 overflow-hidden scroll-mt-28">
    <section className="relative min-h-[50rem] sm:min-h-[46rem] md:min-h-[43rem] flex items-end overflow-hidden">
      <img src={banyanHero} alt="Banyan tree at Key of Self Love in Aruba" className="absolute inset-0 w-full h-full object-cover object-[center_52%] saturate-[.82] contrast-[.94] brightness-[1.08]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,248,.88),rgba(255,253,248,.76)_58%,rgba(255,253,248,.64))]" />
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 pb-10 md:pb-14 max-w-5xl">
        <span className="inline-flex rounded-full bg-[rgba(87,216,201,.18)] backdrop-blur-sm border border-[rgba(87,216,201,.62)] px-3 py-1.5 text-xs uppercase tracking-widest text-green-700 mb-5">Available by appointment</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 text-amber-700">The Resonance Experience Collection</h2>
        <p className="text-xl md:text-2xl mb-5 text-amber-700 font-serif">Reconnect with yourself through the elements of Aruba.</p>
        <div className="max-w-3xl space-y-3 text-base md:text-lg leading-relaxed text-gray-700">
          <p>The Resonance Experience Collection invites you to explore Aruba in a way that goes beyond sightseeing and relaxation. Each experience is inspired by one of the four elements — Earth, Water, Air and Fire — and offers a unique journey of presence, connection and wellbeing.</p>
          <p>Although every experience follows its own rhythm and atmosphere, they all share the same intention:</p>
          <p className="font-serif text-xl text-amber-700">To slow down, reconnect with yourself and experience Aruba with all your senses.</p>
          <p>Each experience includes small group guidance, time in nature, nourishment and a Resonance Sound Journey to integrate the experience on a deeper level.</p>
          <p className="font-serif text-xl text-amber-700">Which element is calling you?</p>
        </div>
      </div>
    </section>

    <CardContent className="px-5 sm:px-8 md:px-10 py-10 md:py-12">
      {/* TEMPORARY LAUNCH CONTENT: remove this complete section when the Founding Guest offer ends. */}
      <section id="founding-guest-experience" className="max-w-5xl mx-auto mb-12 rounded-2xl border border-[rgba(217,162,11,.26)] bg-[rgba(248,244,242,.78)] p-6 md:p-8" aria-labelledby="founding-guest-title">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 lg:gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-amber-700 mb-2">A limited invitation</p>
            <h3 id="founding-guest-title" className="text-3xl text-amber-700 mb-4">Founding Guest Experience</h3>
            <p className="text-gray-700 leading-relaxed mb-4">Be among the first to experience the Resonance Experience Collection on Aruba.</p>
            <p className="text-gray-700 leading-relaxed">As we launch these unique elemental experiences, we invite a limited number of guests to join us at a special Founding Guest rate while we continue refining and growing the collection.</p>
          </div>
          <div className="rounded-xl bg-white/60 border border-white p-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div><p className="text-xs uppercase tracking-widest text-amber-700">Founding Guest Rate</p><p className="text-2xl font-serif text-amber-700 mt-1">USD 295 per person</p></div>
              <div className="pt-4 border-t border-amber-200"><p className="text-xs uppercase tracking-widest text-gray-600">Future Regular Rate</p><p className="text-xl font-serif text-gray-700 mt-1">USD 395 per person</p></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 pt-7 border-t border-amber-200">
          <div className="text-gray-700">
            <p className="font-medium mb-3">Booking and group sizes</p>
            <p className="mb-3">Minimum booking: 2 guests</p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
              <li>Earth: 6 guests</li><li>Water: 4 guests</li><li>Air: 4 guests</li><li>Fire: 6 guests</li>
            </ul>
          </div>
          <div className="text-gray-700">
            <p className="mb-3">In exchange for this introductory rate, we kindly ask our Founding Guests for:</p>
            <ul className="space-y-2 text-sm">
              {['Honest feedback about their experience','A short review or testimonial for our website','Permission to use selected photos or videos for future marketing purposes (optional)'].map(item => <li key={item} className="flex gap-2"><Check className="h-4 w-4 text-amber-700 shrink-0 mt-1" />{item}</li>)}
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mt-7">Your experience and insights will help shape the future of The Resonance Experience Collection and support the creation of one of Aruba's most unique transformational wellness experiences.</p>
        <p className="text-sm text-gray-600 mt-3">Private experiences may be arranged upon request.</p>
        <Button asChild className="mt-6 min-h-11 bg-amber-700"><a href={foundingGuestWhatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 mr-2" />Enquire via WhatsApp</a></Button>
      </section>

      <section aria-labelledby="choose-element-title">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[.2em] text-amber-700 mb-2">The four elements</p>
          <h3 id="choose-element-title" className="text-3xl md:text-4xl text-amber-700">Choose your experience</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {elementalExperiences.map(experience => (
            <Link key={experience.slug} to={`/experiences/${experience.slug}`} className="group relative min-h-[22rem] sm:min-h-[25rem] overflow-hidden rounded-2xl border border-[rgba(87,216,201,.26)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
              <img src={experience.cardImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover saturate-[.82] contrast-[.94] brightness-[1.08] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,248,.84),rgba(255,253,248,.72)_58%,rgba(255,253,248,.62))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h4 className="text-3xl md:text-4xl leading-tight text-amber-700">{experience.name}</h4>
                <p className="text-lg mt-2 font-serif text-amber-700">{experience.tagline}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-amber-700">Discover the experience <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </CardContent>
  </Card>
)

const Services = ({ language }) => {
  const t = labels[language] || labels.en
  const whatsapp = 'https://wa.me/2975614808?text=Hello%2C%20I%20would%20like%20more%20information%20about%20the%20experiences%20offered%20by%20Key%20of%20Self%20Love.'
  const foundingGuestWhatsapp = 'https://wa.me/2975614808?text=Hello%2C%20I%20would%20like%20more%20information%20about%20the%20Founding%20Guest%20Experience%20and%20the%20Resonance%20Experience%20Collection%2E'

  return <div className="pt-20">
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-center"><h1 className="text-5xl md:text-6xl font-serif text-amber-700 mb-4">{t.title}</h1><p className="text-xl text-gray-700">{t.sub}</p></section>
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <CollectionStory foundingGuestWhatsapp={foundingGuestWhatsapp} />
        <p className="text-center text-gray-600 mb-10">{t.included}</p>
        <div className="grid md:grid-cols-2 gap-7">
          {items.map(item => <Card id={item.id} key={item.name} className="relative overflow-hidden border-2 border-pink-100 scroll-mt-28">
            {item.image && <><img src={item.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover saturate-[.78] contrast-[.94] brightness-[1.06]" style={{objectPosition:item.imagePosition}}/><div className="absolute inset-0 bg-[rgba(255,253,248,.86)]"/></>}
            <CardHeader className="relative z-10"><div className="flex flex-col sm:flex-row sm:justify-between gap-3"><div><span className={`text-xs uppercase tracking-widest ${item.status==='available'?'text-green-700':'text-purple-700'}`}>{t[item.status]}</span><CardTitle className="text-2xl text-amber-700 mt-2">{item.name}</CardTitle></div>{item.price&&<div className="font-semibold sm:text-right">{item.price}</div>}</div></CardHeader>
            <CardContent className="relative z-10"><p className="text-gray-700 mb-5">{item.text}</p><div className="flex items-center text-sm text-gray-600 mb-4"><Clock className="h-4 w-4 mr-2"/>{item.duration}</div><ul className="space-y-2 mb-4">{item.features.map(feature=><li key={feature} className="flex text-sm text-gray-700"><Check className="h-4 w-4 text-amber-700 mr-2 mt-0.5 shrink-0"/>{feature}</li>)}</ul>{item.note&&<p className="text-sm text-gray-600">{item.note}</p>}{item.status==='available'?<Button asChild className="mt-6 bg-amber-700 min-h-11"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 mr-2"/>Ask on WhatsApp</a></Button>:item.interest?<Button asChild variant="outline" className="mt-6 min-h-11"><Link to="/contact">{t.interest}</Link></Button>:<div className="mt-6 text-sm font-medium text-purple-700">{t[item.status]} — not yet bookable</div>}</CardContent>
          </Card>)}
        </div>
        <div className="mt-10 flex items-start gap-3 text-gray-600"><MapPin className="h-5 w-5 text-amber-700 shrink-0"/><p>{t.location}</p></div>
      </div>
    </section>
    <section className="py-14 bg-amber-50 text-center"><h2 className="text-3xl font-serif text-amber-700 mb-5">{t.question}</h2><Button asChild variant="outline"><Link to="/contact">Contact Key of Self Love</Link></Button></section>
  </div>
}

export default Services
