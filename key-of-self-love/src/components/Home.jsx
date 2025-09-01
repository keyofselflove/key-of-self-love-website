import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Heart, Sparkles, Music, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/2916EE18-0612-401A-98FE-1F145D9BE1A6.png'
import benefitsImage from '../assets/Alittlegift.zip-2.png'
import meditationBg from '../assets/search_images/ckIuDigcvHPR.jpg'
import soundBowls from '../assets/search_images/qtF2TGQ3tJOh.jpg'

const Home = ({ language }) => {
  const translations = {
    nl: {
      title: 'Mieke van Lierop',
      subtitle: 'Sound & Consciousness Guide',
      tagline: 'From Head to Heart. From Surviving to Living.',
      quote: '"Your heart already knows the way. I walk beside you until you remember the path."',
      intro: 'Welkom bij Key of Self Love, waar sound healing de sleutel is tot diepe transformatie en innerlijke rust.',
      ctaServices: 'Ontdek Diensten',
      ctaContact: 'Neem Contact Op',
      benefitsTitle: 'Voordelen van een Sound Journey',
      learnMore: 'Meer Leren',
      aboutSection: 'Over Sound Healing',
      aboutText: 'Sound healing werkt met trillingen die direct door het lichaam bewegen en je zenuwstelsel resetten.'
    },
    en: {
      title: 'Mieke van Lierop',
      subtitle: 'Sound & Consciousness Guide',
      tagline: 'From Head to Heart. From Surviving to Living.',
      quote: '"Your heart already knows the way. I walk beside you until you remember the path."',
      intro: 'Welcome to Key of Self Love, where sound healing is the key to deep transformation and inner peace.',
      ctaServices: 'Discover Services',
      ctaContact: 'Get in Touch',
      benefitsTitle: 'Benefits of a Sound Journey',
      learnMore: 'Learn More',
      aboutSection: 'About Sound Healing',
      aboutText: 'Sound healing works with vibrations that move directly through the body and reset your nervous system.'
    }
  }

  const t = translations[language]

  const benefits = [
    { icon: Heart, text: language === 'nl' ? 'Vermindert Stress & Angst' : 'Reduces Stress & Anxiety' },
    { icon: Sparkles, text: language === 'nl' ? 'Spirituele Verdieping' : 'Spiritual Deepening' },
    { icon: Music, text: language === 'nl' ? 'Emotionele Balans' : 'Emotional Balance' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${meditationBg})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img src={logo} alt="Key of Self Love" className="h-32 w-32 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif text-amber-600 mb-2">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-500 mb-4">
              {t.subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-600 italic mb-8">
              {t.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <blockquote className="text-2xl md:text-3xl font-serif text-amber-600 mb-8">
              {t.quote}
            </blockquote>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              {t.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/services">{t.ctaServices}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/contact">{t.ctaContact}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
                src={benefitsImage} 
                alt="Benefits of Sound Journey" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif text-amber-600 mb-6">
                {t.benefitsTitle}
              </h2>
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <benefit.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link to="/sound-healing">{t.learnMore}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sound Healing Preview */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${soundBowls})` }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-6">{t.aboutSection}</h2>
            <p className="text-xl mb-8 leading-relaxed">
              {t.aboutText}
            </p>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/sound-healing">{t.learnMore}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-amber-600 mb-4">
              {language === 'nl' ? 'Klaar om je reis te beginnen?' : 'Ready to start your journey?'}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === 'nl' 
                ? 'Neem contact op voor een persoonlijk gesprek over hoe sound healing jou kan helpen.'
                : 'Get in touch for a personal conversation about how sound healing can help you.'
              }
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t.ctaContact}</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

