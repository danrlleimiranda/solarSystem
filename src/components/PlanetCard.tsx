import './PlanetCard.css';

type PlanetCardProp = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetCardProp) {
  return (
    <div data-testid="planet-card" className={ planetName }>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
