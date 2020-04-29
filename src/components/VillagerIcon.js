import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const Li = styled.li`
  list-style: none;
  flex-basis: calc(50% - 2rem);
  text-align: center;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  // padding: 1rem 2rem;
  margin: 0;
  background: none;
  cursor: pointer;
  width: 120px;
  position: relative;
`;

const Icon = styled.svg`
  pointer-events: none;

  &:not(:root) {
    overflow: visible;
  }

  path {
    transition: 0.3s;
    transform-origin: 50% 50%;

    ${(props) => {
      if (props.isActive) {
        return `
          fill: orange;
          stroke: #fff;
          stroke-width: 20px;
          transform: scale(1.1) rotate(5deg)
        `;
      }
    }}
  }

  ${StyledButton}:hover & path {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ButtonText = styled.span`
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
`;

const VillagerIcon = ({ isLoading, villager, selectVillager, selectedVillager }) => {
  // const [active, selectActive] = useState('');

  const handleButton = (e) => {
    selectVillager(e);
  };

  return (
    <Li>
      {isLoading ? (
        <Loading />
      ) : (
        <StyledButton value={villager} onClick={handleButton}>
          <Icon
            isActive={villager === selectedVillager}
            width="100%"
            viewBox="0 0 401 339"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.0103 168.365L57.7071 168.478L63.0027 328.713L63.1625 333.548L68 333.548L339 333.548L344 333.548L344 328.548L344 169.527L373.418 169.635L386.829 169.684L376.724 160.867L204.069 10.2334L200.807 7.38671L197.523 10.2094L23.7693 159.574L13.5993 168.316L27.0103 168.365Z"
              fill="#5EB9AE"
              stroke="#5EB9AE"
              strokeWidth="10"
            />
          </Icon>
          <ButtonText>{villager}</ButtonText>
        </StyledButton>
      )}
    </Li>
  );
};

export default VillagerIcon;
