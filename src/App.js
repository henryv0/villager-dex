import React, { useState } from 'react';
import styled from 'styled-components';

import Villager from './api/Villager';
import VillagerInput from './components/VillagerInput';
import VillagerList from './components/VillagerList';
import VillagerDetails from './components/VillagerDetails';

const Wrapper = styled.div`
  min-height: 100vh;
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
  // background-color: rgb(115, 202, 188);
  background-color: #71cab9;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2369c5b5' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  border-radius: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

const RightWrapper = styled.div`
  padding: 2rem;
  @media (min-width: 768px) {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

const ResidentsHeading = styled.h2`
  background-color: rgb(97, 184, 178);
  padding: 1rem 2rem;
  margin-top: -0.5rem;
  color: #fff;
  // border-radius: 30%;
  border-radius: 19% 23% 29% 33% / 69% 51% 79% 63%;
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

    if (villagers.includes(villager)) {
      console.log(`you've already added ${villager}`);
      return false;
    };

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
        {/* <h1>Villager Dex</h1> */}
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

        <RightWrapper>
          <VillagerDetails
            villagerData={villagerData}
            selectedVillager={selectedVillager}
          />
        </RightWrapper>
      </Main>
    </Wrapper>
  );
}

export default App;
