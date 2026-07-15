import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Waves } from 'lucide-react'
import journalHero from '../assets/journal-hero.jpg'

const copy = {
  en: {
    category:'Sound & Resonance', backJournal:'Back to Journal', title:'More Than What We Hear', intro:'An exploration of how sound and vibration influence the body, emotions and our connection with the world around us.', read:'Read the story', backCategory:'Back to Sound & Resonance',
    story:[
      'Sound is everywhere.',
      'The rhythm of the ocean, the wind moving through the trees, birds greeting the sunrise and the steady beat of our own hearts all remind us that life itself moves in vibration.',
      'Long before we understand sound with our minds, we experience it with our bodies.',
      'A familiar voice can bring comfort.',
      'A favorite song can evoke memories and emotions within seconds.',
      'The sound of waves can calm the nervous system and create a sense of peace.',
      'Sound does not only reach our ears — it reaches us as vibration.',
      'Resonance happens when one vibration influences another.',
      'Just as a tuning fork can cause another tuning fork to vibrate, we as human beings constantly respond to the world around us through resonance.',
      'We resonate with environments, emotions, people, nature and sound.',
      'At The Key of Self Love, we work with sound and resonance as an invitation to slow down, become present and reconnect with ourselves.',
      'This is not about escaping life or becoming someone else.',
      'It is about creating the conditions in which the body and nervous system can move from constant activity and alertness toward rest, awareness and restoration.',
      'When the mind becomes quieter and the body begins to relax, many people experience a renewed sense of clarity, space and connection.',
      'Sound becomes more than something we hear.',
      'It becomes something we feel.',
      'Perhaps resonance is not about adding something new to ourselves.',
      'Perhaps it is about remembering the connection that has always existed between ourselves, nature and the world around us.'
    ]
  },
  nl: {
    category:'Klank & resonantie', backJournal:'Terug naar Journal', title:'Meer dan wat we horen', intro:'Een verkenning van hoe klank en trilling het lichaam, onze emoties en onze verbinding met de wereld om ons heen beïnvloeden.', read:'Lees het verhaal', backCategory:'Terug naar Klank & resonantie',
    story:[
      'Klank is overal.',
      'Het ritme van de oceaan, de wind die door de bomen beweegt, vogels die de zonsopgang begroeten en de gelijkmatige slag van ons eigen hart herinneren ons eraan dat het leven zelf in trilling beweegt.',
      'Lang voordat we klank met ons verstand begrijpen, ervaren we die met ons lichaam.',
      'Een vertrouwde stem kan troost brengen.',
      'Een favoriet lied kan binnen enkele seconden herinneringen en emoties oproepen.',
      'Het geluid van golven kan het zenuwstelsel tot rust brengen en een gevoel van vrede creëren.',
      'Klank bereikt niet alleen onze oren — we ervaren klank ook als trilling.',
      'Resonantie ontstaat wanneer de ene trilling de andere beïnvloedt.',
      'Zoals een stemvork een andere stemvork kan laten meetrillen, reageren wij als mensen voortdurend via resonantie op de wereld om ons heen.',
      'We resoneren met omgevingen, emoties, mensen, natuur en klank.',
      'Bij The Key of Self Love werken we met klank en resonantie als een uitnodiging om te vertragen, aanwezig te zijn en opnieuw contact te maken met onszelf.',
      'Het gaat er niet om aan het leven te ontsnappen of iemand anders te worden.',
      'Het gaat om het creëren van omstandigheden waarin lichaam en zenuwstelsel van voortdurende activiteit en alertheid kunnen bewegen naar rust, bewustzijn en herstel.',
      'Wanneer de geest stiller wordt en het lichaam begint te ontspannen, ervaren veel mensen een hernieuwd gevoel van helderheid, ruimte en verbinding.',
      'Klank wordt meer dan iets wat we horen.',
      'Het wordt iets wat we voelen.',
      'Misschien gaat resonantie niet over iets nieuws aan onszelf toevoegen.',
      'Misschien gaat het om het herinneren van de verbinding die altijd al heeft bestaan tussen onszelf, de natuur en de wereld om ons heen.'
    ]
  },
  es: {
    category:'Sonido y resonancia', backJournal:'Volver al Journal', title:'Más allá de lo que oímos', intro:'Una exploración de cómo el sonido y la vibración influyen en el cuerpo, las emociones y nuestra conexión con el mundo que nos rodea.', read:'Leer la historia', backCategory:'Volver a Sonido y resonancia',
    story:[
      'El sonido está en todas partes.',
      'El ritmo del océano, el viento entre los árboles, las aves que saludan el amanecer y el latido constante de nuestro propio corazón nos recuerdan que la vida misma se mueve en vibración.',
      'Mucho antes de comprender el sonido con la mente, lo experimentamos con el cuerpo.',
      'Una voz familiar puede brindarnos consuelo.',
      'Una canción favorita puede despertar recuerdos y emociones en cuestión de segundos.',
      'El sonido de las olas puede calmar el sistema nervioso y crear una sensación de paz.',
      'El sonido no solo llega a nuestros oídos — también nos alcanza como vibración.',
      'La resonancia ocurre cuando una vibración influye en otra.',
      'Así como un diapasón puede hacer vibrar a otro, los seres humanos respondemos constantemente al mundo que nos rodea a través de la resonancia.',
      'Resonamos con los entornos, las emociones, las personas, la naturaleza y el sonido.',
      'En The Key of Self Love trabajamos con el sonido y la resonancia como una invitación a desacelerar, estar presentes y reconectar con nosotros mismos.',
      'No se trata de escapar de la vida ni de convertirnos en otra persona.',
      'Se trata de crear las condiciones para que el cuerpo y el sistema nervioso puedan pasar de la actividad y la alerta constantes al descanso, la conciencia y la restauración.',
      'Cuando la mente se aquieta y el cuerpo comienza a relajarse, muchas personas experimentan una renovada sensación de claridad, espacio y conexión.',
      'El sonido se convierte en algo más que aquello que oímos.',
      'Se convierte en algo que sentimos.',
      'Quizás la resonancia no consista en añadir algo nuevo a nosotros mismos.',
      'Quizás se trate de recordar la conexión que siempre ha existido entre nosotros, la naturaleza y el mundo que nos rodea.'
    ]
  }
}

const JournalHero = ({ children }) => (
  <section className="min-h-[430px] md:min-h-[520px] flex items-center bg-cover bg-center" style={{backgroundImage:`linear-gradient(rgba(255,253,248,.55),rgba(255,253,248,.82)),url(${journalHero})`}}>
    <div className="w-full max-w-5xl mx-auto px-5 py-24">{children}</div>
  </section>
)

export const SoundResonanceCategory = ({ language }) => {
  const t = copy[language] || copy.en
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return <main className="pt-20 bg-white">
    <JournalHero>
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7"><ArrowLeft className="h-4 w-4"/>{t.backJournal}</Link>
      <Waves className="h-9 w-9 text-amber-700 mb-5"/>
      <h1 className="text-5xl md:text-6xl text-amber-700">{t.category}</h1>
    </JournalHero>
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <Link to="/blog/sound-and-resonance/more-than-what-we-hear" className="group block rounded-2xl border border-pink-100 bg-[rgba(255,253,248,.78)] p-7 sm:p-9 hover:bg-amber-50 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
          <h2 className="text-3xl md:text-4xl text-amber-700">{t.title}</h2>
          <p className="max-w-2xl mt-4 text-gray-700">{t.intro}</p>
          <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-amber-700">{t.read} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span>
        </Link>
      </div>
    </section>
  </main>
}

export const MoreThanWhatWeHear = ({ language }) => {
  const t = copy[language] || copy.en
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return <main className="pt-20 bg-white">
    <JournalHero>
      <Link to="/blog/sound-and-resonance" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7"><ArrowLeft className="h-4 w-4"/>{t.backCategory}</Link>
      <p className="text-sm uppercase tracking-[.2em] text-amber-700 mb-3">{t.category}</p>
      <h1 className="text-5xl md:text-6xl text-amber-700">{t.title}</h1>
    </JournalHero>
    <article className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-5 space-y-5 text-gray-700 text-lg leading-relaxed">{t.story.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
    </article>
  </main>
}
