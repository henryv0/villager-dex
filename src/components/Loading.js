import React from 'react';
import styled, { keyframes } from 'styled-components';
import vars from './styleVars';

const rotate = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(2);
    opacity: 0;
  }
`;

const LoadingIcon = styled.span`
  height: 2rem;
  width: 2rem;
  background: ${vars.darkYellow};
  border-radius: 50%;
  font-size: 0;
  animation: ${rotate} 1.5s linear infinite;
  // flex-basis: 50%;
`;

const Loading = () => {
  return <LoadingIcon>Loading...</LoadingIcon>;
}

export default Loading;