import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  // flex: 1;
  flex-basis: calc(50% - 2rem);
  text-align: center;
  margin: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 0;
`;

const VillagerIcon = ({ villager, selectVillager }) => {
  return (
    <Li>
      <StyledButton value={villager} onClick={selectVillager}>
        {villager} Icon
      </StyledButton>
    </Li>
  );
};

export default VillagerIcon;
