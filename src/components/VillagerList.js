import React, { useState } from 'react';

const VillagerList = ({villagers}) => {
  
  return (
    <ul>
      {villagers.map((villager, i) => {
        return <li key={i}>{villager}</li>
      })}
    </ul>
  );
};

export default VillagerList;