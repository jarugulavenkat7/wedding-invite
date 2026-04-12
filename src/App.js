import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './LanguageContext';
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import EventDetails from './components/EventDetails';
import EngagementVenue from './components/EngagementVenue';
import Venue from './components/Venue';
import ContactInfo from './components/ContactInfo';
import PreWeddingVenue from './components/PreWeddingVenue';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import FloralDivider from './components/FloralDivider';
import FloatingRsvp from './components/FloatingRsvp';
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
            <FloatingRsvp />
            <Navbar />
            <Hero />
            <FloralDivider />
            <InvitationCard />
            <FloralDivider />
            <EventDetails />
            <FloralDivider />
            <EngagementVenue />
            <FloralDivider />
            <PreWeddingVenue />
            <FloralDivider />
            <Venue />
            <FloralDivider />
            <ContactInfo />
            <FloralDivider />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
