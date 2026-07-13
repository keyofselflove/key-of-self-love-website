import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import resonanceHero from '../assets/resonance-hero.jpg'
import resonanceInstruments from '../assets/resonance-instruments.jpg'
import resonanceSafety from '../assets/resonance-safety.jpg'

const copy={
 en:{title:'Sound & Resonance',sub:'An invitation to slow down, listen and reconnect.',p1:'Sound and resonance are at the heart of many Key of Self Love experiences. Singing bowls, gongs, tuning forks and other instruments are used to create a supportive setting for relaxation, presence and personal reflection.',p2:'Every experience is guided with care and may be adapted to the participant, setting and programme. You may pause or stop a session at any time.',p3:'Our work is intended to support wellbeing and self-reflection. It is not medical or psychological treatment and does not replace advice or care from a qualified healthcare professional.',safety:'Before participating, guests should share relevant medical or psychological information when requested. Sessions may be adapted or declined where participation could present a risk.',cta:'Explore current experiences'},
 nl:{title:'Klank & Resonantie',sub:'Een uitnodiging om te vertragen, luisteren en opnieuw te verbinden.',p1:'Klank en resonantie vormen het hart van veel ervaringen van Key of Self Love. Klankschalen, gongs, stemvorken en andere instrumenten creëren een ondersteunende omgeving voor ontspanning, aanwezigheid en persoonlijke reflectie.',p2:'Iedere ervaring wordt met zorg begeleid en kan worden aangepast aan de deelnemer, locatie en het programma. Je mag een sessie op ieder moment pauzeren of stoppen.',p3:'Ons werk ondersteunt welzijn en zelfreflectie. Het is geen medische of psychologische behandeling en vervangt geen advies of zorg van een bevoegde zorgprofessional.',safety:'Voor deelname wordt gasten gevraagd relevante medische of psychologische informatie te delen wanneer dat nodig is. Een sessie kan worden aangepast of geweigerd wanneer deelname een risico kan vormen.',cta:'Bekijk huidige ervaringen'},
 es:{title:'Sonido y Resonancia',sub:'Una invitación a bajar el ritmo, escuchar y reconectar.',p1:'El sonido y la resonancia forman parte central de muchas experiencias de Key of Self Love. Cuencos, gongs, diapasones y otros instrumentos crean un entorno de apoyo para la relajación, la presencia y la reflexión personal.',p2:'Cada experiencia se guía con cuidado y puede adaptarse al participante, al lugar y al programa. Puedes pausar o detener una sesión en cualquier momento.',p3:'Nuestro trabajo apoya el bienestar y la autorreflexión. No es tratamiento médico o psicológico y no sustituye la atención de un profesional cualificado.',safety:'Antes de participar se puede solicitar información médica o psicológica relevante. La sesión puede adaptarse o rechazarse si existe un riesgo.',cta:'Ver experiencias actuales'}
}
const SoundHealing=({language})=>{const t=copy[language]||copy.en;return <div className="pt-20">
  <section className="min-h-[520px] md:min-h-[620px] flex items-center bg-cover bg-center text-center" style={{backgroundImage:`linear-gradient(rgba(255,253,248,.32),rgba(255,253,248,.78)),url(${resonanceHero})`}}>
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-5xl md:text-6xl font-serif mb-5 text-amber-600 drop-shadow-[0_2px_12px_rgba(255,255,255,.95)]">{t.title}</h1>
      <p className="text-xl md:text-2xl text-gray-800 drop-shadow-[0_1px_8px_rgba(255,255,255,.95)]">{t.sub}</p>
    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
      <div className="space-y-7 text-lg text-gray-700 leading-relaxed">
        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-6"><p>{t.p3}</p></div>
      </div>
      <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_55px_rgba(84,200,239,.16)]">
        <img src={resonanceInstruments} alt="Sound and resonance instruments used by Key of Self Love" className="w-full h-[440px] md:h-[520px] object-cover object-center brightness-[1.12] saturate-[.82] contrast-[.92]" />
      </div>
    </div>
  </section>

  <section className="py-24 bg-cover bg-center" style={{backgroundImage:`linear-gradient(rgba(255,253,248,.76),rgba(255,253,248,.86)),url(${resonanceSafety})`}}>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif mb-5 text-amber-600">Safety and personal choice</h2>
      <p className="text-lg text-gray-800 mb-8">{t.safety}</p>
      <Button asChild variant="outline" className="border-amber-600 text-amber-700 bg-white/75 hover:bg-white"><Link to="/services">{t.cta}</Link></Button>
    </div>
  </section>
</div>}
export default SoundHealing
