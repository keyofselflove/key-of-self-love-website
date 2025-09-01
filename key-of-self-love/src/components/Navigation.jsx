import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/2916EE18-0612-401A-98FE-1F145D9BE1A6.png'

const Navigation = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const translations = {
    nl: {
      home: 'Home',
      about: 'Over Mij',
      soundHealing: 'Sound Healing',
      services: 'Diensten & Prijzen',
      testimonials: 'Ervaringen',
      blog: 'Blog',
      contact: 'Contact'
    },
    en: {
      home: 'Home',
      about: 'About Me',
      soundHealing: 'Sound Healing',
      services: 'Services & Prices',
      testimonials: 'Testimonials',
      blog: 'Blog',
      contact: 'Contact'
    }
  }

  const t = translations[language]

  const navItems = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/sound-healing', label: t.soundHealing },
    { path: '/services', label: t.services },
    { path: '/testimonials', label: t.testimonials },
    { path: '/blog', label: t.blog },
    { path: '/contact', label: t.contact }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Key of Self Love" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-xl font-serif text-amber-600">Key of</span>
              <span className="text-2xl font-serif text-amber-600 -mt-1">SELF LOVE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  location.pathname === item.path
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-amber-600 hover:bg-pink-50 rounded-md ${
                    location.pathname === item.path
                      ? 'text-amber-600 bg-pink-50'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

