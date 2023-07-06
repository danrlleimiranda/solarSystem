import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { FaMapMarkerAlt, FaFlag } from 'react-icons/fa';
import { GoHorizontalRule } from 'react-icons/go';

type MissionCardProp = {
  name: string;
  year: string;
  country: string;
  destination:string;
};

function MissionCard({ name, year, country, destination }: MissionCardProp) {
  return (
    <div data-testid="mission-card" className="mission-box">
      <p data-testid="mission-name">{name}</p>
      <p data-testid="mission-year">
        <span><BsFillCalendar2EventFill /></span>
        {year}
      </p>
      <p data-testid="mission-country">
        <span><FaMapMarkerAlt /></span>
        {country}
      </p>
      <p data-testid="mission-destination">
        <span><FaFlag /></span>
        {destination}
      </p>
    </div>
  );
}

export default MissionCard;
