import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

function App() {
  return (
    <main>
      <Header />
      <SolarSystem />
      <Title headline="Planetas" />
    </main>
  );
}

export default App;
