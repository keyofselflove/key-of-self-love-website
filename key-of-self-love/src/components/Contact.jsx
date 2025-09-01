import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, MapPin, Send, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import contactBg from '../assets/search_images/gly8UEn84bod.jpg'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const translations = {
    nl: {
      title: 'Contact',
      subtitle: 'Neem contact op voor een persoonlijk gesprek',
      formTitle: 'Stuur een bericht',
      name: 'Naam',
      email: 'E-mail',
      phone: 'Telefoon (optioneel)',
      service: 'Geïnteresseerd in',
      message: 'Bericht',
      send: 'Verstuur Bericht',
      contactInfo: 'Contactgegevens',
      hours: 'Beschikbaarheid',
      hoursText: 'Ma-Vr: 9:00-18:00\nZa: 10:00-16:00\nZo: Op afspraak',
      location: 'Locatie',
      locationText: 'Praktijk in Aruba\nHuisbezoeken mogelijk',
      selectService: 'Selecteer een dienst',
      individual: 'Individuele Sessie',
      group: 'Groepssessie',
      workshop: 'Workshop',
      online: 'Online Begeleiding',
      package: 'Pakket/Abonnement',
      other: 'Anders',
      namePlaceholder: 'Jouw naam',
      emailPlaceholder: 'jouw@email.com',
      phonePlaceholder: '+297 123 4567',
      messagePlaceholder: 'Vertel me over jezelf en waar je hulp bij zoekt...'
    },
    en: {
      title: 'Contact',
      subtitle: 'Get in touch for a personal conversation',
      formTitle: 'Send a message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      service: 'Interested in',
      message: 'Message',
      send: 'Send Message',
      contactInfo: 'Contact Information',
      hours: 'Availability',
      hoursText: 'Mon-Fri: 9:00-18:00\nSat: 10:00-16:00\nSun: By appointment',
      location: 'Location',
      locationText: 'Practice in Aruba\nHome visits possible',
      selectService: 'Select a service',
      individual: 'Individual Session',
      group: 'Group Session',
      workshop: 'Workshop',
      online: 'Online Guidance',
      package: 'Package/Subscription',
      other: 'Other',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+297 123 4567',
      messagePlaceholder: 'Tell me about yourself and what you need help with...'
    }
  }

  const t = translations[language]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `Sound Healing Inquiry - ${formData.service || 'General'}`
    const body = `Naam: ${formData.name}
E-mail: ${formData.email}
Telefoon: ${formData.phone || 'Niet opgegeven'}
Geïnteresseerd in: ${formData.service || 'Niet opgegeven'}

Bericht:
${formData.message}`

    const mailtoLink = `mailto:Keyofselflove@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const contactMethods = [
    {
      icon: Phone,
      title: language === 'nl' ? 'Telefoon' : 'Phone',
      value: '+297 56 14 808',
      link: 'tel:+29756148080'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Keyofselflove@gmail.com',
      link: 'mailto:Keyofselflove@gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@keyofselflove',
      link: 'https://instagram.com/keyofselflove'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${contactBg})` }}
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

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-600">
                    {t.formTitle}
                  </CardTitle>
                  <CardDescription>
                    {language === 'nl' 
                      ? 'Vul het formulier in en ik neem zo snel mogelijk contact met je op.'
                      : 'Fill out the form and I will get back to you as soon as possible.'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.name} *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.namePlaceholder}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.email} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.emailPlaceholder}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.phone}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.phonePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.service}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">{t.selectService}</option>
                        <option value={t.individual}>{t.individual}</option>
                        <option value={t.group}>{t.group}</option>
                        <option value={t.workshop}>{t.workshop}</option>
                        <option value={t.online}>{t.online}</option>
                        <option value={t.package}>{t.package}</option>
                        <option value={t.other}>{t.other}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.message} *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.messagePlaceholder}
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                      <Send className="h-4 w-4 mr-2" />
                      {t.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-600">
                    {t.contactInfo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-amber-100 p-3 rounded-full">
                        <method.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {method.title}
                        </div>
                        <a 
                          href={method.link}
                          className="text-amber-600 hover:text-amber-700 transition-colors"
                          target={method.icon === Instagram ? '_blank' : undefined}
                          rel={method.icon === Instagram ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-amber-600 flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{t.hours}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-gray-700">
                    {t.hoursText}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-amber-600 flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{t.location}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-gray-700">
                    {t.locationText}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl md:text-3xl font-serif text-amber-600 italic">
              "Your heart already knows the way. I walk beside you until you remember the path."
            </blockquote>
            <p className="text-lg text-gray-700 mt-6">
              {language === 'nl' 
                ? 'Ik kijk ernaar uit om je te ontmoeten en samen deze reis te beginnen.'
                : 'I look forward to meeting you and starting this journey together.'
              }
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

