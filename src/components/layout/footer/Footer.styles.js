import styled from 'styled-components';
import sizes from '../../../sizes';

export const FooterContainer = styled.div`
  position: relative;
  z-index: 6;
  box-sizing: border-box;
  width: 100%;
  background: #b5b5b5;
  margin-top: auto;
  padding: 30px ${({ theme }) => theme.padding.xxl};
  padding-bottom: 5px;
  display: ${({ show }) => (show ? 'block' : 'none')};

  @media ${sizes.md} {
    padding: 30px ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 30px ${({ theme }) => theme.padding.md};
  }
`;

export const Logo = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 200px;
  }
`;

export const SiteLinks = styled.ul`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  li {
    margin-bottom: 5px;
    font-size: 1.3rem;

    a {
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const MailList = styled.div`
  text-align: end;
  word-spacing: 2px;
  width: auto;
  justify-self: end;

  h3 {
    font-size: 1.6rem;
    margin-bottom: 15px;
    white-space: nowrap;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    height: 35px;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  button {
    height: 35px;
    background: ${({ theme }) => theme.color.primary.main};
    border-radius: 8px;
    color: white;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.primary.darker};
    }
  }
`;

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  align-items: center;
`;

export const BottomContainer = styled.div`
  font-size: 1.3rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLinks = styled.div`
  img {
    width: 3.2rem;
    margin-right: 15px;
    transition: 0.2s;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;
