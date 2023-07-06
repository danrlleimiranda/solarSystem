import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import { MissionBox } from '../data/styled-components';

function Missions() {
  return (
    <div data-testid="missions" className="mission">
      <Title headline="MISSÕES" />
      <MissionBox>
        { missions.map((mission) => (
          <MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </MissionBox>
    </div>
  );
}

export default Missions;
