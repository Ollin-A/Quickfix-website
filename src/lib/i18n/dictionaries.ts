import { cookies } from "next/headers";

export type Dictionary = typeof en;

const en = {
  global: {
    loading: "Loading...",
    error: "An error occurred",
  },
  navbar: {
    home: "Home",
    about: "About Us",
    services: "Services",
    remodeling: "Complete Remodeling",
    maintenance: "Home Maintenance",
    specialized: "Specialized/Emergency",
    portfolio: "Portfolio",
    maintenancePlan: "Maintenance Plan",
    getEstimate: "Get a Free Estimate",
    callUs: "Call (971) 267-7905",
  },
  footer: {
    brandDesc: "Oregon’s trusted experts for complete home renovations, specialized restorations, and premium maintenance. The agility of a handyman, the power of a General Contractor.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    serving: "Serving Oregon",
    serviceAreas: [
      "McMinnville",
      "Salem",
      "Portland Metro",
      "Eugene",
      "Newberg",
      "Beaverton"
    ],
    rights: "All rights reserved.",
    builtBy: "Built by OLLIN",
  },
  hero: {
    headlineLine1: "More Than Just a Quick Fix.",
    headlineLine2: "We Build Your Vision.",
    subheadline: "Oregon’s trusted experts for complete home renovations, specialized restorations, and premium maintenance.",
    getEstimate: "Get a Free Estimate",
    viewTransformations: "View Our Transformations",
    scroll: "Scroll"
  },
  evolution: {
    badge: "Our Story",
    headlineLine1: "The Name You Know.",
    headlineLine2: "The Expertise You Didn't Expect.",
    p1: "Seven years ago, we started with a simple promise: reliable, honest, and fast home repairs. We became the \"Quick Fix\" you could count on.",
    p2_1: "Today, ",
    p2_bold: "Quick Fix Handyman",
    p2_2: " has evolved into a full-scale general contracting powerhouse. We kept the name because it represents our roots and our speed, but do not let it fool you. From minor tweaks to complete kitchen remodels and bio-hazard restorations, we bring the heavy-duty capabilities of a construction firm with the agility of a neighborhood handyman.",
    p3: "You get the muscle of a general contractor, without the red tape."
  },
  trustRibbon: [
    { text: "Fully Licensed, Bonded & Insured", mobileText: "Licensed & Insured", sub: "CCB# 229622" },
    { text: "7+ Years Building Oregon", mobileText: "7+ Years in Oregon", sub: "Locally Owned" },
    { text: "Service for All", mobileText: "Service for All", sub: "Respectful & Professional" },
    { text: "Top-Rated Service", mobileText: "Top Rated", sub: "Google & Yelp" }
  ],
  serviceBuckets: {
    headline: "What We Build & Fix",
    subheadline: "From the foundation to the roof, we have the specialized teams to handle every aspect of your home.",
    items: [
      {
        title: "Complete Remodeling",
        description: "Kitchens, baths, drywall, flooring, and major structural changes. We transform spaces.",
      },
      {
        title: "Essential Maintenance",
        description: "Plumbing fixes, electrical updates, painting, and preventive care to keep your home healthy.",
      },
      {
        title: "Specialized & Emergency",
        description: "Bio-hazard cleanup, water damage restoration, and 24/7 emergency response.",
      }
    ],
    learnMore: "Learn More"
  },
  beforeAfter: {
    badge: "Real Results",
    headline: "See The Difference",
    subheadline: "Drag the slider to see how we transform dated spaces into modern masterpieces.",
    beforeLabel: "Before",
    afterLabel: "After"
  },
  reviews: {
    headlineLine1: "Don’t Take Our Word For It. ",
    headlineLine2: "Ask Your Neighbors.",
    topRated: "Top-Rated on Google & Yelp"
  },
  maintenanceTeaser: {
    badge: "Most Popular Service",
    headlineLine1: "Protect Your Biggest Investment. ",
    headlineLine2: "On Autopilot.",
    subheadline: "Stop waiting for things to break. Our proactive maintenance plan catches small issues before they become $10,000 disasters.",
    features: [
      "Comprehensive Exterior Inspections (2 Scheduled/mo)",
      "Gutter Cleaning & Roof Moss Treatment",
      "Fast Response for Critical Issues",
      "Scheduled Pressure Washing & Paint Touch-ups"
    ],
    buttonText: "Secure Your Plan - $300/mo",
    cardTitle: "Platinum Care",
    cardSub: "Total Home Health",
    cardPrice: "$300",
    cardPer: "/mo",
    cardQuote: "\"It's like health insurance for your house, but with actual service.\""
  },
  finalCTA: {
    headline: "Ready to start your next project?",
    subheadline: "Whether it’s a leaky faucet or a full remodel, our team in McMinnville is ready to build your vision.",
    getEstimate: "Get a Free Estimate",
    callUs: "Call (971) 267-7905"
  },
  contactForm: {
    validation: {
      nameRequired: "Name is required",
      emailInvalid: "Invalid email address",
      phoneRequired: "Phone number is required",
      detailsRequired: "Please provide more details about your project",
      budgetRequired: "Please select an estimated budget",
      urgencyRequired: "Please select how urgent this is"
    },
    alerts: {
      uploadError: "Failed to upload files. Please try again.",
      submitError: "Something went wrong. Please try again."
    },
    header: {
      title: "Start Your Project",
      subtitle: "Tell us about your vision"
    },
    labels: {
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      city: "City (Optional)",
      serviceType: "What do you need help with?",
      budget: "Estimated Budget",
      urgency: "How soon do you need this?",
      details: "Project Details",
      photos: "Add Photos (Optional)"
    },
    placeholders: {
      name: "John Doe",
      email: "john@example.com",
      phone: "(503) 555-0123",
      city: "McMinnville",
      budget: "Select a range",
      urgency: "Select timeframe",
      details: "Please describe what needs to be done..."
    },
    serviceOptions: {
      handyman: { title: "General Handyman", desc: "Repairs, installs, punch lists" },
      remodel: { title: "Full Renovation", desc: "Kitchens, baths, additions" },
      emergency: { title: "Urgent / Emergency", desc: "Water damage, Bio-hazard, ASAP" },
      maintenance: { title: "Maintenance Plan", desc: "$300/mo Platinum Care" }
    },
    budgetOptions: {
      under5k: "Under $5k",
      from5kTo15k: "$5k - $15k",
      from15kTo30k: "$15k - $30k",
      over30k: "$30k+"
    },
    urgencyOptions: {
      urgent: "Within 24 Hours (Emergency)",
      thisWeek: "This Week",
      flexible: "Flexible"
    },
    upload: {
      uploading: "Uploading files...",
      uploadedCount: "Images Uploaded",
      clickMore: "Click to add more",
      chooseFiles: "Choose Files",
      imageOnly: "Image files only"
    },
    submit: {
      sending: "Sending...",
      button: "Submit Request"
    },
    success: {
      title: "Request Received!",
      message: "Thank you for contacting Quick Fix Handyman. Our team will review your project details and get back to you within 24 hours.",
      newRequest: "Start New Request"
    }
  },
  contactPage: {
    metadata: {
      title: "Contact Us | Quick Fix Handyman",
      description: "Get a free estimate for your home renovation or repair project in McMinnville and Portland Metro. Fill out our detailed contact form."
    },
    header: {
      title: "Let’s Build Something Great Together.",
      subtitle: "Ready to start your next project? Fill out the form below with detail, and our team will get back to you within 24 hours."
    },
    infoBoxes: {
      title: "Contact Info",
      phone: "Phone",
      email: "Email",
      office: "Office Location",
      serviceArea: "Service Area: Oregon",
      hours: "Hours",
      hoursValue: "Mon - Fri: 8am - 4pm"
    }
  },
  maintenancePage: {
    metadata: {
      title: "Platinum Maintenance Plan | Home Health Insurance",
      description: "Join our $300/mo proactive home maintenance plan. Inspections, gutter cleaning, and priority 24/7 emergency response included."
    },
    hero: {
      badge: "Platinum Care Plan",
      headlineLine1: "Total Peace of Mind.",
      headlineLine2: "On Autopilot.",
      subheadline: "Keep your home in perfect condition year-round. We catch the small issues before they become $10,000 disasters.",
      button: "Secure Your Plan - $300/mo"
    },
    comparison: {
      oldWay: "The Old Way",
      old1: "Waiting for things to break",
      old2: "Scrambling to find a contractor",
      old3: "Paying premium emergency rates",
      old4: "Unpredictable repair bills",
      newWay: "The Quick Fix Way"
    },
    features: [
      "Comprehensive Exterior Inspections (2 Scheduled/mo)",
      "Gutter Cleaning & Roof Moss Treatment",
      "Fast Response for Critical Issues",
      "Scheduled Pressure Washing & Paint Touch-ups",
      "Smoke Detector & Filter Checks"
    ],
    roi: {
      quote: "\"Think of it as health insurance for your house.\"",
      p1: "Water damage is the #1 cause of home insurance claims in Oregon. By keeping gutters clean and roofs moss-free, we save our clients an average of",
      p2: " $4,500 per year ",
      p3: "in deferred maintenance costs."
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Is there a long-term contract?",
          answer: "No. Our plans are month-to-month. You can pause or cancel at any time with 30 days notice."
        },
        {
          question: "Does the $300/mo cover materials?",
          answer: "The fee covers all labor for scheduled preventive maintenance. Materials (like paint, filters, or replacement parts) are billed at cost with no markup."
        },
        {
          question: "Is this good for rental properties?",
          answer: "Absolutely. We work with many landlords in McMinnville to keep their investments in top shape without them lifting a finger."
        }
      ]
    },
    cta: {
      title: "Ready to protect your home?",
      subtitle: "Spots are limited to ensure quality service for every member.",
      button: "Join the Maintenance Plan"
    }
  },
  portfolioPage: {
    metadata: {
      title: "Our Portfolio | Quick Fix Handyman & Renovations",
      description: "Browse our gallery of recent kitchen remodels, bathroom renovations, and exterior makeovers in McMinnville and Portland."
    },
    header: {
      titleLine1: "Craftsmanship You Can See.",
      titleLine2: "Quality You Can Trust.",
      subtitle: "Explore our recent transformations across Oregon. From kitchen overhauls to emergency restorations, our work speaks for itself."
    },
    filters: {
      all: "All Projects",
      kitchenBath: "Kitchen & Bath",
      remodel: "Full Remodels",
      exterior: "Exterior & Decks",
      repairs: "Precision Repairs"
    },
    modal: {
      challenge: "The Challenge",
      challengeFallback: "Detailed case study coming soon.",
      solution: "The Solution",
      solutionFallback: "Detailed solution description coming soon.",
      beforeLabel: "Before",
      afterLabel: "After"
    },
    projects: {
      "1": {
        title: "Modern Farmhouse Kitchen",
        location: "McMinnville, OR",
        completion: "6 Weeks",
        challenge: "The original kitchen was dark, cramped, and separated from the living area. The homeowners wanted an open concept with max light.",
        solution: "We removed the load-bearing wall, installed a steel beam, and reconfigured the layout to include a 10ft island and custom shaker cabinets."
      },
      "2": {
        title: "Victorian Restoration",
        location: "Salem, OR",
        completion: "3 Months",
        challenge: "Water damage had compromised the original 1920s flooring and trim.",
        solution: "We milled custom trim to match the era and restored the hardwood floors to their original glory."
      },
      "3": {
        title: "Luxury Master Bath",
        location: "Lake Oswego, OR",
        completion: "4 Weeks",
        challenge: "Outdated 90s gold fixtures and a leaking jacuzzi tub.",
        solution: "Replaced with a freestanding soaking tub, frameless glass shower, and heated marble floors."
      },
      "4": {
        title: "Backyard Oasis",
        location: "Eugene, OR",
        completion: "2 Weeks",
        challenge: "Unused muddy backyard slope.",
        solution: "Terraced the hill with retaining walls and built a 500sqft cedar deck with integrated lighting."
      },
      "5": {
        title: "Commercial Office Reno",
        location: "Portland, OR",
        completion: "5 Weeks",
        challenge: "",
        solution: ""
      },
      "6": {
        title: "Emergency Roof Repair",
        location: "Newberg, OR",
        completion: "2 Days",
        challenge: "",
        solution: ""
      }
    }
  },
  portfolioSoon: {
    metadata: {
      title: "Portfolio Coming Soon | Quick Fix Handyman",
      description: "We are currently building our portfolio. Check out our latest work on social media in the meantime."
    },
    title: "We’re building our portfolio.",
    subtitle1: "In the meantime, you can check our latest work on social media.",
    subtitle2: "New project photos coming soon.",
    facebook: "Facebook",
    instagram: "Instagram",
    cta: "Get a Free Estimate"
  },
  servicesHandyman: {
    metadata: {
      title: "Professional Handyman Services | Quick Fix McMinnville",
      description: "Fast, reliable home repairs. Plumbing leaks, electrical fixtures, painting, and furniture assembly. Trusted local experts."
    },
    hero: {
      badge: "Professional Handyman Services",
      headlineLine1: "Small Jobs.",
      headlineLine2: "Big Improvements.",
      subheadline: "The honey-do list ends here. Trusted, background-checked professionals for all your home repair needs.",
      button: "Book a Handyman"
    },
    services: [
      { title: "Plumbing Fixes", description: "Leaks • Faucets • Toilets" },
      { title: "Electrical Swaps", description: "Fixtures • Switches • Outlets" },
      { title: "Painting Touch-Ups", description: "Walls • Trim • Patches" },
      { title: "Doors & Windows", description: "Adjustments • Locks • Seals" },
      { title: "Deck & Fence Repairs", description: "Loose boards • Gates • Posts" },
      { title: "Mounting & Assembly", description: "TVs • Shelves • Furniture" }
    ],
    callout: {
      title: "Need something else?",
      text: "We handle almost everything. Just ask.",
      button: "Inquire Now"
    },
    finalCta: {
      title: "Get it fixed this week.",
      button: "Schedule Service"
    }
  },
  servicesRemodeling: {
    metadata: {
      title: "Luxury Remodeling & Construction | Quick Fix Handyman",
      description: "Full service kitchen and bath remodeling, flooring, drywall, and custom construction in McMinnville and Oregon."
    },
    hero: {
      badge: "Licensed General Contractor",
      headlineLine1: "Elevated Renovations.",
      headlineLine2: "Masterfully Executed.",
      subheadline: "From concept to completion, we transform kitchens, bathrooms, and living spaces with precision craftsmanship and zero shortcuts.",
      button: "Start Your Renovation"
    },
    services: [
      "Full Kitchen Renovations (Cabinets, Countertops, Islands)",
      "Bathroom Remodels (Walk-in Showers, Heated Floors)",
      "Engineered Hardwood & Tile Flooring Installation",
      "Drywall Installation, Texturing & Repair",
      "Space Planning & Structural Modifications",
      "Custom Trim, Baseboards & Crown Molding"
    ],
    section: {
      title: "We Don't Just Fix. We Build.",
      text: "Our remodeling division is built for homeowners who demand excellence. We handle the entire scope—demolition, framing, electrical, plumbing, and fine finish work—so you don't have to juggle five different contractors."
    },
    footerCta: {
      title: "Ready to upgrade your home?",
      subtitle: "Schedule a free consultation and estimate.",
      button: "Get a Quote"
    }
  },
  servicesSpecialized: {
    metadata: {
      title: "Emergency Restoration & Specialized Services | Quick Fix",
      description: "24/7 Water damage restoration, mold remediation, bio-hazard cleanup, and storm damage response in Oregon."
    },
    hero: {
      badge: "Emergency-Ready Help",
      headlineLine1: "When Disaster Strikes.",
      headlineLine2: "We Respond.",
      subheadline: "Specialized cleanup and restoration services for critical situations. Fast, discreet, and certified.",
      button: "Call for Immediate Help"
    },
    services: [
      "Water Damage Restoration & Drying",
      "Mold Remediation & Prevention",
      "Bio-Hazard Cleaning & Sanitization",
      "Storm Damage Cleanup",
      "Security Board-ups",
      "Hoarding Cleanup Services"
    ],
    section: {
      title: "Certified & Insured Protection",
      text: "We follow strict OSHA and IICRC protocols to ensure your property is safe, sanitized, and restored to its pre-loss condition. We work directly with your insurance to streamline the claim process."
    },
    cta: {
      title: "Don't wait for the damage to spread.",
      button: "Contact Us Immediately"
    }
  },
  aboutPage: {
    metadata: {
      title: "About Us | Quick Fix Handyman & Construction",
      description: "From rapid-response repairs to premier general contracting. Rooted in McMinnville, building trust across Oregon. Licensed, Bonded, & Insured."
    },
    credentials: [
      "Fully Licensed, Bonded & Insured",
      "OSHA Compliant Safety Protocols",
      "CCB #229622 (Oregon Construction Contractors Board)",
      "Background-Checked Team Members"
    ],
    hero: {
      eyebrow: "Our Story",
      headlineLine1: "Rooted in McMinnville.",
      headlineLine2: "Building Oregon."
    },
    evolution: {
      title: "More Than Just a \"Quick Fix\"",
      p1: "Seven years ago, we started with a simple truck and a promise: to show up on time and do the job right. We noticed a gap in the market—homeowners were tired of contractors who didn't communicate, didn't clean up, and didn't care.",
      p2: "What began as a rapid-response handyman service has evolved into a premier General Contracting firm. Today, \"Quick Fix\" doesn't mean cutting corners; it means **efficiency**. It means we have the systems, the team, and the expertise to handle everything from emergency water damage to full-scale kitchen remodels.",
      quote: "\"We build trust first. The renovation is just the proof.\""
    },
    trust: {
      title: "Built on a Foundation of Safety & Compliance",
      text: "Your home is your biggest investment. We don't take that lightly. We operate with the highest standards of safety, insurance, and licensing."
    },
    cta: {
      title: "Ready to work with the best?",
      button1: "View Our Work",
      button2: "Start Your Project"
    }
  },
  notFound: {
    title: "404 - Page Not Found",
    message: "Could not find requested resource",
    button: "Return Home"
  }
};

const es: Dictionary = {
  global: {
    loading: "Cargando...",
    error: "Ocurrió un error",
  },
  navbar: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    remodeling: "Remodelación Completa",
    maintenance: "Mantenimiento del Hogar",
    specialized: "Servicios Especializados / Urgencias",
    portfolio: "Proyectos Realizados",
    maintenancePlan: "Plan de Mantenimiento",
    getEstimate: "Solicita una cotización gratis",
    callUs: "Llama al (971) 267-7905",
  },
  footer: {
    brandDesc: "Los expertos de confianza en Oregon para remodelaciones completas, restauraciones especializadas y mantenimiento preventivo. La agilidad de un reparador con la potencia de un Contratista General.",
    quickLinks: "Enlaces Rápidos",
    contactUs: "Contáctanos",
    serving: "Sirviendo a Oregon",
    serviceAreas: [
      "McMinnville",
      "Salem",
      "Área Metropolitana de Portland",
      "Eugene",
      "Newberg",
      "Beaverton"
    ],
    rights: "Todos los derechos reservados.",
    builtBy: "Desarrollado por OLLIN",
  },
  hero: {
    headlineLine1: "Mucho más que una reparación.",
    headlineLine2: "Construimos tu visión.",
    subheadline: "Los expertos de confianza en Oregon para remodelaciones completas, restauraciones especializadas y mantenimiento preventivo.",
    getEstimate: "Solicita una cotización gratis",
    viewTransformations: "Ver Proyectos Realizados",
    scroll: "Bajar"
  },
  evolution: {
    badge: "Nuestra Historia",
    headlineLine1: "El Nombre Que Conoces.",
    headlineLine2: "La Experiencia Que No Esperabas.",
    p1: "Hace siete años, comenzamos con una promesa simple: reparaciones del hogar rápidas, confiables y honestas. Nos convertimos en la solución en la que podías confiar.",
    p2_1: "Hoy, ",
    p2_bold: "Quick Fix Handyman",
    p2_2: " ha evolucionado hasta convertirse en una potente empresa de contratistas generales. Mantuvimos el nombre porque representa nuestras raíces y nuestra rapidez, pero no te dejes engañar. Desde pequeños ajustes hasta remodelaciones completas de cocinas y restauraciones de riesgo biológico, aportamos las capacidades pesadas de una empresa de construcción con la agilidad de un especialista del hogar.",
    p3: "Obtienes la fuerza de un contratista general, sin la burocracia."
  },
  trustRibbon: [
    { text: "Con Licencia y Seguro Completo", mobileText: "Con Licencia y Seguro", sub: "CCB# 229622" },
    { text: "Más de 7 Años Construyendo en Oregon", mobileText: "7+ Años en Oregon", sub: "Empresa Local" },
    { text: "Servicio para Todos", mobileText: "Servicios Inclusivos", sub: "Respeto y Profesionalismo" },
    { text: "Servicio de Primera Calidad", mobileText: "Alta Calidad", sub: "Google y Yelp" }
  ],
  serviceBuckets: {
    headline: "Lo Que Construimos y Reparamos",
    subheadline: "Desde los cimientos hasta el techo, contamos con equipos especializados para atender cada aspecto de tu hogar.",
    items: [
      {
        title: "Remodelación Completa",
        description: "Cocinas, baños, paredes, pisos y cambios estructurales mayores. Transformamos espacios.",
      },
      {
        title: "Mantenimiento Esencial",
        description: "Reparaciones de plomería, actualizaciones eléctricas, pintura y cuidado preventivo para mantener tu hogar en óptimas condiciones.",
      },
      {
        title: "Especializados y Emergencias",
        description: "Limpieza de riesgo biológico, restauración por daños de agua y respuesta a urgencias 24/7.",
      }
    ],
    learnMore: "Más Información"
  },
  beforeAfter: {
    badge: "Resultados Reales",
    headline: "Mira la Diferencia",
    subheadline: "Arrastra el deslizador para ver cómo transformamos espacios deteriorados en increíbles obras maestras.",
    beforeLabel: "Antes",
    afterLabel: "Después"
  },
  reviews: {
    headlineLine1: "No te quedes solo con nuestras palabras. ",
    headlineLine2: "Pregúntale a tus vecinos.",
    topRated: "Altamente Calificado en Google y Yelp"
  },
  maintenanceTeaser: {
    badge: "Servicio Más Popular",
    headlineLine1: "Protege tu Mayor Inversión. ",
    headlineLine2: "En Piloto Automático.",
    subheadline: "Deja de esperar a que las cosas se rompan. Nuestro plan de mantenimiento preventivo detecta pequeños problemas antes de que se conviertan en desastres de $10,000.",
    features: [
      "Inspecciones Exteriores Completas (2 al mes)",
      "Limpieza de Canaletas y Tratamiento de Musgo",
      "Respuesta Rápida para Problemas Críticos",
      "Lavado a Presión Programado y Retoques de Pintura"
    ],
    buttonText: "Asegura Tu Plan - $300/mes",
    cardTitle: "Cuidado Platino",
    cardSub: "Salud Total del Hogar",
    cardPrice: "$300",
    cardPer: "/mes",
    cardQuote: "\"Es como un seguro médico para tu casa, pero con un servicio de verdad.\""
  },
  finalCTA: {
    headline: "¿Listo para comenzar tu próximo proyecto?",
    subheadline: "Ya sea una tubería con fugas o una remodelación completa, nuestro equipo en McMinnville está listo para construir tu visión.",
    getEstimate: "Solicita una cotización gratis",
    callUs: "Llama al (971) 267-7905"
  },
  contactForm: {
    validation: {
      nameRequired: "El nombre es obligatorio",
      emailInvalid: "Dirección de correo electrónico no válida",
      phoneRequired: "El número de teléfono es obligatorio",
      detailsRequired: "Por favor, proporciona más detalles sobre tu proyecto",
      budgetRequired: "Por favor, selecciona un presupuesto estimado",
      urgencyRequired: "Por favor, selecciona qué tan urgente es esto"
    },
    alerts: {
      uploadError: "Error al subir archivos. Por favor, inténtalo de nuevo.",
      submitError: "Algo salió mal. Por favor, inténtalo de nuevo."
    },
    header: {
      title: "Comienza Tu Proyecto",
      subtitle: "Cuéntanos sobre tu visión"
    },
    labels: {
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      city: "Ciudad (Opcional)",
      serviceType: "¿En qué podemos ayudarte?",
      budget: "Presupuesto Estimado",
      urgency: "¿Qué tan pronto necesitas esto?",
      details: "Detalles del Proyecto",
      photos: "Añadir Fotos (Opcional)"
    },
    placeholders: {
      name: "Juan Pérez",
      email: "juan@ejemplo.com",
      phone: "(503) 555-0123",
      city: "McMinnville",
      budget: "Selecciona un rango",
      urgency: "Selecciona el plazo",
      details: "Por favor, describe lo que necesitas..."
    },
    serviceOptions: {
      handyman: { title: "Handyman General", desc: "Reparaciones, instalaciones, tareas pequeñas" },
      remodel: { title: "Renovación Completa", desc: "Cocinas, baños, adiciones" },
      emergency: { title: "Urgencia / Emergencia", desc: "Daños por agua, Riesgo biológico" },
      maintenance: { title: "Plan de Mantenimiento", desc: "$300/mes Cuidado Platino" }
    },
    budgetOptions: {
      under5k: "Menos de $5k",
      from5kTo15k: "$5k - $15k",
      from15kTo30k: "$15k - $30k",
      over30k: "$30k+"
    },
    urgencyOptions: {
      urgent: "Dentro de las 24 Horas (Emergencia)",
      thisWeek: "Esta Semana",
      flexible: "Flexible"
    },
    upload: {
      uploading: "Subiendo archivos...",
      uploadedCount: "Imágenes Subidas",
      clickMore: "Haz clic para añadir más",
      chooseFiles: "Elegir Archivos",
      imageOnly: "Solo archivos de imagen"
    },
    submit: {
      sending: "Enviando...",
      button: "Enviar Solicitud"
    },
    success: {
      title: "¡Solicitud Recibida!",
      message: "Gracias por contactar a Quick Fix Handyman. Nuestro equipo revisará los detalles de tu proyecto y te responderá dentro de 24 horas.",
      newRequest: "Iniciar Nueva Solicitud"
    }
  },
  contactPage: {
    metadata: {
      title: "Contáctanos | Quick Fix Handyman",
      description: "Obtén una estimación gratuita para tu proyecto de remodelación o reparación en McMinnville y el área metropolitana de Portland. Completa nuestro formulario detallado."
    },
    header: {
      title: "Construyamos Algo Increíble Juntos.",
      subtitle: "¿Listo para comenzar tu próximo proyecto? Completa el formulario a continuación con detalles, y nuestro equipo te responderá dentro de 24 horas."
    },
    infoBoxes: {
      title: "Información de Contacto",
      phone: "Teléfono",
      email: "Correo Electrónico",
      office: "Ubicación de la Oficina",
      serviceArea: "Área de Servicio: Oregon",
      hours: "Horario",
      hoursValue: "Lun - Vie: 8am - 4pm"
    }
  },
  maintenancePage: {
    metadata: {
      title: "Plan de Mantenimiento Platino | Seguro de Salud para el Hogar",
      description: "Únete a nuestro plan de mantenimiento preventivo de $300/mes. Inspecciones, limpieza de canaletas y respuesta prioritaria ante urgencias 24/7."
    },
    hero: {
      badge: "Plan de Cuidado Platino",
      headlineLine1: "Tranquilidad Total.",
      headlineLine2: "En Piloto Automático.",
      subheadline: "Mantén tu hogar en perfectas condiciones todo el año. Detectamos problemas pequeños antes de que se conviertan en desastres de $10,000.",
      button: "Asegura Tu Plan - $300/mes"
    },
    comparison: {
      oldWay: "La Forma Tradicional",
      old1: "Esperar a que las cosas se rompan",
      old2: "Correr para encontrar un contratista",
      old3: "Pagar tarifas premium de emergencia",
      old4: "Facturas de reparación impredecibles",
      newWay: "El Estilo Quick Fix"
    },
    features: [
      "Inspecciones Exteriores Completas (2 al mes)",
      "Limpieza de Canaletas y Tratamiento de Musgo",
      "Respuesta Rápida para Problemas Críticos",
      "Lavado a Presión Programado y Retoques de Pintura",
      "Revisión de Detectores de Humo y Filtros"
    ],
    roi: {
      quote: "\"Piensa en ello como un seguro médico para tu casa.\"",
      p1: "El daño por agua es la principal causa de reclamos de seguros de hogar en Oregon. Al mantener las canaletas limpias y los techos sin musgo, ahorramos a nuestros clientes un promedio de",
      p2: " $4,500 al año ",
      p3: "en costos de mantenimiento diferido."
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        {
          question: "¿Existe un contrato a largo plazo?",
          answer: "No. Nuestros planes son de mes a mes. Puedes pausar o cancelar en cualquier momento con un aviso de 30 días."
        },
        {
          question: "¿Los $300/mes cubren materiales?",
          answer: "La tarifa cubre toda la mano de obra para el mantenimiento preventivo programado. Los materiales (como pintura, filtros o piezas de repuesto) se facturan a costo de tienda sin recargos."
        },
        {
          question: "¿Es bueno para propiedades de alquiler?",
          answer: "Absolutamente. Trabajamos con muchos propietarios en McMinnville para mantener sus inversiones en perfecto estado sin que tengan que mover un dedo."
        }
      ]
    },
    cta: {
      title: "¿Listo para proteger tu hogar?",
      subtitle: "Los lugares son limitados para asegurar un servicio de calidad a cada miembro.",
      button: "Únete al Plan de Mantenimiento"
    }
  },
  portfolioPage: {
    metadata: {
      title: "Nuestro Portafolio | Quick Fix Handyman",
      description: "Explora nuestra galería de remodelaciones recientes de cocinas, baños y exteriores en McMinnville y Portland."
    },
    header: {
      titleLine1: "Artesanía que Puedes Ver.",
      titleLine2: "Calidad en la que Puedes Confiar.",
      subtitle: "Explora nuestras transformaciones recientes en todo Oregon. Desde remodelaciones de cocinas hasta restauraciones de emergencia, nuestro trabajo habla por sí mismo."
    },
    filters: {
      all: "Todos los Proyectos",
      kitchenBath: "Cocina y Baño",
      remodel: "Remodelaciones Completas",
      exterior: "Exteriores y Terrazas",
      repairs: "Reparaciones de Precisión"
    },
    modal: {
      challenge: "El Desafío",
      challengeFallback: "Estudio de caso detallado próximamente.",
      solution: "La Solución",
      solutionFallback: "Descripción detallada de la solución próximamente.",
      beforeLabel: "Antes",
      afterLabel: "Después"
    },
    projects: {
      "1": {
        title: "Cocina Moderna Farmhouse",
        location: "McMinnville, OR",
        completion: "6 Semanas",
        challenge: "La cocina original era oscura, apretada y separada de la sala de estar. Los propietarios querían un concepto abierto con máxima luz.",
        solution: "Quitamos la pared de carga, instalamos una viga de acero y reconfiguramos el diseño para incluir una isla de 10 pies y gabinetes shaker personalizados."
      },
      "2": {
        title: "Restauración Victoriana",
        location: "Salem, OR",
        completion: "3 Meses",
        challenge: "El daño por agua había comprometido el piso y las molduras originales de la década de 1920.",
        solution: "Fabricamos molduras a medida para que coincidieran con la época y restauramos los pisos de madera a su gloria original."
      },
      "3": {
        title: "Baño Principal de Lujo",
        location: "Lake Oswego, OR",
        completion: "4 Semanas",
        challenge: "Accesorios dorados de los 90 y una bañera jacuzzi con fugas.",
        solution: "Reemplazado por una bañera profunda independiente, una ducha de vidrio sin marco y pisos de mármol con calefacción."
      },
      "4": {
        title: "Oasis en el Patio Trasero",
        location: "Eugene, OR",
        completion: "2 Semanas",
        challenge: "Pendiente de patio trasero con lodo sin usar.",
        solution: "Hicimos terrazas en la colina con muros de contención y construimos una plataforma de cedro de 500 pies cuadrados con iluminación integrada."
      },
      "5": {
        title: "Renovación de Oficina Comercial",
        location: "Portland, OR",
        completion: "5 Semanas",
        challenge: "",
        solution: ""
      },
      "6": {
        title: "Reparación de Techo de Emergencia",
        location: "Newberg, OR",
        completion: "2 Días",
        challenge: "",
        solution: ""
      }
    }
  },
  portfolioSoon: {
    metadata: {
      title: "Portafolio Próximamente | Quick Fix Handyman",
      description: "Actualmente estamos construyendo nuestro portafolio. Mientras tanto, echa un vistazo a nuestro trabajo en las redes sociales."
    },
    title: "Estamos construyendo nuestro portafolio.",
    subtitle1: "Mientras tanto, puedes echar un vistazo a nuestro trabajo más reciente en las redes sociales.",
    subtitle2: "Nuevas fotos de proyectos próximamente.",
    facebook: "Facebook",
    instagram: "Instagram",
    cta: "Solicita una Cotización"
  },
  servicesHandyman: {
    metadata: {
      title: "Servicios Profesionales de Handyman | Quick Fix McMinnville",
      description: "Reparaciones rápidas y confiables. Fugas de plomería, instalaciones eléctricas, pintura y ensamblaje. Expertos locales en los que puedes confiar."
    },
    hero: {
      badge: "Servicios Profesionales de Handyman",
      headlineLine1: "Trabajos Pequeños.",
      headlineLine2: "Grandes Mejoras.",
      subheadline: "La lista de tareas pendientes termina aquí. Profesionales confiables y verificados para todas tus necesidades de reparación en el hogar.",
      button: "Reserva un Handyman"
    },
    services: [
      { title: "Reparaciones de Plomería", description: "Fugas • Grifos • Inodoros" },
      { title: "Cambios Eléctricos", description: "Luminarias • Interruptores • Enchufes" },
      { title: "Retoques de Pintura", description: "Paredes • Molduras • Parches" },
      { title: "Puertas y Ventanas", description: "Ajustes • Cerraduras • Sellos" },
      { title: "Cercas y Terrazas", description: "Tablas sueltas • Puertas • Postes" },
      { title: "Montaje y Ensamblaje", description: "TVs • Estantes • Muebles" }
    ],
    callout: {
      title: "¿Necesitas algo más?",
      text: "Hacemos casi cualquier cosa. Solo pregunta.",
      button: "Consultar Ahora"
    },
    finalCta: {
      title: "Arréglelo esta semana.",
      button: "Programar Servicio"
    }
  },
  servicesRemodeling: {
    metadata: {
      title: "Remodelación de Lujo y Construcción | Quick Fix Handyman",
      description: "Remodelación completa de cocinas y baños, pisos, paneles de yeso y construcción a medida en McMinnville y Oregon."
    },
    hero: {
      badge: "Contratista General Licenciado",
      headlineLine1: "Renovaciones Elevadas.",
      headlineLine2: "Magistralmente Ejecutadas.",
      subheadline: "Del concepto a la finalización, transformamos cocinas, baños y espacios de vida con artesanía de precisión y sin tomar atajos.",
      button: "Comienza Tu Renovación"
    },
    services: [
      "Renovaciones Completas de Cocina (Gabinetes, Encimeras, Islas)",
      "Remodelación de Baños (Duchas a Ras de Suelo, Pisos Radientes)",
      "Instalación de Pisos de Madera y Cerámica",
      "Instalación, Texturizado y Reparación de Paneles de Yeso",
      "Planificación de Espacios y Modificaciones Estructurales",
      "Molduras Personalizadas y Zócalos"
    ],
    section: {
      title: "No Solo Arreglamos. Construimos.",
      text: "Nuestra división de remodelación está diseñada para propietarios que exigen excelencia. Nos encargamos de todo el alcance (demolición, estructura, electricidad, plomería y acabados finos) para que no tengas que lidiar con cinco contratistas diferentes."
    },
    footerCta: {
      title: "¿Listo para mejorar tu hogar?",
      subtitle: "Programa una consulta y estimación gratuitas.",
      button: "Obtener Cotización"
    }
  },
  servicesSpecialized: {
    metadata: {
      title: "Restauración de Emergencia y Servicios Especializados | Quick Fix",
      description: "Restauración de daños por agua 24/7, eliminación de moho, limpieza de riesgos biológicos y respuesta a daños por tormentas en Oregon."
    },
    hero: {
      badge: "Ayuda de Emergencia",
      headlineLine1: "Cuando Ocurre un Desastre.",
      headlineLine2: "Nosotros Respondemos.",
      subheadline: "Servicios especializados de limpieza y restauración para situaciones críticas. Rápidos, discretos y certificados.",
      button: "Llama para Ayuda Inmediata"
    },
    services: [
      "Restauración y Secado de Daños por Agua",
      "Eliminación y Prevención de Moho",
      "Limpieza y Saneamiento de Riesgos Biológicos",
      "Limpieza de Daños por Tormentas",
      "Tablado de Seguridad",
      "Servicios de Limpieza de Acumuladores"
    ],
    section: {
      title: "Protección Certificada y Asegurada",
      text: "Seguimos protocolos estrictos de OSHA e IICRC para garantizar que tu propiedad sea segura, desinfectada y restaurada a su condición previa a la pérdida. Trabajamos directamente con tu seguro para agilizar el proceso de reclamo."
    },
    cta: {
      title: "No esperes a que el daño se propague.",
      button: "Contáctanos Inmediatamente"
    }
  },
  aboutPage: {
    metadata: {
      title: "Sobre Nosotros | Quick Fix Handyman",
      description: "De reparaciones de respuesta rápida a contratación general de primera calidad. Arraigados en McMinnville, construyendo confianza en Oregon. Licenciados, Avalados y Asegurados."
    },
    credentials: [
      "Totalmente Licenciados, Avalados y Asegurados",
      "Protocolos de Seguridad que Cumplen con OSHA",
      "CCB #229622 (Junta de Contratistas de Construcción de Oregon)",
      "Miembros del Equipo Verificados"
    ],
    hero: {
      eyebrow: "Nuestra Historia",
      headlineLine1: "Arraigados en McMinnville.",
      headlineLine2: "Construyendo Oregon."
    },
    evolution: {
      title: "Más Que Un Simple \"Areglo Rápido\"",
      p1: "Hace siete años, comenzamos con una camioneta sencilla y una promesa: llegar a tiempo y hacer bien el trabajo. Notamos una brecha en el mercado: los propietarios estaban cansados de contratistas que no se comunicaban, no limpiaban y no se preocupaban.",
      p2: "Lo que comenzó como un servicio de manitas de respuesta rápida se ha convertido en una firma líder de Contratación General. Hoy en día, \"Quick Fix\" no significa tomar atajos; significa **eficiencia**. Significa que tenemos los sistemas, el equipo y la experiencia para manejar todo, desde daños por agua hasta remodelaciones completas de cocinas.",
      quote: "\"Primero construimos confianza. La renovación es solo la prueba.\""
    },
    trust: {
      title: "Construido Sobre Una Base de Seguridad y Cumplimiento",
      text: "Tu hogar es tu mayor inversión. No nos lo tomamos a la ligera. Operamos con los más altos estándares de seguridad, seguros y licencias."
    },
    cta: {
      title: "¿Listo para trabajar con los mejores?",
      button1: "Ver Nuestro Trabajo",
      button2: "Comienza Tu Proyecto"
    }
  },
  notFound: {
    title: "404 - Página No Encontrada",
    message: "No se pudo encontrar el recurso solicitado",
    button: "Volver a Inicio"
  }
};

const dictionaries = {
  en,
  es,
};

export async function getLocale(): Promise<"en" | "es"> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("qf_locale")?.value;
  return locale === "es" ? "es" : "en";
}

export async function getDictionary(): Promise<Dictionary> {
  const locale = await getLocale();
  return dictionaries[locale];
}
