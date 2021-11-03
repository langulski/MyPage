import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';
import Tagtest from '../components/TagCloud';

export default function home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <ContactBanner />
      <Tagtest />
      <Footer />
    </div>
  );
}
