import styled from 'styled-components'
import sizes from 'theme/sizes'

export const Nav = styled.nav`
  font-size: 1.6rem;
  width: 100%;
  height: ${({ theme }) => theme.navHt};
  background-color: #eee;
  color: #202020;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.padding.xxl};
  box-shadow: 0px 3px 10px #20202042;
  box-sizing: border-box;
  z-index: 10;
  position: fixed;
  display: ${({ show }) => (show ? 'flex' : 'none')};

  @media ${sizes.md} {
    padding: 0 ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 0 ${({ theme }) => theme.padding.mob};
  }
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  position: relative;

  @media ${sizes.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledLogo = styled.div`
  svg {
    height: 100%;
    width: 120px;
    display: ${({ show }) => (show ? 'none' : 'block')};

    @media ${sizes.md} {
      width: 95px;
    }
  }
`

export const SearchIconContainer = styled.li`
  display: none;
  font-size: 2.2rem;

  @media ${sizes.lg} {
    display: block;
  }
`

export const NavLinks = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: auto;
  display: flex;
  align-items: center;

  img {
    width: 22px;
  }

  li {
    padding: 5px;
    margin: 0 15px;
    cursor: pointer;
    position: relative;

    img {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`

export const Cart = styled.li`
  display: flex;
  align-items: center;
  margin-right: 0 !important;
  position: relative;

  img {
    width: 30px;
  }

  span {
    margin-left: 10px;
    width: 25px;
    height: 25px;
    font-size: 12px;
    background: #20202042;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Search = styled.form`
  display: flex;
  height: 35px;
  margin: 0 auto;
  align-self: center;
  width: 100%;
  max-width: 500px;

  input {
    box-sizing: border-box;
    border: none;
    height: 100%;
    flex-grow: 1;
    border-radius: 10px 0 0 10px;
    padding: 5px 10px;
    border: 2px solid #fff;

    &:focus {
      outline: none;
    }
  }

  button {
    height: 100%;
    border-radius: 0 10px 10px 0;
    outline: none;
    border: none;
    width: 70px;
    background: #20202042;
    cursor: pointer;
    color: #fff;
    border: 2px solid #fff;

    &:hover {
      background: #eee;
      color: black;
    }
  }

  @media ${sizes.lg} {
    display: none;
  }
`

export const Nothing = styled.div`
  position: absolute;
  top: 110%;
  background: #eee;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  transform: translateX(-50%);
  padding: 15px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`
