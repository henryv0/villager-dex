import React, { useState } from 'react';

const VillagerInput = ({addVillager}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addVillager(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        label="Add villager"
        onChange={event => setInput(event.target.value)}
      />
    </form>
  );
};

export default VillagerInput;