import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reports from './components/Reports';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import LeadershipTeam from './components/LeadershipTeam';
import Clients from './components/Clients';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Reports />
      <AboutUs />
      <LeadershipTeam />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
