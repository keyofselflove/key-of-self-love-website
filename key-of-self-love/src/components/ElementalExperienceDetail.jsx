import React, { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Clock, MessageCircle, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import elementalExperiences from '@/data/elementalExperiences'

const ElementalExperienceDetail = () => {
  const { element } = useParams()
  const experience = elementalExperiences.find(item => item.slug === element)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [element])

  if (!experience) return <Navigate to="/services" replace />

  const whatsapp = `https://wa.me/2975614808?text=${encodeURIComponent(`Hello, I would like more information about the ${experience.name}.`)}`

  return (
    <main className="pt-20 bg-white">
      <section className="relative min-h-[31rem] md:min-h-[42rem] flex items-end overflow-hidden">
        <img
          src={experience.detailImage}
          alt={`${experience.name} in Aruba`}
          className="absolute inset-0 h-full w-full object-cover saturate-[.82] contrast-[.94] brightness-[1.08]"
          style={{ objectPosition: experience.detailImagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,253,248,.84),rgba(255,253,248,.72)_58%,rgba(255,253,248,.62))]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pb-12 md:pb-16">
          <Link to="/services#resonance-experience-collection" className="inline-flex items-center gap-2 text-sm text-amber-700 mb-7 hover:text-amber-600">
            <ArrowLeft className="h-4 w-4" /> Back to the collection
          </Link>
          <p className="text-sm uppercase tracking-[.22em] text-amber-700 mb-3">The Resonance Experience Collection</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-4xl leading-tight text-amber-700">{experience.name}</h1>
          <p className="text-xl md:text-2xl mt-4 font-serif text-amber-700">{experience.tagline}</p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_19rem] gap-12">
          <article className="space-y-5 text-gray-700 text-lg leading-relaxed">
            {experience.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}

            <div className="pt-5">
              <h2 className="text-3xl text-amber-700 mb-5">Included</h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-base">
                {experience.included.map(item => (
                  <li key={item} className="flex gap-3"><Check className="h-5 w-5 text-amber-700 shrink-0 mt-1" />{item}</li>
                ))}
              </ul>
            </div>
            {experience.note && <p className="text-base italic text-gray-600 border-l-2 border-amber-300 pl-4">{experience.note}</p>}
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start rounded-2xl border border-amber-200 bg-[rgba(255,253,248,.92)] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[.18em] text-amber-700 mb-5">Experience details</p>
            <div className="space-y-5 text-gray-700">
              <div className="flex gap-3"><Clock className="h-5 w-5 text-amber-700 shrink-0 mt-1" /><div><p className="font-medium">Duration</p><p className="text-sm">{experience.duration}</p></div></div>
              <div className="flex gap-3"><Users className="h-5 w-5 text-amber-700 shrink-0 mt-1" /><div><p className="font-medium">Group size</p><p className="text-sm">{experience.groupSize.join(' · ')}</p></div></div>
              <div><p className="text-sm text-gray-600">Founding Guest Rate</p><p className="text-xl font-serif text-amber-700">USD 295 per person</p><p className="text-xs text-gray-500 mt-1">Future regular rate: USD 395 per person</p></div>
            </div>
            <Button asChild className="mt-7 w-full min-h-11 bg-amber-700">
              <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4 mr-2" />Enquire via WhatsApp</a>
            </Button>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default ElementalExperienceDetail
