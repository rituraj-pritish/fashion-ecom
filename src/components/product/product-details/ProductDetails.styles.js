import styled from 'styled-components';

export const ProductOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4%;
`;

export const SmallImages = styled.div``;

export const SmallImage = styled.div`
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    width: 100%;
    height: auto;
  }

  &::after {
    content: '';
    display: ${({current}) => current ? 'none' : 'block'};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #000;
    opacity: 0.15;
  }

  &:hover::after {
    opacity: 0;
  }
`;

export const MainImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 5%;
`;

export const ActionsContainer = styled.div`
  text-align: left;
  display: grid;
  grid-auto-rows: min-content;
  grid-row-gap: 15px;
`;

export const Name = styled.div`
  font-size: 3rem;
`;
export const Brand = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #4e4e4e;
  margin-top: -15px;
`;

export const Price = styled.div`
  font-size: 2.3rem;
`;

export const Rating = styled.div`
  font-size: 1.7rem;
`;

export const Stock = styled.div`
  font-size: 1.9rem;
  color: #5ac12a;
`;

export const CartBtn = styled.div`
  display: flex;
  width: 100%;

  div {
    background: whitesmoke;
    border-radius: 5px;
    margin-right: 20px;
    padding: 0 7px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.5rem;
    }

    span {
      cursor: pointer;
    }
  }

  button {
    flex-grow: 1;
    border-radius: 3px;
    padding: 1rem;
  }
`;

export const BuyBtn = styled.div`
  width: 100%;

  button {
    width: 100%;
    background: ${({ theme }) => theme.color.primary.main};
    color: white;
    font-weight: bold;
    padding: 1rem;
    border-radius: 3px;
    height: 4.5rem;

    &:hover {
      background: ${({ theme }) => theme.color.primary.darker};
    }
  }
`;

export const Variants = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const Variant = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: ${({ color }) => color === '#ffffff' && '0.5px solid #000000'};
  margin-right: 15px;
  cursor: pointer;
`;
