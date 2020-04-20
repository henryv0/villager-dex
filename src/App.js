import React, { useState } from 'react';
import './App.css';

import Villager from './api/Villager';
import VillagerInput from './components/VillagerInput';
import VillagerList from './components/VillagerList';

function App() {
  const testVillagers = ['Bam', 'Agnes', 'Octavian'];
  const [villagers, setVillagers] = useState(testVillagers);

  const addVillager = (villager) => {
    setVillagers(villagers => [...villagers, villager])
    console.log(villagers);
  };

  // const getVillagerData = (villager) => {
  //   return Villager(villager);
  // }

  // console.log(Villager('Bam'));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Villager Dex</h1>

        <VillagerInput addVillager={addVillager} />

        <VillagerList villagers={villagers} />

      </header>
    </div>
  );
}

export default App;
