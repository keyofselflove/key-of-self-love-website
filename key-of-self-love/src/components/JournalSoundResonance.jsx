import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Waves } from 'lucide-react'
import journalHero from '../assets/journal-hero.jpg'

const soundResonanceStory = [
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

const JournalHero = ({ children }) => (
  <section className="min-h-[430px] md:min-h-[520px] flex items-center bg-cover bg-center" style={{backgroundImage:`linear-gradient(rgba(255,253,248,.55),rgba(255,253,248,.82)),url(${journalHero})`}}>
    <div className="w-full max-w-5xl mx-auto px-5 py-24">{children}</div>
  </section>
)

export const SoundResonanceCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main className="pt-20 bg-white">
    <JournalHero>
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7"><ArrowLeft className="h-4 w-4"/>Back to Journal</Link>
      <Waves className="h-9 w-9 text-amber-700 mb-5"/>
      <h1 className="text-5xl md:text-6xl text-amber-700">Sound &amp; Resonance</h1>
    </JournalHero>
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5">
        <Link to="/blog/sound-and-resonance/more-than-what-we-hear" className="group block rounded-2xl border border-pink-100 bg-[rgba(255,253,248,.78)] p-7 sm:p-9 hover:bg-amber-50 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300">
          <h2 className="text-3xl md:text-4xl text-amber-700">More Than What We Hear</h2>
          <p className="max-w-2xl mt-4 text-gray-700">An exploration of how sound and vibration influence the body, emotions and our connection with the world around us.</p>
          <span className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-amber-700">Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></span>
        </Link>
      </div>
    </section>
  </main>
}

export const MoreThanWhatWeHear = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <main className="pt-20 bg-white">
    <JournalHero>
      <Link to="/blog/sound-and-resonance" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7"><ArrowLeft className="h-4 w-4"/>Back to Sound &amp; Resonance</Link>
      <p className="text-sm uppercase tracking-[.2em] text-amber-700 mb-3">Sound &amp; Resonance</p>
      <h1 className="text-5xl md:text-6xl text-amber-700">More Than What We Hear</h1>
    </JournalHero>
    <article className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-5 space-y-5 text-gray-700 text-lg leading-relaxed">{soundResonanceStory.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div>
    </article>
  </main>
}
