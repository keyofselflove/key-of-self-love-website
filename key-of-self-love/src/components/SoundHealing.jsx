import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, Waves, Sparkles, Music, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import soundBowls from '../assets/search_images/qtF2TGQ3tJOh.jpg'
import crystalHealing from '../assets/search_images/p3q08ThfwPR4.jpg'
import lotusSpiritual from '../assets/search_images/26q13cZyYJjn.jpg'

const SoundHealing = ({ language }) => {
  const translations = {
    nl: {
      title: 'Sound Healing',
      subtitle: 'Heling door Trilling',
      intro: 'In een wereld waar het denken nooit stilstaat en stress zich vastzet in het lichaam, biedt sound healing een directe poort naar innerlijke rust en herstel.',
      mainText: `Bij Key of Self Love gebruiken we de kracht van klank niet als bijzaak, maar als fundament voor diepe transformatie.

Sound healing werkt met trillingen die direct door het lichaam heen bewegen. Via klankschalen, drums, stemvorken en sjamanistische instrumenten worden frequenties ingezet die afgestemd zijn op jouw energiesysteem.

Deze klanken werken niet alleen ontspannend – ze resetten je zenuwstelsel, zuiveren energetische blokkades en brengen je in contact met je oorspronkelijke staat van zijn.`,
      howItWorksTitle: 'Hoe het werkt',
      howItWorksText: `We werken met specifieke tonen, instrumenten en ritmes die resoneren met je chakra's, je waterhuishouding, en je zenuwstelsel. Tijdens een sessie kom je terecht in een diepe staat van ontspanning waarin het lichaam zichzelf kan herstellen, de geest tot rust komt en het hart zich opent.

Geluid maakt zichtbaar wat je nog vasthoudt – en begeleidt je in het loslaten.`,
      benefitsTitle: 'Voordelen van Sound Healing',
      approachTitle: 'Onze Aanpak',
      approachText: `Bij Key of Self Love combineren we sound healing met ademwerk, energetisch werk en diepgaande coaching. Geen zweverigheid, maar krachtige technieken met meetbaar effect.

Je hoeft niet te 'geloven' in klank – je hoeft het alleen maar te voelen. De frequentie doet het werk.`,
      closingTitle: 'Zelfliefde begint met luisteren',
      closingText: 'Niet naar de buitenwereld, maar naar jouw innerlijke stem. Sound healing is de sleutel die jouw hart weer laat zingen.',
      bookSession: 'Boek een Sessie'
    },
    en: {
      title: 'Sound Healing',
      subtitle: 'Healing through Vibration',
      intro: 'In a world where thinking never stops and stress settles in the body, sound healing offers a direct gateway to inner peace and restoration.',
      mainText: `At Key of Self Love, we use the power of sound not as a side note, but as the foundation for deep transformation.

Sound healing works with vibrations that move directly through the body. Through singing bowls, drums, tuning forks, and shamanic instruments, frequencies are used that are attuned to your energy system.

These sounds don't just work relaxingly – they reset your nervous system, cleanse energetic blockages, and bring you into contact with your original state of being.`,
      howItWorksTitle: 'How it works',
      howItWorksText: `We work with specific tones, instruments, and rhythms that resonate with your chakras, your water balance, and your nervous system. During a session, you enter a deep state of relaxation where the body can heal itself, the mind comes to rest, and the heart opens.

Sound makes visible what you're still holding onto – and guides you in letting go.`,
      benefitsTitle: 'Benefits of Sound Healing',
      approachTitle: 'Our Approach',
      approachText: `At Key of Self Love, we combine sound healing with breathwork, energetic work, and deep coaching. No fluff, but powerful techniques with measurable effects.

You don't have to 'believe' in sound – you just have to feel it. The frequency does the work.`,
      closingTitle: 'Self-love begins with listening',
      closingText: 'Not to the outside world, but to your inner voice. Sound healing is the key that makes your heart sing again.',
      bookSession: 'Book a Session'
    }
  }

  const t = translations[language]

  const benefits = [
    {
      icon: Brain,
      title: language === 'nl' ? 'Verlaagt stress- en cortisolniveaus' : 'Lowers stress and cortisol levels',
      description: language === 'nl' 
        ? 'Wetenschappelijk bewezen effect op het stresshormoon cortisol'
        : 'Scientifically proven effect on the stress hormone cortisol'
    },
    {
      icon: Heart,
      title: language === 'nl' ? 'Activeert de nervus vagus' : 'Activates the vagus nerve',
      description: language === 'nl'
        ? 'Stimuleert je rust-en-herstelsysteem voor diepe ontspanning'
        : 'Stimulates your rest-and-restore system for deep relaxation'
    },
    {
      icon: Waves,
      title: language === 'nl' ? 'Verbetert slaap en focus' : 'Improves sleep and focus',
      description: language === 'nl'
        ? 'Helpt bij het reguleren van slaappatronen en concentratie'
        : 'Helps regulate sleep patterns and concentration'
    },
    {
      icon: Sparkles,
      title: language === 'nl' ? 'Lost emotionele blokkades op' : 'Releases emotional blockages',
      description: language === 'nl'
        ? 'Maakt ruimte voor emotionele verwerking en healing'
        : 'Creates space for emotional processing and healing'
    },
    {
      icon: Music,
      title: language === 'nl' ? 'Herstelt connectie met hart en intuïtie' : 'Restores connection with heart and intuition',
      description: language === 'nl'
        ? 'Brengt je terug in contact met je innerlijke wijsheid'
        : 'Brings you back in touch with your inner wisdom'
    },
    {
      icon: Shield,
      title: language === 'nl' ? 'Ondersteunt bij burn-out, angst en trauma' : 'Supports with burnout, anxiety and trauma',
      description: language === 'nl'
        ? 'Zachte maar krachtige ondersteuning bij mentale uitdagingen'
        : 'Gentle but powerful support for mental challenges'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${soundBowls})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {t.subtitle}
            </p>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              {t.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            {t.mainText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-amber-600 mb-6">
                {t.howItWorksTitle}
              </h2>
              <div className="prose prose-lg">
                {t.howItWorksText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={crystalHealing} 
                alt="Crystal Healing Setup" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amber-600 mb-6">
              {t.benefitsTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg shadow-lg"
              >
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-amber-600 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${lotusSpiritual})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8">{t.approachTitle}</h2>
            <div className="prose prose-lg mx-auto text-white">
              {t.approachText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif text-amber-600 mb-6">
              {t.closingTitle}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {t.closingText}
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/contact">{t.bookSession}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SoundHealing

