import React from 'react';
import styled from 'styled-components';
import {
  color,
  space,
  typography,
  position,
  grid,
  display
} from 'styled-system';

const StyledText = styled.p`
  font-size: 1.6rem;
  display: ${({ inline }) => inline && 'inline'};
  color: inherit;

  ${color} ${space} ${typography} ${position} ${grid} ${display}
`;

const Text = ({ children, ...otherProps }) => {
  return <StyledText {...otherProps}>{children}</StyledText>;
};

export default Text;
