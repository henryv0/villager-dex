import React from 'react';

const VillagerIcon = ({ villager, selectVillager }) => {
  return (
    <li>
      <button value={villager} onClick={selectVillager}>
        {villager} Icon
      </button>
    </li>
  );
};

export default VillagerIcon;
