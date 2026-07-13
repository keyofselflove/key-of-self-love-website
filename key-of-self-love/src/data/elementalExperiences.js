import earthCardImage from '../assets/collection-earth.jpg'
import waterCardImage from '../assets/collection-water.jpg'
import airCardImage from '../assets/collection-air.jpg'
import fireCardImage from '../assets/collection-fire.jpg'
import earthDetailImage from '../assets/detail-earth.jpg'
import waterDetailImage from '../assets/detail-water.jpg'
import airDetailImage from '../assets/detail-air.jpg'
import fireDetailImage from '../assets/detail-fire.jpg'

const elementalExperiences = [
  {
    slug: 'earth',
    name: 'Earth Resonance Experience',
    tagline: 'Ground. Slow down. Reconnect.',
    cardImage: earthCardImage,
    detailImage: earthDetailImage,
    detailImagePosition: 'center 48%',
    paragraphs: [
      'The Earth Resonance Experience is an invitation to return to the present moment through nature, movement and stillness.',
      'We begin before sunrise with a visit to the Peace Labyrinth near the historic Alto Vista Chapel. Walking the labyrinth barefoot and with intention becomes a meditative journey inward.',
      'As you move toward the center, you are invited to release what no longer serves you.',
      'As you walk back outward, you consciously reconnect with the qualities, intentions and strengths you wish to carry forward into your life.',
      "From the labyrinth we continue with a barefoot walk through Aruba's rugged landscape toward the island's wild eastern coastline, where the wind, earth and ocean create a powerful sense of perspective and presence.",
      'Returning to our private garden sanctuary, there is time to refresh beneath our outdoor showers before enjoying a nourishing breakfast under the Banyan tree.',
      'The experience concludes with a deeply restorative Resonance Sound Journey designed to integrate the morning and bring the nervous system into a state of calm and balance.'
    ],
    included: ['Guided Peace Labyrinth experience', 'Barefoot nature walk', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey'],
    duration: 'Approximately 5.5 to 6 hours.',
    groupSize: ['Minimum 2 guests', 'Maximum 6 guests']
  },
  {
    slug: 'water',
    name: 'Water Resonance Experience',
    tagline: 'Flow. Surrender. Restore.',
    cardImage: waterCardImage,
    detailImage: waterDetailImage,
    detailImagePosition: 'center 58%',
    paragraphs: [
      'Water teaches us to trust, adapt and move with life rather than against it.',
      "The Water Resonance Experience begins before sunrise when the ocean is at its calmest and Aruba's underwater world slowly awakens.",
      'Together we enter the water for a mindful snorkeling experience with the opportunity to encounter sea turtles and experience the quiet beauty of the ocean in its most peaceful hours.',
      'This is not a sports activity or excursion.',
      'It is an invitation to slow down, breathe and reconnect with the natural rhythm of the sea.',
      'After returning to our private garden sanctuary, there is time to refresh beneath our outdoor showers before enjoying a nourishing breakfast under the Banyan tree.',
      'The experience concludes with a Resonance Sound Journey that supports deep relaxation and allows the body and mind to fully integrate the experience of the morning.'
    ],
    included: ['Guided ocean experience', 'Snorkeling equipment', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey'],
    duration: 'Approximately 5 to 5.5 hours.',
    groupSize: ['Minimum 2 guests', 'Maximum 4 guests'],
    note: 'Ocean activities are always dependent on weather and sea conditions.'
  },
  {
    slug: 'air',
    name: 'Air Resonance Experience',
    tagline: 'Rise. Breathe. Expand.',
    cardImage: airCardImage,
    detailImage: airDetailImage,
    detailImagePosition: 'center 45%',
    paragraphs: [
      'The Air Resonance Experience is inspired by perspective, freedom and the courage to move beyond perceived limitations.',
      "Before sunrise we travel to Aruba's iconic Hooiberg for a guided climb toward one of the island's most breathtaking viewpoints.",
      'This is not a race and not a fitness challenge.',
      'The climb becomes a journey of breath, rhythm and presence, with every step creating space for reflection and renewed perspective.',
      'At the summit, the island opens beneath you while the morning wind and first sunlight create a powerful sense of clarity and possibility.',
      'After returning to our garden sanctuary, there is time to refresh beneath our outdoor showers and enjoy a nourishing breakfast under the Banyan tree.',
      'The experience concludes with a Resonance Sound Journey that allows the body to recover and the mind to settle into the spaciousness created by the morning.'
    ],
    included: ['Guided Hooiberg sunrise climb', 'Transportation from our location', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey'],
    duration: 'Approximately 5.5 hours.',
    groupSize: ['Minimum 2 guests', 'Maximum 4 guests']
  },
  {
    slug: 'fire',
    name: 'Fire Resonance Experience',
    tagline: 'Ignite. Celebrate. Transform.',
    cardImage: fireCardImage,
    detailImage: fireDetailImage,
    detailImagePosition: 'center 52%',
    paragraphs: [
      'Fire is the element of vitality, passion and transformation.',
      'As the sun slowly sets over Aruba, we gather to celebrate life, connection and the energy that moves us forward.',
      'The Fire Resonance Experience invites you to pause at the end of the day and reconnect with what truly inspires and energizes you.',
      'Together we share a nourishing meal, experience the changing colours of the Caribbean sky and allow the transition from day to evening to create space for reflection and renewal.',
      'As darkness falls, the experience continues with a Resonance Sound Journey beneath the stars, where sound and silence meet in a moment of deep presence.',
      'This experience is not about slowing down alone.',
      'It is about reigniting your inner spark.'
    ],
    included: ['Sunset experience', 'Shared meal or nourishing bites', 'Resonance Sound Journey', 'Small group setting', 'Evening integration beneath the stars'],
    duration: 'Approximately 4 to 5 hours.',
    groupSize: ['Minimum 2 guests', 'Maximum 6 guests']
  }
]

export default elementalExperiences
