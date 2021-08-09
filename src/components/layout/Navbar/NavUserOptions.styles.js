import styled from 'styled-components';

export const UserOptions = styled.div`
  font-size: 1.6rem;
  padding: 10px;
  background: #eee;
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  transform: translateX(-45%);
  top: 52px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: initial;
`;

export const NoAuthOptions = styled.div`
  min-width: 170px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;

    p {
      font-size: 1.2rem;
      color: #3e3e3e;
      white-space: nowrap;
      margin-right: 10px;
    }

    button {
      white-space: nowrap;
    }
  }
`;

export const AuthOptions = styled.div`
  padding: 1rem 2rem;

  li {
    padding: 0;
    margin: 8px 0;
  }

  a {
    display: flex;
    white-space: nowrap;
    div {
      margin-right: 2rem;
    }
  }
`;
