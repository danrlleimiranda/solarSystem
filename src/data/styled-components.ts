import styled from 'styled-components';

export const PlanetBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    font-family: Epilogue;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
`;

export const MissionBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1098px;
    height: 2276px;
    border-radius: 30px;
    opacity: 0.10000000149011612px;
    margin: auto;
`;

export const Planet = styled.div`
transition: all 1s ease;
&:hover
transform: scale(1.2)
`;
