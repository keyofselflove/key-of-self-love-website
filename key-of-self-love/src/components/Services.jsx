import React from 'react'
import { motion } from 'framer-motion'
import { User, Users, BookOpen, Video, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import servicesBg from '../assets/search_images/8GHfnS1O5Igv.jpg'

const Services = ({ language }) => {
  const translations = {
    nl: {
      title: 'Diensten & Prijzen',
      subtitle: 'Ontdek welke sound healing ervaring bij jou past',
      individual: 'Individuele Sessies',
      group: 'Groepssessies',
      workshop: 'Workshops',
      online: 'Online Begeleiding',
      bookNow: 'Boek Nu',
      contactForPrices: 'Neem contact op voor prijzen',
      duration: 'Duur',
      location: 'Locatie',
      includes: 'Inclusief'
    },
    en: {
      title: 'Services & Prices',
      subtitle: 'Discover which sound healing experience suits you',
      individual: 'Individual Sessions',
      group: 'Group Sessions',
      workshop: 'Workshops',
      online: 'Online Guidance',
      bookNow: 'Book Now',
      contactForPrices: 'Contact for prices',
      duration: 'Duration',
      location: 'Location',
      includes: 'Includes'
    }
  }

  const t = translations[language]

  const services = [
    {
      icon: User,
      title: t.individual,
      description: language === 'nl' 
        ? 'Persoonlijke sound healing sessie afgestemd op jouw specifieke behoeften'
        : 'Personal sound healing session tailored to your specific needs',
      duration: '90 ' + (language === 'nl' ? 'minuten' : 'minutes'),
      location: language === 'nl' ? 'Praktijk of bij jou thuis' : 'Practice or at your home',
      includes: language === 'nl' 
        ? 'Intake gesprek, sound healing sessie, nabespreking'
        : 'Intake conversation, sound healing session, follow-up discussion',
      price: '$120',
      features: language === 'nl' ? [
        'Volledig gepersonaliseerde ervaring',
        'Gebruik van verschillende instrumenten',
        'Ademwerk en meditatie',
        'Persoonlijke begeleiding'
      ] : [
        'Fully personalized experience',
        'Use of various instruments',
        'Breathwork and meditation',
        'Personal guidance'
      ]
    },
    {
      icon: Users,
      title: t.group,
      description: language === 'nl'
        ? 'Deel de krachtige ervaring van sound healing met anderen in een intieme groep'
        : 'Share the powerful experience of sound healing with others in an intimate group',
      duration: '75 ' + (language === 'nl' ? 'minuten' : 'minutes'),
      location: language === 'nl' ? 'Praktijk' : 'Practice',
      includes: language === 'nl'
        ? 'Groepsmeditatie, sound journey, thee ceremonie'
        : 'Group meditation, sound journey, tea ceremony',
      price: '$45',
      features: language === 'nl' ? [
        'Minimaal 3 deelnemers / Maximaal 8 deelnemers',
        'Collectieve healing energie',
        'Sociale verbinding',
        'Maandelijkse sessies'
      ] : [
        'Maximum 8 participants',
        'Collective healing energy',
        'Social connection',
        'Monthly sessions'
      ]
    },
    {
      icon: BookOpen,
      title: t.workshop,
      description: language === 'nl'
        ? 'Leer de basis van sound healing en ontdek hoe je dit zelf kunt toepassen'
        : 'Learn the basics of sound healing and discover how you can apply this yourself',
      duration: '3 ' + (language === 'nl' ? 'uur' : 'hours'),
      location: language === 'nl' ? 'Praktijk of externe locatie' : 'Practice or external location',
      includes: language === 'nl'
        ? 'Theorie, praktijk, eigen instrumenten proberen, handout'
        : 'Theory, practice, trying your own instruments, handout',
      price: '$88',
      features: language === 'nl' ? [
        'Hands-on ervaring',
        'Theorie en praktijk',
        'Neem je eigen instrumenten mee',
        'Kleine groepen (min 3 personen max 6 personen)'
      ] : [
        'Hands-on experience',
        'Theory and practice',
        'Take home your own instruments',
        'Small groups (min 3 people max 6 people)'
      ]
    },
    {
      icon: Video,
      title: t.online,
      description: language === 'nl'
        ? 'Persoonlijke begeleiding en coaching vanuit het comfort van je eigen huis'
        : 'Personal guidance and coaching from the comfort of your own home',
      duration: '90/120 ' + (language === 'nl' ? 'minuten' : 'minutes'),
      location: 'Online (Zoom)',
      includes: language === 'nl'
        ? 'Video call, ademwerk, meditatie, persoonlijke coaching'
        : 'Video call, breathwork, meditation, personal coaching',
      price: '$90',
      features: language === 'nl' ? [
        'Vanuit je eigen veilige ruimte',
        'Flexibele planning',
        'Opname beschikbaar',
        'Follow-up via WhatsApp'
      ] : [
        'From your own safe space',
        'Flexible scheduling',
        'Recording available',
        'Follow-up via WhatsApp'
      ]
    }
  ]

  const packages = [
    {
      title: language === 'nl' ? '3-Sessie Pakket' : '3-Session Package',
      description: language === 'nl' 
        ? 'Drie individuele sessies voor diepere transformatie'
        : 'Three individual sessions for deeper transformation',
      price: '$333',
      savings: language === 'nl' ? 'Bespaar €35' : 'Save €35',
      features: language === 'nl' ? [
        '3 individuele sessies van 90/120 minuten',
        'Persoonlijk transformatie plan',
        'WhatsApp ondersteuning tussen sessies',
        'Geldig 6 maanden'
      ] : [
        '3 individual sessions of 90/120 minutes',
        'Personal transformation plan',
        'WhatsApp support between sessions',
        'Valid for 6 months'
      ]
    },
    {
      title: language === 'nl' ? 'Maandabonnement Groep' : 'Monthly Group Subscription',
      description: language === 'nl'
        ? 'Onbeperkt deelnemen aan groepssessies'
        : 'Unlimited participation in group sessions',
      price: '$120',
      savings: language === 'nl' ? 'Per maand' : 'Per month',
      features: language === 'nl' ? [
        'Onbeperkt groepssessies',
        'Prioriteit bij workshop aanmeldingen',
        '20% korting op individuele sessies',
        'Maandelijks opzegbaar'
      ] : [
        'Unlimited group sessions',
        'Priority for workshop registrations',
        '20% discount on individual sessions',
        'Cancel monthly'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${servicesBg})` }}
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-pink-100 hover:border-amber-200 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <service.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-amber-600">
                          {service.title}
                        </CardTitle>
                        <div className="text-2xl font-bold text-gray-900 mt-1">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-700">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span><strong>{t.duration}:</strong> {service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span><strong>{t.location}:</strong> {service.location}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>{t.includes}:</strong> {service.includes}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link to="/contact">{t.bookNow}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-amber-600 mb-6">
              {language === 'nl' ? 'Pakketten & Abonnementen' : 'Packages & Subscriptions'}
            </h2>
            <p className="text-lg text-gray-700">
              {language === 'nl' 
                ? 'Kies voor een pakket en bespaar op meerdere sessies'
                : 'Choose a package and save on multiple sessions'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-amber-200 bg-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-amber-600 mb-2">
                      {pkg.title}
                    </CardTitle>
                    <div className="text-3xl font-bold text-gray-900">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {pkg.savings}
                    </div>
                    <CardDescription className="text-gray-700 mt-4">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link to="/contact">{t.bookNow}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-amber-600 mb-4">
              {language === 'nl' ? 'Vragen over de diensten?' : 'Questions about the services?'}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === 'nl' 
                ? 'Neem contact op voor een persoonlijk advies over welke sessie het beste bij jou past.'
                : 'Get in touch for personal advice about which session suits you best.'
              }
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/contact">
                {language === 'nl' ? 'Neem Contact Op' : 'Get in Touch'}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

