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

  // counter
  & > div {
    width: fit-content;
  }
`;

export const Remove = styled.div`
  width: fit-content;
  justify-self: end;
  color: #5a5a5a;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    bottom: 0;
  }
`;