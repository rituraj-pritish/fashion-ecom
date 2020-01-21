import styled from 'styled-components';
import sizes from '../../../../sizes';

export const FilterPanelContainer = styled.aside`
  background: #eee;
  text-align: left;
  padding: 20px;
  height: calc(100vh - 80px);
  position: sticky;
  top: 65px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  @media ${sizes.xl} {
    display: none;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0;
  background: #000;
`;

export const List = styled.ul`
  list-style-type: none;

  li {
    cursor: pointer;
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;
