import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.2fr 0.5fr 0.5fr;
  padding: 30px;
  border-bottom: 1px solid #202020;
  font-size: 1.5rem;
  align-items: center;
  position: relative;

  ${({isLoading}) => isLoading && `
    filter: blur(1.2px);
  `};
`;

export const Loader = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

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
`;

export const Remove = styled.div`
  width: fit-content;
  justify-self: end;
  color: #5a5a5a;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;