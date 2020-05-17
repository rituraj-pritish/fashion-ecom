import styled from 'styled-components';
import sizes from 'sizes';

export const StyledTitle = styled.div`
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const StyledCollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  height: 300px;
  margin: 5rem 0;

  @media ${sizes.md} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 900px;
  }
`;

export const StyledCollectionContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 35%;
  background: #fff;
  opacity: 0.75;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

export const StyledCollectionItem = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .col-bg {
    transition: 0.5s;
    width: 100%;
    height: 100%;
  }

  &:hover .col-bg {
    transform: scale(1.1);
  }

  &:hover ${StyledCollectionContent} {
    width: 70%;
    height: 45%;
    border-radius: 15px;
  }
`;
