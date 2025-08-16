import React from 'react'
import { Home, ChefHat, Bed, Briefcase, DoorOpen, Wrench } from 'lucide-react'
import ServicesThreeElements from './ServicesThreeElements'

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Modular Kitchen",
      description: "Custom designed kitchens that blend functionality with style. From modern layouts to traditional designs.",
      features: ["Custom Cabinets", "Premium Appliances", "Smart Storage Solutions"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Living Room Design",
      description: "Create stunning living spaces that reflect your personality and accommodate your lifestyle needs.",
      features: ["Furniture Selection", "Lighting Design", "Color Coordination"]
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Bedroom Interiors",
      description: "Peaceful and comfortable bedroom designs that promote rest and relaxation while maximizing space.",
      features: ["Space Optimization", "Custom Wardrobes", "Ambient Lighting"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Office Interiors",
      description: "Professional workspace designs that boost productivity and create a positive work environment.",
      features: ["Ergonomic Design", "Storage Solutions", "Modern Aesthetics"]
    },
    {
      icon: <DoorOpen className="w-8 h-8" />,
      title: "Wardrobe Design",
      description: "Custom wardrobe solutions that maximize storage while complementing your room's aesthetic.",
      features: ["Custom Layouts", "Premium Materials", "Smart Organization"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Home Renovation",
      description: "Complete home makeovers and renovations that transform your existing space into your dream home.",
      features: ["Complete Renovation", "Space Planning", "Project Management"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-addore-light-gray relative overflow-hidden">
      {/* Three.js Elements */}
      <ServicesThreeElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-addore-secondary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-addore-warm-gray max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design services 
            to transform your space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-addore-primary rounded-full mb-6 mx-auto">
                <div className="text-addore-accent">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-addore-secondary mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-addore-warm-gray mb-6 text-center">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-addore-warm-gray"
                  >
                    <div className="w-2 h-2 bg-addore-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:9999067234"
            className="inline-block bg-addore-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services