import { Phone, Mail, MapPin } from "lucide-react";
import ContactThreeElements from "./ContactThreeElements";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-addore-secondary text-white relative overflow-hidden"
    >
      {/* Three.js Elements */}
      <ContactThreeElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-heading font-bold mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a free
            consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone Numbers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-addore-accent">
                Get In Touch
              </h3>

              <a
                href="tel:9999067234"
                className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-addore-accent transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 p-3 bg-addore-accent rounded-lg group-hover:bg-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white group-hover:text-addore-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white group-hover:text-white transition-colors duration-300 mb-1">
                    Primary Contact
                  </p>
                  <p className="text-xl font-semibold text-white">9999067234</p>
                </div>
              </a>

              <a
                href="tel:9818776234"
                className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-addore-accent transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 p-3 bg-addore-accent rounded-lg group-hover:bg-white transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white group-hover:text-addore-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white group-hover:text-white transition-colors duration-300 mb-1">
                    Alternative Contact
                  </p>
                  <p className="text-xl font-semibold text-white">9818776234</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@adoreintteriorstudio.com"
                className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-addore-accent transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 p-3 bg-addore-accent rounded-lg group-hover:bg-white transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white group-hover:text-addore-accent transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-white group-hover:text-white transition-colors duration-300 mb-1">
                    Email Us
                  </p>
                  <p className="text-xl font-semibold text-white">
                    info@adoreintteriorstudio.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-white bg-opacity-10 rounded-lg mb-8">
                <div className="flex-shrink-0 p-3 bg-addore-accent rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white mb-1">Visit Our Office</p>
                  <p className="text-xl font-semibold leading-relaxed text-white">
                    1161, Sector 45
                    <br />
                    Gurugram 122003
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9876543210123!2d77.0728!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b7f7f7f7f%3A0x1234567890abcdef!2sSector%2045%2C%20Gurugram%2C%20Haryana%20122003!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90"
            ></iframe>
          </div>
        </div>

        {/* CTA Buttons - Added spacing */}
        <div className="text-center mt-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9999067234"
              className="inline-flex items-center justify-center space-x-3 bg-addore-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">Call Now</span>
            </a>
            <a
              href="mailto:info@adoreintteriorstudio.com"
              className="inline-flex items-center justify-center space-x-3 border-2 border-addore-accent text-addore-accent px-8 py-4 rounded-lg hover:bg-addore-accent hover:text-white transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-semibold">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
