import React from 'react';
import VillagerProfile from './VillagerProfile';

const VillagerDetails = ({ villagerData, selectedVillager }) => {
  console.log(villagerData);

  // when component changes, aka when data actually updates - send Villager name

  return (
    <>
      {villagerData.map((villager) => {
        const name = villager.name.toLowerCase();

        return (
          <VillagerProfile
            key={name}
            data={villager}
            isActive={selectedVillager === name ? true : false}
          />
        );
      })}
    </>
  );
};

export default VillagerDetails;
