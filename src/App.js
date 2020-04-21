import React, { useState } from 'react';
import styled from 'styled-components';

import Villager from './api/Villager';
import VillagerInput from './components/VillagerInput';
import VillagerList from './components/VillagerList';
import VillagerDetails from './components/VillagerDetails';

const Wrapper = styled.div`
  height: 100vh;
  background-color: rgb(123, 211, 194);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftWrapper = styled.div`
  background-color: rgb(115, 202, 188);
  border-radius: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const ResidentsHeading = styled.h2`
  background-color: rgb(97, 184, 178);
  padding: 1rem 2rem;
  margin-top: -.5rem;
  color: #fff;
  border-radius: 15%;
`;

function App() {
  const [villagers, setVillagers] = useState(['bam']);
  const [selectedVillager, setSelectedVillager] = useState('');
  const [villagerData, setVillagerData] = useState([
    {
      message: "Here's some information on Bam:",
      name: 'Bam',
      image:
        'https://nookipedia.com/w/images/thumb/9/96/Bam_NL.png/200px-Bam_NL.png',
      quote: "Get while the getting's good.",
      gender: 'Male',
      personality: 'Jock',
      species: 'Deer',
      birthday: 'November 7th',
      sign: 'Scorpio',
      phrase:
        'booshNAkablang\nEUGreen Warm-Up Shirt[nb 1]Athletic Jacket (Green)[nb 2]UnknownUnknownUnknownUnknownN/AN/Ahttps://nookipedia.com/wiki/Bam4/16/202004/20/2020 00:59\n\n',
      clothes: 'Green Warm-Up Shirt[nb 1]Athletic Jacket (Green)[nb 2]',
      'islander-favorite': 'N/A',
      'islander-allergic': 'N/A',
      picture: 'https://nookipedia.com/w/images/1/11/BamPicACNL.png',
      siblings: 'Fourth of five',
      skill: 'Back flipping',
      goal: 'Soccer player',
      fear: 'Mummy mask',
      favclothing: 'Sporty',
      leastfavclothing: 'Traditional',
      favcolor: 'Aqua',
      'coffee-type': 'Blend',
      'coffee-milk': 'A little',
      'coffee-sugar': '1 spoonful',
      link: 'https://nookipedia.com/wiki/Bam',
      updated: '4/16/2020',
      cached: '04/20/2020 00:59',
    },
  ]);

  const addVillager = (villagerName) => {
    const villager = villagerName.toLowerCase();

    setVillagers((villagers) => [...villagers, villager]);

    // API Call
    const villagerData = Villager(villager);
    villagerData.then((res) => {
      console.log(res);

      setVillagerData((villagerData) => [...villagerData, res.data]);
    });
  };

  return (
    <Wrapper>
      <header>
        <h1>Villager Dex</h1>
        <VillagerInput addVillager={addVillager} />
      </header>
      <Main>
        <LeftWrapper>
          <ResidentsHeading>Residents</ResidentsHeading>
          <VillagerList
            villagers={villagers}
            selectVillager={(e) => setSelectedVillager(e.target.value)}
          />
        </LeftWrapper>
        <VillagerDetails
          villagerData={villagerData}
          selectedVillager={selectedVillager}
        />
      </Main>
    </Wrapper>
  );
}

export default App;
