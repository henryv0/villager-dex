import React, { useState } from 'react';

import villagersList from '../data/villagers';

const VillagerInput = ({addVillager}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled() === true) {
      return false;
    }

    console.log('add villager');

    addVillager(input);
  }

  const isDisabled = (name = input, list = villagersList) => {
    if (!list.includes(name.toLowerCase())) {
      return true;
    }

    return false;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        label="Add villager"
        onChange={(event) => setInput(event.target.value)}
      />

      <button type="button" disabled={isDisabled()}>Add villager</button>
    </form>
  );
};

export default VillagerInput;