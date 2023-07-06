import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';
import { PlanetBox } from './data/styled-components';
import Missions from './components/Missions';

function App() {
  return (
    <main className="App">
      <Header />
      <div className="solar-system">
        <PlanetBox>
          {/* <hr /> */}
          <SolarSystem />
        </PlanetBox>
      </div>
      <div className="boxed">
        <Missions />
      </div>
    </main>
  );
}

export default App;
