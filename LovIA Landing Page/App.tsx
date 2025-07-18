import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AvatarSelection } from './components/AvatarSelection';
import { AICustomizer } from './components/AICustomizer';
import { ChatDemo } from './components/ChatDemo';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AvatarSelection />
        <AICustomizer />
        <ChatDemo />
        <Features />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}