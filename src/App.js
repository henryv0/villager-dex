import React, { useState } from 'react';
import './App.css';

import Villager from './api/Villager';
import VillagerInput from './components/VillagerInput';
import VillagerList from './components/VillagerList';
import VillagerDetails from './components/VillagerDetails';

function App() {
  const [villagers, setVillagers] = useState(['Bam']);
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

  const addVillager = (villager) => {
    setVillagers((villagers) => [...villagers, villager]);

    // API Call
    const villagerData = Villager(villager);
    villagerData.then((res) => {
      console.log(res);

      setVillagerData((villagerData) => [...villagerData, res.data]);
    });
  };

  const selectVillager = (e) => {
    setSelectedVillager(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Villager Dex</h1>

        <VillagerInput addVillager={addVillager} />

        <VillagerList villagers={villagers} selectVillager={selectVillager} />

        <VillagerDetails
          villagerData={villagerData}
          selectedVillager={selectedVillager}
        />
      </header>
    </div>
  );
}

export default App;
