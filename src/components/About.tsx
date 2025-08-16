import { Users, Home, CheckCircle } from "lucide-react";
import AboutThreeElements from "./AboutThreeElements";

const About = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-addore-accent" />,
      title: "100+ Successful Projects",
      description: "Satisfied clients across Delhi NCR",
    },
    {
      icon: <Home className="w-8 h-8 text-addore-accent" />,
      title: "Custom Luxury Interiors",
      description: "Tailored to your lifestyle",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-addore-accent" />,
      title: "Turnkey Project Execution",
      description: "End-to-end project management",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-addore-primary relative overflow-hidden"
    >
      {/* Three.js Elements */}
      <AboutThreeElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-addore-secondary mb-6">
                About Us
              </h2>
              <p className="text-lg text-addore-warm-gray leading-relaxed mb-6">
                At Addore Interior Studio, we believe your home should reflect
                your personality and lifestyle. With years of expertise in
                interior design, architecture, and remodeling, we craft spaces
                that blend elegance and functionality.
              </p>
              <p className="text-lg text-addore-warm-gray leading-relaxed mb-8">
                Led by Rohit Jangra, our team is dedicated to transforming your
                vision into reality through innovative design solutions and
                meticulous attention to detail.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">{highlight.icon}</div>
                  <div>
                    <h3 className="font-semibold text-addore-secondary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-addore-warm-gray">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
