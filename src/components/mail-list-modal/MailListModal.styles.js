import styled from 'styled-components';

export const MailListContainer = styled.div`
  width: 73vw;
  height: auto;
  background: #dbdbdb;
  display: flex;

  img {
    width: 35vw;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    color: #2c2c2c;
    font-size: 0.9rem;
    width: 75%;
    text-align: center;
  }

  form {
    width: 100%;
    text-align: center;
    height: 35px;
    margin: 20px 0;

    input {
      width: 55%;
      height: 100%;
      border-radius: 10px;
      padding: 0 10px;
    }

    button {
      color: white;
      margin-left: 10px;
      border-radius: 10px;
      height: 100%;
      background: #a6714c;
      padding: 0 10px;
      border: none;
      cursor: pointer;

      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }
`;
