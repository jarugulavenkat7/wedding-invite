import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './LanguageContext';
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import EventDetails from './components/EventDetails';
import Venue from './components/Venue';
import PreWeddingVenue from './components/PreWeddingVenue';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import FloralDivider from './components/FloralDivider';
import BackgroundMusic from './components/BackgroundMusic';
import LoveTapEffect from './components/LoveTapEffect';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="app"
          >
            <LoveTapEffect />
            <BackgroundMusic />
            <Navbar />
            <Hero />
            <FloralDivider />
            <InvitationCard />
            <FloralDivider />
            <EventDetails />
            <FloralDivider />
            <PreWeddingVenue />
            <FloralDivider />
            <Venue />
            <FloralDivider />
            <RSVP />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
