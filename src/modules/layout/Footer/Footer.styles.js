import styled from 'styled-components'
import sizes from 'theme/sizes'

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
  color: ${({theme}) => theme.colors.black};

  @media ${sizes.md} {
    padding: 30px ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 30px ${({ theme }) => theme.padding.md};
  }
`

export const StyledLogo = styled.div`
  margin-right: 30px;
  svg {
    width: 100%;
    height: auto;
    max-width: 200px;
  }

  @media ${sizes.lg} {
    grid-row: 2;
    grid-column: 1;
  }

  @media ${sizes.md} {
    grid-row: 3;
    grid-column: 1/3;
    margin: 0 auto;
  }
`

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
        color: #000;
      }
    }
  }

  @media ${sizes.lg} {
    display: flex;
    justify-content: center;
  }

  @media ${sizes.md} {
    margin-top: 15px;
  }
`

export const MailList = styled.div`
  text-align: end;
  word-spacing: 2px;
  width: auto;
  justify-self: end;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    white-space: nowrap;

    @media ${sizes.mob} {
      white-space: normal;
      text-align: center;
    }
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
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    color: white;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  @media ${sizes.lg} {
    grid-row: 2;
    grid-column: 2;
    width: 100%;
    text-align: center;
  }

  @media ${sizes.md} {
    grid-row: 1;
    grid-column: 1/3;
    width: 100%;
    text-align: center;
  }
`

export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  align-items: center;

  @media ${sizes.lg} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media ${sizes.md} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

export const BottomContainer = styled.div`
  font-size: 1.3rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialLinks = styled.div`
  svg {
    width: 35px;
    margin: 0 7px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

    @media ${sizes.mob} {
      width: 30px;
    }
  }
`