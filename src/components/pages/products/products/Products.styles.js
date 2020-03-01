import styled from 'styled-components';
import sizes from '../../../../sizes';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 270px auto;
  grid-gap: 2%;

  @media ${sizes.xl} {
    display: block;
  }
`;

export const FilterBtn = styled.div`
  display: none;
  text-align: left;
  margin: 1rem 0;
  cursor: pointer;
  font-size: 1.6rem;
  width: max-content;

  @media ${sizes.xl} {
    display: block;
  }
`;
