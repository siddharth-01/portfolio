import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Replace with your actual GA4 Measurement ID after creating a GA property
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export default function App() {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Portfolio' });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
