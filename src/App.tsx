import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header key="header" />
      <Hero key="hero" />
      <About key="about" />
      <Services key="services" />
      <Gallery key="gallery" />
      <WhyChooseUs key="why-choose-us" />
      <Contact key="contact" />
      <Footer key="footer" />
    </div>
  );
}
