import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard/PlanetCard';
import Planets from './data/planets';
import './App.css';
import { PlanetBox, MissionBox } from './data/styled-components';
import Missions from './components/Missions';
import missions from './data/missions';
import MissionCard from './components/MissionCard';

function App() {
  return (
    <main className="App">
      <Header />
      <div className="solar-system">

        <PlanetBox>
          <SolarSystem />
        </PlanetBox>
      </div>
      <Missions />
      <MissionBox>
        { missions.map((mission) => {
          return (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          );
        })}
      </MissionBox>

    </main>
  );
}

export default App;
