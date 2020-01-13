import styled from 'styled-components';

export const Logo = styled.img`
  width: 16rem;
`;
export const Container = styled.div`
  font-size: 1.6rem;
  margin-top: -40px;
  border-radius: 8px;

  form {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

    label {
      margin-bottom: 10px;
    }

    input {
      background: #eee;
      width: 100%;
      margin-bottom: 20px;
      height: 35px;
      border-radius: 8px;
    }

    button {
      background: ${({ theme }) => theme.color.primary.main};
      color: #fff;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1.7rem;

      &:hover {
        background: ${({ theme }) => theme.color.primary.darker};
      }
    }
}
      p {
        margin-top: 15px;
        font-size: 1.4rem;
        color: ${({theme}) => theme.color.text.lighter};

        a {
          color: blue;
        }
      }
`;
