import React, { useState } from 'react';
import styled from 'styled-components';
import vars from './styleVars';

import villagersList from '../data/villagers';

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  color: ${vars.fontPrimary};
  font-size: 0.8rem;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 20px;
  border: 0;
  padding: 0.5rem 1rem;
  background: ${vars.primaryYellow};
  box-shadow: none;
  font-size: 1rem;

  &:after {
    border-top: 1px solid black;
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: ${vars.primaryYellow};
  border-radius: 20px;
  padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  margin-left: 1rem;
  color: ${vars.fontSecondary};
  font-weight: bold;
  // font-size: .9rem;

  span {
    background-color: ${vars.fontSecondary};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    color: ${vars.primaryYellow};
    pointer-events: none;
  }

  &:disabled {
    background-color: #fff;
    color: rgb(170, 170, 170);

    span {
      background-color: rgb(170, 170, 170);
    }
  }
`;

const VillagerInput = ({addVillager}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled() === true) {
      return false;
    }

    console.log('add villager');

    addVillager(input);
  }

  const isDisabled = (name = input, list = villagersList) => {
    if (!list.includes(name.toLowerCase())) {
      return true;
    }

    return false;
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="villager-input">Type in your villager's name!</Label>

      <Input
        type="text"
        value={input}
        id="villager-input"
        label="Add villager"
        onChange={(event) => setInput(event.target.value)}
        spellcheck="false"
        autoComplete="off"
        autofill="off"
        placeholder="Search for villagers"
      />

      <Button type="submit" disabled={isDisabled()}>
        <span>A</span>
        Add
      </Button>
    </form>
  );
};

export default VillagerInput;