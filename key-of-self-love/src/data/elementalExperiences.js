import earthCardImage from '../assets/collection-earth.jpg'
import waterCardImage from '../assets/collection-water.jpg'
import airCardImage from '../assets/collection-air.jpg'
import fireCardImage from '../assets/collection-fire.jpg'
import earthDetailImage from '../assets/detail-earth.jpg'
import waterDetailImage from '../assets/detail-water.jpg'
import airDetailImage from '../assets/detail-air.jpg'
import fireDetailImage from '../assets/detail-fire.jpg'

const commonReleaseRitual = {
  en: 'Each elemental experience includes a symbolic release ritual. Through earth, water, air or fire, guests are invited to let go of what no longer serves them and create space for what wants to emerge.',
  nl: 'Elke elementaire ervaring omvat een symbolisch loslaatritueel. Via aarde, water, lucht of vuur worden gasten uitgenodigd om los te laten wat hen niet langer dient en ruimte te maken voor wat zich wil ontvouwen.',
  es: 'Cada experiencia elemental incluye un ritual simbólico de liberación. A través de la tierra, el agua, el aire o el fuego, se invita a los participantes a soltar aquello que ya no les sirve y a crear espacio para lo que desea emerger.'
}

const media = {
  earth: { cardImage: earthCardImage, detailImage: earthDetailImage, detailImagePosition: 'center 48%' },
  water: { cardImage: waterCardImage, detailImage: waterDetailImage, detailImagePosition: 'center 58%' },
  air: { cardImage: airCardImage, detailImage: airDetailImage, detailImagePosition: 'center 45%' },
  fire: { cardImage: fireCardImage, detailImage: fireDetailImage, detailImagePosition: 'center 52%' }
}

const translations = {
  en: [
    {
      slug: 'earth', name: 'Earth Resonance Experience', tagline: 'Ground. Slow down. Reconnect.',
      paragraphs: [
        'The Earth Resonance Experience is an invitation to return to the present moment through nature, movement and stillness.',
        'We begin before sunrise with a visit to the Peace Labyrinth near the historic Alto Vista Chapel. Walking the labyrinth barefoot and with intention becomes a meditative journey inward.',
        'As you move toward the center, you are invited to release what no longer serves you.',
        'As you walk back outward, you consciously reconnect with the qualities, intentions and strengths you wish to carry forward into your life.',
        "From the labyrinth we continue with a barefoot walk through Aruba's rugged landscape toward the island's wild eastern coastline, where the wind, earth and ocean create a powerful sense of perspective and presence.",
        'Returning to our private garden sanctuary, there is time to refresh beneath our outdoor showers before enjoying a nourishing breakfast under the Banyan tree.',
        'The experience concludes with a deeply restorative Resonance Sound Journey designed to integrate the morning and bring the nervous system into a state of calm and balance.',
        commonReleaseRitual.en,
        'The experience includes the symbolic labyrinth ritual for grounding, reflection and release.'
      ],
      included: ['Guided Peace Labyrinth experience', 'Barefoot nature walk', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey', 'Time for integration and reflection'],
      duration: 'Approximately 5.5 to 6 hours.', groupSize: ['Minimum 2 guests', 'Maximum 6 guests']
    },
    {
      slug: 'water', name: 'Water Resonance Experience', tagline: 'Flow. Surrender. Restore.',
      paragraphs: [
        'Water teaches us to trust, adapt and move with the currents of life rather than against them.',
        "The Water Resonance Experience begins before sunrise when the ocean is at its calmest and Aruba's underwater world slowly awakens.",
        'Together we enter the water for a mindful snorkeling experience with the opportunity to encounter sea turtles and experience the quiet beauty of the ocean in its most peaceful hours.',
        'This is not a sports activity or excursion.',
        'It is an invitation to slow down, breathe and reconnect with the natural rhythm of the sea.',
        'After returning to our private garden sanctuary, there is time to refresh beneath our outdoor showers before enjoying a nourishing breakfast under the Banyan tree.',
        'The experience concludes with a Resonance Sound Journey that supports deep relaxation and allows the body and mind to fully integrate the experience of the morning.',
        commonReleaseRitual.en,
        'The experience includes a symbolic water release ritual focused on flow, emotional release and renewal.'
      ],
      included: ['Guided ocean experience', 'Snorkeling equipment', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey', 'Time for integration and reflection'],
      duration: 'Approximately 5 to 5.5 hours.', groupSize: ['Minimum 2 guests', 'Maximum 4 guests'],
      note: 'Ocean activities are always dependent on weather and sea conditions.'
    },
    {
      slug: 'air', name: 'Air Resonance Experience', tagline: 'Rise. Breathe. Expand.',
      paragraphs: [
        'The Air Resonance Experience is inspired by perspective, freedom and the courage to move beyond perceived limitations.',
        "Before sunrise we travel to Aruba's iconic Hooiberg for a guided climb toward one of the island's most breathtaking viewpoints.",
        'This is not a race and not a fitness challenge.',
        'The climb becomes a journey of breath, rhythm and presence, with every step creating space for reflection and renewed perspective.',
        'At the summit, the island opens beneath you while the morning wind and first sunlight create a powerful sense of clarity and possibility.',
        'After returning to our garden sanctuary, there is time to refresh beneath our outdoor showers and enjoy a nourishing breakfast under the Banyan tree.',
        'The experience concludes with a Resonance Sound Journey that allows the body to recover and the mind to settle into the spaciousness created by the morning.',
        commonReleaseRitual.en,
        'The experience includes a symbolic breath and air ritual focused on clarity, perspective and creating space for new possibilities.'
      ],
      included: ['Guided Hooiberg sunrise climb', 'Transportation from our location', 'Outdoor garden shower', 'Healthy breakfast', 'Resonance Sound Journey', 'Time for integration and reflection'],
      duration: 'Approximately 5.5 hours.', groupSize: ['Minimum 2 guests', 'Maximum 4 guests']
    },
    {
      slug: 'fire', name: 'Fire Resonance Experience', tagline: 'Ignite. Celebrate. Transform.',
      paragraphs: [
        'Fire is the element of vitality, passion and transformation.',
        'As the sun slowly sets over Aruba, we gather to celebrate life, connection and the energy that moves us forward.',
        'The Fire Resonance Experience invites you to pause at the end of the day and reconnect with what truly inspires and energizes you.',
        'Together we share a nourishing meal, experience the changing colours of the Caribbean sky and allow the transition from day to evening to create space for reflection and renewal.',
        'As darkness falls, the experience continues with a Resonance Sound Journey beneath the stars, where sound and silence meet in a moment of deep presence.',
        'This experience is not about slowing down alone.',
        'It is about reigniting your inner spark.',
        commonReleaseRitual.en,
        'The experience includes a symbolic fire offering ritual inspired by gratitude, transformation and intentional release.'
      ],
      included: ['Sunset experience', 'Shared meal or nourishing bites', 'Resonance Sound Journey', 'Small group setting', 'Evening integration beneath the stars', 'Time for integration and reflection'],
      duration: 'Approximately 4 to 5 hours.', groupSize: ['Minimum 2 guests', 'Maximum 6 guests']
    }
  ],
  nl: [
    {
      slug: 'earth', name: 'Earth Resonance Experience', tagline: 'Aard. Vertraag. Verbind opnieuw.',
      paragraphs: [
        'De Earth Resonance Experience is een uitnodiging om via natuur, beweging en stilte terug te keren naar het huidige moment.',
        'Voor zonsopgang bezoeken we het Vredeslabyrint bij de historische Alto Vista-kapel. Blootsvoets en met aandacht door het labyrint lopen wordt een meditatieve reis naar binnen.',
        'Terwijl je naar het midden loopt, word je uitgenodigd om los te laten wat je niet langer dient.',
        'Op de weg naar buiten verbind je je bewust opnieuw met de kwaliteiten, intenties en kracht die je mee wilt nemen in je leven.',
        'Vanuit het labyrint vervolgen we onze weg blootsvoets door het ruige Arubaanse landschap naar de wilde oostkust, waar wind, aarde en oceaan een krachtig gevoel van perspectief en aanwezigheid creëren.',
        'Terug in ons besloten tuinsanctuarium is er tijd om je op te frissen onder de buitendouches, gevolgd door een voedzaam ontbijt onder de banyanboom.',
        'De ervaring wordt afgesloten met een diep herstellende resonantie-klankreis die de ochtend helpt integreren en het zenuwstelsel tot rust en balans brengt.',
        commonReleaseRitual.nl,
        'Deze ervaring omvat het symbolische labyrintrittueel voor aarding, reflectie en loslaten.'
      ],
      included: ['Begeleide ervaring in het Vredeslabyrint', 'Blootsvoetse natuurwandeling', 'Buitendouche in de tuin', 'Gezond ontbijt', 'Resonantie-klankreis', 'Tijd voor integratie en reflectie'],
      duration: 'Ongeveer 5,5 tot 6 uur.', groupSize: ['Minimaal 2 gasten', 'Maximaal 6 gasten']
    },
    {
      slug: 'water', name: 'Water Resonance Experience', tagline: 'Stroom. Geef mee. Herstel.',
      paragraphs: [
        'Water leert ons te vertrouwen, ons aan te passen en met de stromingen van het leven mee te bewegen in plaats van ertegenin.',
        'De Water Resonance Experience begint voor zonsopgang, wanneer de oceaan het kalmst is en Aruba’s onderwaterwereld langzaam ontwaakt.',
        'Samen gaan we het water in voor een bewuste snorkelervaring, met de mogelijkheid om zeeschildpadden te ontmoeten en de stille schoonheid van de oceaan op haar rustigst te ervaren.',
        'Dit is geen sportactiviteit of excursie.',
        'Het is een uitnodiging om te vertragen, te ademen en je opnieuw te verbinden met het natuurlijke ritme van de zee.',
        'Terug in ons besloten tuinsanctuarium is er tijd om je op te frissen onder de buitendouches, gevolgd door een voedzaam ontbijt onder de banyanboom.',
        'De ervaring wordt afgesloten met een resonantie-klankreis die diepe ontspanning ondersteunt en lichaam en geest helpt de ochtend volledig te integreren.',
        commonReleaseRitual.nl,
        'Deze ervaring omvat een symbolisch waterloslaatritueel, gericht op stroming, emotioneel loslaten en vernieuwing.'
      ],
      included: ['Begeleide oceaanervaring', 'Snorkeluitrusting', 'Buitendouche in de tuin', 'Gezond ontbijt', 'Resonantie-klankreis', 'Tijd voor integratie en reflectie'],
      duration: 'Ongeveer 5 tot 5,5 uur.', groupSize: ['Minimaal 2 gasten', 'Maximaal 4 gasten'],
      note: 'Activiteiten in de oceaan zijn altijd afhankelijk van het weer en de omstandigheden op zee.'
    },
    {
      slug: 'air', name: 'Air Resonance Experience', tagline: 'Stijg. Adem. Verruim.',
      paragraphs: [
        'De Air Resonance Experience is geïnspireerd door perspectief, vrijheid en de moed om voorbij vermeende grenzen te bewegen.',
        'Voor zonsopgang reizen we naar de iconische Hooiberg voor een begeleide klim naar een van de indrukwekkendste uitkijkpunten van Aruba.',
        'Dit is geen race en geen fitnessuitdaging.',
        'De klim wordt een reis van adem, ritme en aanwezigheid, waarbij elke stap ruimte schept voor reflectie en een vernieuwd perspectief.',
        'Op de top ontvouwt het eiland zich onder je, terwijl de ochtendwind en het eerste zonlicht een krachtig gevoel van helderheid en mogelijkheden creëren.',
        'Terug in ons tuinsanctuarium is er tijd om je op te frissen onder de buitendouches en te genieten van een voedzaam ontbijt onder de banyanboom.',
        'De ervaring wordt afgesloten met een resonantie-klankreis die het lichaam helpt herstellen en de geest laat landen in de ruimte die de ochtend heeft gecreëerd.',
        commonReleaseRitual.nl,
        'Deze ervaring omvat een symbolisch adem- en luchtritueel, gericht op helderheid, perspectief en het scheppen van ruimte voor nieuwe mogelijkheden.'
      ],
      included: ['Begeleide zonsopgangklim op de Hooiberg', 'Vervoer vanaf onze locatie', 'Buitendouche in de tuin', 'Gezond ontbijt', 'Resonantie-klankreis', 'Tijd voor integratie en reflectie'],
      duration: 'Ongeveer 5,5 uur.', groupSize: ['Minimaal 2 gasten', 'Maximaal 4 gasten']
    },
    {
      slug: 'fire', name: 'Fire Resonance Experience', tagline: 'Ontsteek. Vier. Transformeer.',
      paragraphs: [
        'Vuur is het element van levenskracht, passie en transformatie.',
        'Terwijl de zon langzaam boven Aruba ondergaat, komen we samen om het leven, verbinding en de energie die ons vooruitbrengt te vieren.',
        'De Fire Resonance Experience nodigt je uit om aan het einde van de dag stil te staan en opnieuw contact te maken met wat je werkelijk inspireert en bezielt.',
        'Samen delen we een voedzame maaltijd, beleven we de veranderende kleuren van de Caribische hemel en laten we de overgang van dag naar avond ruimte maken voor reflectie en vernieuwing.',
        'Wanneer de duisternis valt, gaat de ervaring verder met een resonantie-klankreis onder de sterren, waar klank en stilte elkaar ontmoeten in een moment van diepe aanwezigheid.',
        'Deze ervaring draait niet alleen om vertragen.',
        'Het gaat om het opnieuw ontsteken van je innerlijke vonk.',
        commonReleaseRitual.nl,
        'Deze ervaring omvat een symbolisch vuurofferritueel, geïnspireerd door dankbaarheid, transformatie en bewust loslaten.'
      ],
      included: ['Zonsondergangervaring', 'Gedeelde maaltijd of voedzame hapjes', 'Resonantie-klankreis', 'Kleinschalige groepssetting', 'Avondintegratie onder de sterren', 'Tijd voor integratie en reflectie'],
      duration: 'Ongeveer 4 tot 5 uur.', groupSize: ['Minimaal 2 gasten', 'Maximaal 6 gasten']
    }
  ],
  es: [
    {
      slug: 'earth', name: 'Earth Resonance Experience', tagline: 'Enraíza. Desacelera. Reconecta.',
      paragraphs: [
        'La Earth Resonance Experience es una invitación a volver al momento presente a través de la naturaleza, el movimiento y la quietud.',
        'Comenzamos antes del amanecer con una visita al Laberinto de la Paz, cerca de la histórica Capilla de Alto Vista. Recorrer el laberinto descalzo y con intención se convierte en un viaje meditativo hacia el interior.',
        'Al avanzar hacia el centro, se te invita a soltar aquello que ya no te sirve.',
        'Al caminar de regreso hacia el exterior, vuelves a conectar conscientemente con las cualidades, intenciones y fortalezas que deseas llevar contigo.',
        'Desde el laberinto continuamos descalzos por el paisaje agreste de Aruba hacia la costa oriental de la isla, donde el viento, la tierra y el océano crean una profunda sensación de perspectiva y presencia.',
        'Al regresar a nuestro santuario privado en el jardín, hay tiempo para refrescarse en las duchas exteriores antes de disfrutar de un desayuno nutritivo bajo el árbol banyan.',
        'La experiencia concluye con un viaje sonoro de resonancia profundamente restaurador, diseñado para integrar la mañana y llevar el sistema nervioso a un estado de calma y equilibrio.',
        commonReleaseRitual.es,
        'La experiencia incluye el ritual simbólico del laberinto para el enraizamiento, la reflexión y la liberación.'
      ],
      included: ['Experiencia guiada en el Laberinto de la Paz', 'Caminata descalza en la naturaleza', 'Ducha exterior en el jardín', 'Desayuno saludable', 'Viaje sonoro de resonancia', 'Tiempo para la integración y la reflexión'],
      duration: 'Aproximadamente de 5,5 a 6 horas.', groupSize: ['Mínimo 2 participantes', 'Máximo 6 participantes']
    },
    {
      slug: 'water', name: 'Water Resonance Experience', tagline: 'Fluye. Entrégate. Restaura.',
      paragraphs: [
        'El agua nos enseña a confiar, adaptarnos y movernos con las corrientes de la vida en lugar de luchar contra ellas.',
        'La Water Resonance Experience comienza antes del amanecer, cuando el océano está más tranquilo y el mundo submarino de Aruba empieza a despertar.',
        'Entramos juntos al agua para vivir una experiencia consciente de snorkel, con la posibilidad de encontrar tortugas marinas y descubrir la belleza silenciosa del océano en sus horas más serenas.',
        'No es una actividad deportiva ni una excursión.',
        'Es una invitación a desacelerar, respirar y volver a conectar con el ritmo natural del mar.',
        'Al regresar a nuestro santuario privado en el jardín, hay tiempo para refrescarse en las duchas exteriores antes de disfrutar de un desayuno nutritivo bajo el árbol banyan.',
        'La experiencia concluye con un viaje sonoro de resonancia que favorece una relajación profunda y permite que cuerpo y mente integren plenamente la mañana.',
        commonReleaseRitual.es,
        'La experiencia incluye un ritual simbólico de liberación con agua, centrado en el fluir, la liberación emocional y la renovación.'
      ],
      included: ['Experiencia guiada en el océano', 'Equipo de snorkel', 'Ducha exterior en el jardín', 'Desayuno saludable', 'Viaje sonoro de resonancia', 'Tiempo para la integración y la reflexión'],
      duration: 'Aproximadamente de 5 a 5,5 horas.', groupSize: ['Mínimo 2 participantes', 'Máximo 4 participantes'],
      note: 'Las actividades en el océano dependen siempre del clima y de las condiciones del mar.'
    },
    {
      slug: 'air', name: 'Air Resonance Experience', tagline: 'Elévate. Respira. Expándete.',
      paragraphs: [
        'La Air Resonance Experience se inspira en la perspectiva, la libertad y el valor de ir más allá de los límites percibidos.',
        'Antes del amanecer viajamos al emblemático Hooiberg para realizar un ascenso guiado hacia uno de los miradores más impresionantes de Aruba.',
        'No es una carrera ni un desafío físico.',
        'El ascenso se convierte en un viaje de respiración, ritmo y presencia, donde cada paso abre espacio para la reflexión y una perspectiva renovada.',
        'En la cima, la isla se despliega bajo tus pies mientras el viento de la mañana y la primera luz crean una poderosa sensación de claridad y posibilidad.',
        'Al regresar a nuestro santuario en el jardín, hay tiempo para refrescarse en las duchas exteriores y disfrutar de un desayuno nutritivo bajo el árbol banyan.',
        'La experiencia concluye con un viaje sonoro de resonancia que permite al cuerpo recuperarse y a la mente asentarse en la amplitud creada durante la mañana.',
        commonReleaseRitual.es,
        'La experiencia incluye un ritual simbólico de respiración y aire, centrado en la claridad, la perspectiva y la creación de espacio para nuevas posibilidades.'
      ],
      included: ['Ascenso guiado al Hooiberg al amanecer', 'Transporte desde nuestra ubicación', 'Ducha exterior en el jardín', 'Desayuno saludable', 'Viaje sonoro de resonancia', 'Tiempo para la integración y la reflexión'],
      duration: 'Aproximadamente 5,5 horas.', groupSize: ['Mínimo 2 participantes', 'Máximo 4 participantes']
    },
    {
      slug: 'fire', name: 'Fire Resonance Experience', tagline: 'Enciende. Celebra. Transforma.',
      paragraphs: [
        'El fuego es el elemento de la vitalidad, la pasión y la transformación.',
        'Mientras el sol se pone lentamente sobre Aruba, nos reunimos para celebrar la vida, la conexión y la energía que nos impulsa hacia adelante.',
        'La Fire Resonance Experience te invita a hacer una pausa al final del día y reconectar con aquello que verdaderamente te inspira y te da energía.',
        'Compartimos una comida nutritiva, contemplamos los colores cambiantes del cielo caribeño y permitimos que la transición del día a la noche abra espacio para la reflexión y la renovación.',
        'Al caer la noche, la experiencia continúa con un viaje sonoro de resonancia bajo las estrellas, donde el sonido y el silencio se encuentran en un momento de profunda presencia.',
        'Esta experiencia no consiste únicamente en desacelerar.',
        'Se trata de volver a encender tu chispa interior.',
        commonReleaseRitual.es,
        'La experiencia incluye un ritual simbólico de ofrenda al fuego, inspirado en la gratitud, la transformación y la liberación consciente.'
      ],
      included: ['Experiencia al atardecer', 'Comida compartida o bocados nutritivos', 'Viaje sonoro de resonancia', 'Grupo reducido', 'Integración nocturna bajo las estrellas', 'Tiempo para la integración y la reflexión'],
      duration: 'Aproximadamente de 4 a 5 horas.', groupSize: ['Mínimo 2 participantes', 'Máximo 6 participantes']
    }
  ]
}

export const getElementalExperiences = language => {
  const selected = translations[language] || translations.en
  return selected.map(experience => ({ ...experience, ...media[experience.slug] }))
}

export { commonReleaseRitual }
export default getElementalExperiences('en')
