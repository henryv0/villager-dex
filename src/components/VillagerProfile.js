import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  // visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')}
  display: ${(props) => (props.isActive ? 'block' : 'none')}
`;

const VillagerProfile = ({data, isActive}) => {
  const { name, image, personality, birthday, favcolor, skill } = data;

  return (
    <Profile isActive={isActive}>
      <dd>Name</dd>
      <dt>{name}</dt>

      <dd>Personality</dd>
      <dt>{personality}</dt>

      <dd>Birthday</dd>
      <dt>{birthday}</dt>

      <dd>Favorite Color</dd>
      <dt>{favcolor}</dt>

      <dd>Skill</dd>
      <dt>{skill}</dt>

      <img src={image} alt={name} />
    </Profile>
  );
};

export default VillagerProfile;