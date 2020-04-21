import React from 'react';
import VillagerIcon from './VillagerIcon';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
`;

const VillagerList = ({ villagers, selectVillager }) => {
  return (
    <Ul>
      {villagers.map((villager, i) => {
        return (
          <VillagerIcon
            key={villager}
            villager={villager}
            selectVillager={selectVillager}
          />
        );
      })}
    </Ul>
  );
};

export default VillagerList;
