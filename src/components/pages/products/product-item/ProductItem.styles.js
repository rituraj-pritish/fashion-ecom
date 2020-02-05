import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  background: #f6f8fc;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const ItemBottom = styled.div`
  padding: 0 15px 15px 15px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    flex-grow: 1;
  }

  p {
    margin-top: 5px;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  button {
    margin-top: auto;
  }
`;
export const Wishlist = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.6rem;
  background-color: #ffffff;
  padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg path {
    fill: ${({isAddedToWishlist}) => isAddedToWishlist ? 'red' : '#eee' };
  }
`;
