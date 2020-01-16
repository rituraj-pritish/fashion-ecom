import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 40%;
`;

export const ShopLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr%);
  grid-gap: 10px;
  padding: 10px 0;
  padding-top: 0;
  overflow: hidden;

  .women {
    grid-row: 1/3;
    grid-column: 2;
  }

  .shoes {
    grid-row: 2;
    grid-column: 3/5;

    div {
      background-position: center;
    }
  }

  div {
    position: relative;
    overflow: hidden;

    p {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff90;
      padding: 13px;
      border-radius: 10px;
      transition: 0.3s ease-in;
      font-size: 1.6rem;
      border: transparent;
    }

    &:hover .bg {
      transform: scale(1.1);
      border: none;
    }

    &:hover p {
      background: ${({ theme }) => theme.color.primary.main + 'c9'};
      color: #fff;
      border: 2px solid white;
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: 0.3s ease-in;
  }
`;
