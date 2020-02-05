import React from 'react';
import styled from 'styled-components';
import { background, grid } from 'styled-system';

const StyledBackground = styled.div`
  background: ${({url,img}) => url ? `url(${url})` : img };
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:100%;
  width: 100%;
  ${background} ${grid}
`;

const Background = (props) => {
  return <StyledBackground {...props} />;
};

export default Background;
