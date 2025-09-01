import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Heart, Music, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import blogBg from '../assets/search_images/lpSQ4gsc4SSh.jpg'

const Blog = ({ language }) => {
  const translations = {
    nl: {
      title: 'Blog',
      subtitle: 'Inzichten, tips en verhalen over sound healing en zelfliefde',
      readMore: 'Lees meer',
      categories: 'Categorieën',
      recent: 'Recente artikelen',
      popular: 'Populaire artikelen',
      newsletter: 'Nieuwsbrief',
      newsletterText: 'Ontvang de nieuwste artikelen en tips direct in je inbox',
      subscribe: 'Abonneren'
    },
    en: {
      title: 'Blog',
      subtitle: 'Insights, tips and stories about sound healing and self-love',
      readMore: 'Read more',
      categories: 'Categories',
      recent: 'Recent articles',
      popular: 'Popular articles',
      newsletter: 'Newsletter',
      newsletterText: 'Receive the latest articles and tips directly in your inbox',
      subscribe: 'Subscribe'
    }
  }

  const t = translations[language]

  const blogPosts = [
    {
      id: 1,
      title: language === 'nl' 
        ? 'De Wetenschap Achter Sound Healing: Hoe Trillingen Je Lichaam Genezen'
        : 'The Science Behind Sound Healing: How Vibrations Heal Your Body',
      excerpt: language === 'nl'
        ? 'Ontdek hoe wetenschappelijk onderzoek bewijst dat sound healing daadwerkelijk je zenuwstelsel kan resetten en stress kan verminderen.'
        : 'Discover how scientific research proves that sound healing can actually reset your nervous system and reduce stress.',
      category: language === 'nl' ? 'Wetenschap' : 'Science',
      date: language === 'nl' ? '15 maart 2024' : 'March 15, 2024',
      readTime: '8 min',
      image: '/src/assets/search_images/qtF2TGQ3tJOh.jpg',
      featured: true
    },
    {
      id: 2,
      title: language === 'nl'
        ? '5 Ademtechnieken die Je Leven Kunnen Veranderen'
        : '5 Breathing Techniques That Can Change Your Life',
      excerpt: language === 'nl'
        ? 'Leer eenvoudige maar krachtige ademtechnieken die je overal kunt toepassen voor meer rust en helderheid.'
        : 'Learn simple but powerful breathing techniques you can apply anywhere for more peace and clarity.',
      category: language === 'nl' ? 'Technieken' : 'Techniques',
      date: language === 'nl' ? '8 maart 2024' : 'March 8, 2024',
      readTime: '6 min',
      image: '/src/assets/search_images/mJk0X2H84qHa.jpg'
    },
    {
      id: 3,
      title: language === 'nl'
        ? 'Van Burn-out naar Balans: Mijn Persoonlijke Reis'
        : 'From Burnout to Balance: My Personal Journey',
      excerpt: language === 'nl'
        ? 'Een eerlijk verhaal over hoe ik van burn-out naar innerlijke vrede ging en wat ik onderweg heb geleerd.'
        : 'An honest story about how I went from burnout to inner peace and what I learned along the way.',
      category: language === 'nl' ? 'Persoonlijk' : 'Personal',
      date: language === 'nl' ? '1 maart 2024' : 'March 1, 2024',
      readTime: '10 min',
      image: '/src/assets/search_images/ckIuDigcvHPR.jpg'
    },
    {
      id: 4,
      title: language === 'nl'
        ? 'Chakra\'s en Klank: Een Praktische Gids'
        : 'Chakras and Sound: A Practical Guide',
      excerpt: language === 'nl'
        ? 'Begrijp hoe verschillende frequenties werken op je energiecentra en hoe je dit kunt gebruiken voor healing.'
        : 'Understand how different frequencies work on your energy centers and how you can use this for healing.',
      category: language === 'nl' ? 'Spiritualiteit' : 'Spirituality',
      date: language === 'nl' ? '22 februari 2024' : 'February 22, 2024',
      readTime: '7 min',
      image: '/src/assets/search_images/26q13cZyYJjn.jpg'
    },
    {
      id: 5,
      title: language === 'nl'
        ? 'Zelfliefde in de Praktijk: 7 Dagelijkse Rituelen'
        : 'Self-Love in Practice: 7 Daily Rituals',
      excerpt: language === 'nl'
        ? 'Eenvoudige maar krachtige rituelen die je kunt inbouwen in je dagelijkse routine voor meer zelfcompassie.'
        : 'Simple but powerful rituals you can build into your daily routine for more self-compassion.',
      category: language === 'nl' ? 'Zelfliefde' : 'Self-Love',
      date: language === 'nl' ? '14 februari 2024' : 'February 14, 2024',
      readTime: '5 min',
      image: '/src/assets/search_images/gly8UEn84bod.jpg'
    },
    {
      id: 6,
      title: language === 'nl'
        ? 'De Kracht van Stilte in een Lawaaierige Wereld'
        : 'The Power of Silence in a Noisy World',
      excerpt: language === 'nl'
        ? 'Waarom stilte essentieel is voor je welzijn en hoe je momenten van rust kunt creëren in je drukke leven.'
        : 'Why silence is essential for your wellbeing and how to create moments of peace in your busy life.',
      category: language === 'nl' ? 'Mindfulness' : 'Mindfulness',
      date: language === 'nl' ? '7 februari 2024' : 'February 7, 2024',
      readTime: '6 min',
      image: '/src/assets/search_images/8GHfnS1O5Igv.jpg'
    }
  ]

  const categories = [
    { name: language === 'nl' ? 'Wetenschap' : 'Science', icon: Brain, count: 4 },
    { name: language === 'nl' ? 'Technieken' : 'Techniques', icon: Music, count: 8 },
    { name: language === 'nl' ? 'Zelfliefde' : 'Self-Love', icon: Heart, count: 6 },
    { name: language === 'nl' ? 'Spiritualiteit' : 'Spirituality', icon: Sparkles, count: 5 }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${blogBg})` }}
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {blogPosts.filter(post => post.featured).map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <Card className="overflow-hidden border-2 border-amber-200">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h2 className="text-2xl font-serif text-amber-600 mb-3">
                          {post.title}
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <Button className="bg-amber-600 hover:bg-amber-700">
                          {t.readMore}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-2 border-pink-100 hover:border-amber-200 transition-colors">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                          <span className="bg-amber-100 text-amber-600 px-2 py-1 rounded text-xs">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg text-amber-600 line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                          {t.readMore}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-amber-600">
                        {t.categories}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {categories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-amber-50 cursor-pointer transition-colors">
                            <div className="flex items-center space-x-2">
                              <category.icon className="h-4 w-4 text-amber-600" />
                              <span className="text-gray-700">{category.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">({category.count})</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-pink-50 to-purple-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-amber-600">
                        {t.newsletter}
                      </CardTitle>
                      <CardDescription>
                        {t.newsletterText}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                        <Link to="/contact">{t.subscribe}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-serif text-amber-600 mb-4">
              {language === 'nl' ? 'Wil je meer leren?' : 'Want to learn more?'}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {language === 'nl' 
                ? 'Boek een sessie en ervaar zelf de kracht van sound healing.'
                : 'Book a session and experience the power of sound healing yourself.'
              }
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/contact">
                {language === 'nl' ? 'Boek een Sessie' : 'Book a Session'}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog

