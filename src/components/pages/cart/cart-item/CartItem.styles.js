import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.2fr 0.5fr 0.5fr;
  padding: 30px;
  border-bottom: 1px solid #202020;
  font-size: 1.5rem;
  align-items: center;
`;

export const Details = styled.div`
  text-align: left;
  padding-left: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  i {
    cursor: pointer;
    padding: 20px;
  }
`;

export const Remove = styled.i`
  font-size: 1.7rem;
  cursor: pointer;
  
  &:hover {
    color: red;
  }
`

export const Amount = styled.div`
  font-weight: bold;
`
