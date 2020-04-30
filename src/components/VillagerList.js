import React from 'react';
import VillagerIcon from './VillagerIcon';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const VillagerList = ({
  villagers,
  villagerCount,
  selectVillager,
  selectedVillager,
  removeVillager,
}) => {
  const checkLoading = (i) => {
    let index = i + 1;
    return index > villagerCount;
  };

  return (
    <Ul>
      {villagers.map((villager, i) => {
        return (
          <VillagerIcon
            isLoading={checkLoading(i)}
            key={villager}
            villager={villager}
            selectVillager={selectVillager}
            selectedVillager={selectedVillager}
            removeVillager={removeVillager}
          />
        );
      })}
    </Ul>
  );
};

export default VillagerList;
