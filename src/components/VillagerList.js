import React from 'react';
import VillagerIcon from './VillagerIcon';

const VillagerList = ({ villagers, selectVillager }) => {
  return (
    <ul>
      {villagers.map((villager, i) => {
        return (
          <VillagerIcon
            key={villager}
            villager={villager}
            selectVillager={selectVillager}
          />
        );
      })}
    </ul>
  );
};

export default VillagerList;
