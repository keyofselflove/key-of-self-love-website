import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Music, Sparkles } from 'lucide-react'
import aboutFlyer from '../assets/SoundHealerFlyerInstagramPost.png'
import crystalsBg from '../assets/search_images/p3q08ThfwPR4.jpg'

const About = ({ language }) => {
  const translations = {
    nl: {
      title: 'Over Mij',
      subtitle: 'Mieke van Lierop - Sound & Consciousness Guide',
      tagline: 'From Head to Heart. From Surviving to Living.',
      aboutText: `Jarenlang zocht ik buiten mezelf naar antwoorden, totdat ik de kracht van stilte en geluid ontdekte. Elke toon, elke trilling, bracht me dichter bij wie ik werkelijk ben.

Nu deel ik deze reis met anderen - ik begeleid je om los te laten wat je niet langer dient, je hart te openen, en te herinneren dat je innerlijke wijsheid er altijd al is geweest.`,
      missionTitle: 'Mijn Missie',
      missionText: 'Bij Key of Self Love gebruik ik de kracht van klank niet als bijzaak, maar als fundament voor diepe transformatie. Sound healing biedt een directe poort naar innerlijke rust en herstel.',
      approachTitle: 'Mijn Aanpak',
      approachText: 'Ik combineer sound healing met ademwerk, energetisch werk en diepgaande coaching. Geen zweverigheid, maar krachtige technieken met meetbaar effect.',
      quote: '"Your heart already knows the way. I walk beside you until you remember the path."'
    },
    en: {
      title: 'About Me',
      subtitle: 'Mieke van Lierop - Sound & Consciousness Guide',
      tagline: 'From Head to Heart. From Surviving to Living.',
      aboutText: `For years I searched outside myself for answers, until I discovered the power of stillness and sound. Each tone, each vibration, brought me closer to who I truly am.

Now, I share this journey with others - guiding you to release what no longer serves you, to open your heart, and to remember that your inner wisdom has always been there.`,
      missionTitle: 'My Mission',
      missionText: 'At Key of Self Love, I use the power of sound not as a side note, but as the foundation for deep transformation. Sound healing offers a direct gateway to inner peace and restoration.',
      approachTitle: 'My Approach',
      approachText: 'I combine sound healing with breathwork, energetic work, and deep coaching. No fluff, but powerful techniques with measurable effects.',
      quote: '"Your heart already knows the way. I walk beside you until you remember the path."'
    }
  }

  const t = translations[language]

  const values = [
    {
      icon: Heart,
      title: language === 'nl' ? 'Zelfliefde' : 'Self Love',
      description: language === 'nl' 
        ? 'De reis begint met het luisteren naar je innerlijke stem'
        : 'The journey begins with listening to your inner voice'
    },
    {
      icon: Music,
      title: language === 'nl' ? 'Sound Healing' : 'Sound Healing',
      description: language === 'nl'
        ? 'Frequenties die je zenuwstelsel resetten en blokkades oplossen'
        : 'Frequencies that reset your nervous system and release blockages'
    },
    {
      icon: Sparkles,
      title: language === 'nl' ? 'Transformatie' : 'Transformation',
      description: language === 'nl'
        ? 'Van overleven naar leven, van hoofd naar hart'
        : 'From surviving to living, from head to heart'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-amber-600 mb-4">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-500 mb-4">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-600 italic">
              {t.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={aboutFlyer} 
                alt="Mieke van Lierop" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                {t.aboutText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <blockquote className="text-2xl font-serif text-amber-600 italic border-l-4 border-amber-600 pl-6 my-8">
                {t.quote}
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amber-600 mb-6">
              {language === 'nl' ? 'Mijn Waarden' : 'My Values'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-amber-600 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${crystalsBg})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-white">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-6">{t.missionTitle}</h3>
              <p className="text-lg leading-relaxed">{t.missionText}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif mb-6">{t.approachTitle}</h3>
              <p className="text-lg leading-relaxed">{t.approachText}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

