import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const brandedExperiences = [
  'Resonance Experience Collection',
  'Resonance Healing Journey',
  'Earth Resonance Experience',
  'Water Resonance Experience',
  'Air Resonance Experience',
  'Fire Resonance Experience',
  'Sound Bath Experience',
  'Couple Resonance Experience'
]

const copy = {
  en: {
    title:'Share Your Experience', sub:'Thank you for taking the time to share your experience with Key of Self Love.', back:'Back to Guest Voices',
    name:'Name', email:'Email address', countryField:'Country (only needed if you choose to display it)', experience:'Experience attended', choose:'Choose an experience', review:'Review or testimonial', rating:'Rating from 1 to 5 (optional)', display:'How may we display your name?', first:'First name only', country:'First name and country', anonymous:'Anonymous', other:'Other experience', retreat:'Retreat',
    consent:'I give Key of Self Love permission to review this testimonial and, after personal approval, potentially publish it using my selected display preference.', media:'I give permission for selected photos or videos to be used (optional).',
    privacyTitle:'Privacy and publication', privacy:['Your email address remains private.','Every review is read and approved manually before publication.','You choose how your name may be displayed.','Testimonials, photos and videos are used only with permission.','You may withdraw your consent at any time by contacting Key of Self Love.','Submitting a review does not guarantee publication.'],
    submit:'Send my review', sending:'Sending…', thanks:'Thank you for sharing your experience', confirmation:'Thank you for sharing your experience. Your review has been received and will be read personally before anything is published.', return:'Return to Guest Voices',
    required:'Please complete this required field.', emailError:'Please enter a valid email address.', failure:'Your review could not be sent. Please try again later or contact Key of Self Love.', local:'The form is fully prepared for Netlify. A real submission can only be tested after publication; no test review has been stored.',
  },
  nl: {
    title:'Deel jouw ervaring', sub:'Dank je wel dat je de tijd neemt om jouw ervaring met Key of Self Love te delen.', back:'Terug naar Gastervaringen',
    name:'Naam', email:'E-mailadres', countryField:'Land (alleen nodig als je dit wilt laten weergeven)', experience:'Gevolgde ervaring', choose:'Kies een ervaring', review:'Beoordeling of getuigenis', rating:'Beoordeling van 1 tot 5 (optioneel)', display:'Hoe mogen we jouw naam weergeven?', first:'Alleen voornaam', country:'Voornaam en land', anonymous:'Anoniem', other:'Andere ervaring', retreat:'Retraite',
    consent:'Ik geef Key of Self Love toestemming om deze testimonial te beoordelen en deze na persoonlijke goedkeuring mogelijk te publiceren volgens mijn gekozen naamweergave.', media:'Ik geef toestemming voor het gebruik van geselecteerde foto’s of video’s (optioneel).',
    privacyTitle:'Privacy en publicatie', privacy:['Je e-mailadres blijft privé.','Elke review wordt vóór publicatie persoonlijk gelezen en handmatig goedgekeurd.','Je kiest zelf hoe jouw naam mag worden weergegeven.','Testimonials, foto’s en video’s worden alleen met toestemming gebruikt.','Je kunt jouw toestemming op ieder moment intrekken door contact op te nemen met Key of Self Love.','Het insturen van een review garandeert niet dat deze wordt gepubliceerd.'],
    submit:'Verstuur mijn review', sending:'Bezig met versturen…', thanks:'Dank je wel voor het delen van jouw ervaring', confirmation:'Dank je wel voor het delen van je ervaring. Je review is ontvangen en wordt persoonlijk gelezen voordat er iets wordt gepubliceerd.', return:'Terug naar Gastervaringen',
    required:'Vul dit verplichte veld in.', emailError:'Vul een geldig e-mailadres in.', failure:'Je review kon niet worden verstuurd. Probeer het later opnieuw of neem contact op met Key of Self Love.', local:'Het formulier is volledig voorbereid voor Netlify. Een echte inzending kan pas na publicatie worden getest; er is geen testreview opgeslagen.',
  },
  es: {
    title:'Comparte tu experiencia', sub:'Gracias por dedicar tiempo a compartir tu experiencia con Key of Self Love.', back:'Volver a Voces de nuestros huéspedes',
    name:'Nombre', email:'Correo electrónico', countryField:'País (solo si deseas mostrarlo)', experience:'Experiencia realizada', choose:'Elige una experiencia', review:'Reseña o testimonio', rating:'Valoración de 1 a 5 (opcional)', display:'¿Cómo podemos mostrar tu nombre?', first:'Solo el nombre', country:'Nombre y país', anonymous:'Anónimo', other:'Otra experiencia', retreat:'Retiro',
    consent:'Doy permiso a Key of Self Love para revisar este testimonio y, tras su aprobación personal, considerar su publicación con la opción de nombre que he elegido.', media:'Doy permiso para utilizar fotos o videos seleccionados (opcional).',
    privacyTitle:'Privacidad y publicación', privacy:['Tu correo electrónico permanecerá privado.','Cada reseña se lee y se aprueba manualmente antes de su publicación.','Tú eliges cómo puede mostrarse tu nombre.','Los testimonios, las fotos y los videos solo se utilizan con permiso.','Puedes retirar tu consentimiento en cualquier momento contactando con Key of Self Love.','Enviar una reseña no garantiza su publicación.'],
    submit:'Enviar mi reseña', sending:'Enviando…', thanks:'Gracias por compartir tu experiencia', confirmation:'Gracias por compartir tu experiencia. Hemos recibido tu reseña y será revisada personalmente antes de que se publique.', return:'Volver a Voces de nuestros huéspedes',
    required:'Completa este campo obligatorio.', emailError:'Introduce un correo electrónico válido.', failure:'No se pudo enviar tu reseña. Inténtalo de nuevo más tarde o contacta con Key of Self Love.', local:'El formulario está completamente preparado para Netlify. Solo se podrá probar un envío real después de la publicación; no se ha guardado ninguna reseña de prueba.',
  }
}

const field = 'mt-2 w-full rounded-lg border border-amber-200 bg-white px-4 py-3 text-gray-800 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200'

const ReviewForm = ({ language }) => {
  const t = copy[language] || copy.en
  const [status, setStatus] = useState('idle')
  const [displayPreference, setDisplayPreference] = useState('')

  const submitReview = async event => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
      setStatus('local')
      return
    }

    setStatus('sending')
    try {
      const body = new URLSearchParams(new FormData(form)).toString()
      const response = await fetch(form.getAttribute('action') || '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      })
      if (!response.ok) throw new Error(`Submission failed: ${response.status}`)
      form.reset()
      setDisplayPreference('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <ReviewConfirmation language={language} />

  return <main className="pt-20 bg-white">
    <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"><div className="max-w-3xl mx-auto px-5"><Link to="/testimonials" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7"><ArrowLeft className="h-4 w-4"/>{t.back}</Link><h1 className="text-5xl md:text-6xl text-amber-700 mb-4">{t.title}</h1><p className="text-xl text-gray-700">{t.sub}</p></div></section>
    <section className="py-16"><form name="guest-voices-review" method="POST" action="/review-thank-you" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submitReview} className="max-w-3xl mx-auto px-5 space-y-7">
      <input type="hidden" name="form-name" value="guest-voices-review"/><input type="hidden" name="language" value={language}/>
      <p className="hidden" aria-hidden="true"><label>Do not fill this out: <input name="bot-field" tabIndex="-1" autoComplete="off"/></label></p>
      <label className="block text-gray-700 font-medium">{t.name}<input className={field} name="name" autoComplete="name" required onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onInput={e=>e.currentTarget.setCustomValidity('')}/></label>
      <label className="block text-gray-700 font-medium">{t.email}<input className={field} type="email" name="email" autoComplete="email" required onInvalid={e=>e.currentTarget.setCustomValidity(t.emailError)} onInput={e=>e.currentTarget.setCustomValidity('')}/></label>
      <label className="block text-gray-700 font-medium">{t.countryField}<input className={field} name="country" autoComplete="country-name" required={displayPreference === 'first-name-country'} onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onInput={e=>e.currentTarget.setCustomValidity('')}/></label>
      <label className="block text-gray-700 font-medium">{t.experience}<select className={field} name="experience" required defaultValue="" onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onChange={e=>e.currentTarget.setCustomValidity('')}><option value="" disabled>{t.choose}</option>{[...brandedExperiences, t.retreat, t.other].map(item=><option key={item} value={item}>{item}</option>)}</select></label>
      <label className="block text-gray-700 font-medium">{t.review}<textarea className={field} name="review" rows="7" required onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onInput={e=>e.currentTarget.setCustomValidity('')}/></label>
      <fieldset><legend className="text-gray-700 font-medium">{t.rating}</legend><div className="flex flex-wrap gap-3 mt-3">{[1,2,3,4,5].map(value=><label key={value} className="inline-flex items-center gap-1 rounded-full border border-amber-200 px-3 py-2"><input type="radio" name="rating" value={value}/><Star className="h-4 w-4 text-amber-600"/>{value}</label>)}</div></fieldset>
      <fieldset><legend className="text-gray-700 font-medium">{t.display}</legend><div className="mt-3 grid sm:grid-cols-3 gap-3">{[[t.first,'first-name'],[t.country,'first-name-country'],[t.anonymous,'anonymous']].map(([label,value])=><label key={value} className="flex items-center gap-2 rounded-lg border border-amber-200 px-4 py-3"><input type="radio" name="display-preference" value={value} required checked={displayPreference === value} onChange={()=>setDisplayPreference(value)} onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onInput={e=>e.currentTarget.setCustomValidity('')}/>{label}</label>)}</div></fieldset>
      <label className="flex items-start gap-3 text-gray-700"><input className="mt-1" type="checkbox" name="publication-consent" value="yes" required onInvalid={e=>e.currentTarget.setCustomValidity(t.required)} onChange={e=>e.currentTarget.setCustomValidity('')}/><span>{t.consent}</span></label>
      <label className="flex items-start gap-3 text-gray-700"><input className="mt-1" type="checkbox" name="media-permission" value="yes"/><span>{t.media}</span></label>
      <aside className="rounded-xl bg-amber-50 p-5 text-sm text-gray-700"><h2 className="font-semibold text-amber-800 mb-2">{t.privacyTitle}</h2><ul className="space-y-1 list-disc pl-5">{t.privacy.map(item=><li key={item}>{item}</li>)}</ul></aside>
      <div aria-live="polite">{status === 'local' && <p className="rounded-lg bg-blue-50 p-4 text-sm text-blue-900">{t.local}</p>}{status === 'error' && <p className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{t.failure}</p>}</div>
      <Button type="submit" disabled={status === 'sending'} className="min-h-12 bg-amber-700 px-7">{status === 'sending' ? t.sending : t.submit}</Button>
    </form></section>
  </main>
}

export const ReviewConfirmation = ({ language }) => {
  const t = copy[language] || copy.en
  return <main className="pt-20 bg-white"><section className="min-h-[65vh] flex items-center py-20"><div className="max-w-2xl mx-auto px-5 text-center"><CheckCircle2 className="h-14 w-14 text-green-700 mx-auto mb-6"/><h1 className="text-4xl md:text-5xl text-amber-700 mb-5">{t.thanks}</h1><p className="text-lg text-gray-700 mb-8">{t.confirmation}</p><Button asChild variant="outline"><Link to="/testimonials">{t.return}</Link></Button></div></section></main>
}

export default ReviewForm
