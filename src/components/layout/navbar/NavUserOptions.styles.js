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
  cursor:initial ;
`;
export const NoAuthOptions = styled.div`
  min-width: 170px;

  button {
    padding: 10px;
    width: 100%;
    border-radius: 7px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 1.8rem;
    border: 2px solid rgba(#fff, 0, 5);
    margin-bottom: 15px;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1.2rem;
      color: #3e3e3e;
      white-space: nowrap;
      margin-right: 10px;
    }

    button {
      background: #fff;
      color: #3e3e3e;
      font-weight: unset;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      font-size: 1.5rem;
      padding: 7px;
      margin: 0;

      &:hover {
        background: #fff;
      }
    }
  }
`;

export const AuthOptions  = styled.div`
  a {
    display: flex;

    i {
      margin-right: 20px;
    }
  }
`