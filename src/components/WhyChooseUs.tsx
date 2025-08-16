import { Palette, Award, Cog, Clock } from "lucide-react";
import WhyChooseUsThreeElements from "./WhyChooseUsThreeElements";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Palette className="w-12 h-12 text-addore-accent" />,
      title: "Personalised Design",
      description:
        "Every project is tailored to reflect your unique style, preferences, and lifestyle needs.",
    },
    {
      icon: <Award className="w-12 h-12 text-addore-accent" />,
      title: "Premium Quality Materials",
      description:
        "We source only the finest materials and work with trusted suppliers to ensure lasting quality.",
    },
    {
      icon: <Cog className="w-12 h-12 text-addore-accent" />,
      title: "End-to-End Execution",
      description:
        "From concept to completion, we handle every aspect of your project with professional expertise.",
    },
    {
      icon: <Clock className="w-12 h-12 text-addore-accent" />,
      title: "Timely Delivery",
      description:
        "We respect your time and ensure all projects are completed within the agreed timeline.",
    },
  ];

  return (
    <section className="py-20 bg-addore-light-gray relative overflow-hidden">
      {/* Three.js Elements */}
      <WhyChooseUsThreeElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-addore-secondary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-addore-warm-gray max-w-2xl mx-auto">
            We combine creativity, expertise, and dedication to deliver
            exceptional interior design solutions that exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-addore-primary rounded-full">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-addore-secondary mb-4">
                {benefit.title}
              </h3>
              <p className="text-addore-warm-gray leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section - Removed Years Experience */}
        <div className="mt-16 bg-addore-accent p-12 rounded-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div>
              <div className="text-4xl font-heading font-bold mb-2">100+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">100%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
