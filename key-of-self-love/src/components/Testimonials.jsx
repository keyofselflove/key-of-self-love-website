import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import testimonialsBg from '../assets/search_images/ia31pAQVKJlk.jpg'

const Testimonials = ({ language }) => {
  const translations = {
    nl: {
      title: 'Ervaringen',
      subtitle: 'Wat anderen zeggen over hun sound healing reis',
      readMore: 'Lees meer ervaringen',
      shareYour: 'Deel jouw ervaring'
    },
    en: {
      title: 'Testimonials',
      subtitle: 'What others say about their sound healing journey',
      readMore: 'Read more experiences',
      shareYour: 'Share your experience'
    }
  }

  const t = translations[language]

  const testimonials = [
    {
      name: 'Sarah M.',
      service: language === 'nl' ? 'Individuele Sessie' : 'Individual Session',
      rating: 5,
      text: language === 'nl' 
        ? 'Na jaren van stress en burn-out vond ik eindelijk rust tijdens mijn sessie met Mieke. De klankschalen brachten me in een diepe staat van ontspanning die ik al lang niet meer had ervaren. Ik voelde me daarna herboren en vol energie. Mieke heeft een bijzondere gave om je op je gemak te stellen en precies te weten wat je nodig hebt.'
        : 'After years of stress and burnout, I finally found peace during my session with Mieke. The singing bowls brought me into a deep state of relaxation that I hadn\'t experienced in a long time. I felt reborn and full of energy afterwards. Mieke has a special gift for putting you at ease and knowing exactly what you need.',
      date: language === 'nl' ? '2 maanden geleden' : '2 months ago'
    },
    {
      name: 'Marcus R.',
      service: language === 'nl' ? 'Groepssessie' : 'Group Session',
      rating: 5,
      text: language === 'nl'
        ? 'Ik was sceptisch over sound healing, maar de groepssessie heeft me volledig overtuigd. De combinatie van verschillende instrumenten en de collectieve energie in de ruimte was magisch. Ik sliep die nacht beter dan in maanden en voelde me de dagen erna veel helderder in mijn hoofd. Zeker een aanrader!'
        : 'I was skeptical about sound healing, but the group session completely convinced me. The combination of different instruments and the collective energy in the room was magical. I slept better that night than I had in months and felt much clearer in my head for days afterwards. Definitely recommended!',
      date: language === 'nl' ? '3 weken geleden' : '3 weeks ago'
    },
    {
      name: 'Elena V.',
      service: language === 'nl' ? 'Workshop' : 'Workshop',
      rating: 5,
      text: language === 'nl'
        ? 'De workshop was een openbaring! Mieke legde alles zo duidelijk uit en ik kon zelf ervaren hoe krachtig sound healing is. Ik heb nu mijn eigen klankschaal en pas de technieken thuis toe. Het heeft mijn dagelijkse meditatiepraktijk naar een heel nieuw niveau getild. Dankjewel Mieke!'
        : 'The workshop was a revelation! Mieke explained everything so clearly and I could experience for myself how powerful sound healing is. I now have my own singing bowl and apply the techniques at home. It has taken my daily meditation practice to a whole new level. Thank you Mieke!',
      date: language === 'nl' ? '1 maand geleden' : '1 month ago'
    },
    {
      name: 'David L.',
      service: language === 'nl' ? 'Online Begeleiding' : 'Online Guidance',
      rating: 5,
      text: language === 'nl'
        ? 'Door de pandemie kon ik niet naar de praktijk, maar de online sessies waren verrassend effectief. Mieke creëerde een veilige ruimte via het scherm en de ademwerk technieken hielpen me enorm bij mijn angstgevoelens. De flexibiliteit van online sessies past perfect bij mijn drukke schema.'
        : 'Due to the pandemic I couldn\'t go to the practice, but the online sessions were surprisingly effective. Mieke created a safe space through the screen and the breathwork techniques helped me tremendously with my anxiety. The flexibility of online sessions fits perfectly with my busy schedule.',
      date: language === 'nl' ? '6 weken geleden' : '6 weeks ago'
    },
    {
      name: 'Isabella C.',
      service: language === 'nl' ? '3-Sessie Pakket' : '3-Session Package',
      rating: 5,
      text: language === 'nl'
        ? 'Het 3-sessie pakket was de beste investering in mezelf die ik ooit heb gedaan. Elke sessie bouwde voort op de vorige en ik merkte een duidelijke transformatie in hoe ik met stress omga. Mieke\'s persoonlijke begeleiding tussen de sessies via WhatsApp was ontzettend waardevol. Ik voel me nu veel meer verbonden met mezelf.'
        : 'The 3-session package was the best investment in myself I\'ve ever made. Each session built on the previous one and I noticed a clear transformation in how I deal with stress. Mieke\'s personal guidance between sessions via WhatsApp was incredibly valuable. I now feel much more connected to myself.',
      date: language === 'nl' ? '2 maanden geleden' : '2 months ago'
    },
    {
      name: 'Thomas K.',
      service: language === 'nl' ? 'Individuele Sessie' : 'Individual Session',
      rating: 5,
      text: language === 'nl'
        ? 'Als man was ik eerst wat onzeker over sound healing, maar Mieke stelde me meteen op mijn gemak. De sessie was diep ontspannend en ik voelde emoties loskomen die ik al jaren had weggestopt. Het was confronterend maar ook heel helend. Ik ga zeker terug voor meer sessies.'
        : 'As a man I was initially a bit unsure about sound healing, but Mieke immediately put me at ease. The session was deeply relaxing and I felt emotions come loose that I had been suppressing for years. It was confronting but also very healing. I will definitely go back for more sessions.',
      date: language === 'nl' ? '5 weken geleden' : '5 weeks ago'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${testimonialsBg})` }}
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
            <p className="text-xl leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-pink-100 hover:border-amber-200 transition-colors">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-amber-600 opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-amber-600">
                            {testimonial.service}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
              <div className="text-lg text-gray-700">
                {language === 'nl' ? 'Tevreden Cliënten' : 'Happy Clients'}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-lg text-gray-700">
                {language === 'nl' ? 'Sessies Gegeven' : 'Sessions Given'}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-lg text-gray-700">
                {language === 'nl' ? 'Tevredenheidscore' : 'Satisfaction Rate'}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-amber-600 mb-4">
              {language === 'nl' ? 'Klaar voor jouw transformatie?' : 'Ready for your transformation?'}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === 'nl' 
                ? 'Sluit je aan bij de vele mensen die al hun innerlijke rust hebben gevonden door sound healing.'
                : 'Join the many people who have already found their inner peace through sound healing.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'nl' ? 'Boek je Sessie' : 'Book Your Session'}
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-md hover:bg-amber-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'nl' ? 'Bekijk Diensten' : 'View Services'}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

