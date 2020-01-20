import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import facebook from '../../../assets/facebook.svg';
import instagram from '../../../assets/instagram.svg';
import twitter from '../../../assets/twitter.svg';
import { MaxWidthContainer } from '../../../index.styles';
import {
  FooterContainer,
  SiteLinks,
  MailList,
  TopContainer,
  Logo,
  BottomContainer,
  SocialLinks
} from './Footer.styles';

const Footer = ({ history }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (
      history.location.pathname === '/signin' ||
      history.location.pathname === '/signup'
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [history.location]);

  return (
    <FooterContainer show={show}>
      <MaxWidthContainer>
        <TopContainer>
          <Logo>
            <Link to='/'>
              <img src={logo} alt={logo} />
            </Link>
          </Logo>

          <SiteLinks>
            <h3>Buy</h3>
            <li>
              <Link to='/products/men'>Men</Link>
            </li>
            <li>
              <Link to='/products/women'>Women</Link>
            </li>
            <li>
              <Link to='/products/accessories'>Accessories</Link>
            </li>
            <li>
              <Link to='/products/shoes'>Footwear</Link>
            </li>
          </SiteLinks>

          <SiteLinks>
            <h3>Special</h3>
            <li>
              <Link to='/products/offers'>Today's Offers</Link>
            </li>
            <li>
              <Link to='/products/best-sellers'>Best Sellers</Link>
            </li>
            <li>
              <Link to='/products/trending'>Trending</Link>
            </li>
            <li>
              <Link to='/products/new'>New</Link>
            </li>
          </SiteLinks>

          <MailList>
            <h3>Stay up to date from fashion.co</h3>
            <form>
              <input type='text' placeholder='enter your email' />
              <button>Submit</button>
            </form>
          </MailList>
        </TopContainer>
        <BottomContainer>
          <SocialLinks>
            <Link to=''>
              <img src={facebook} alt='facebook' />
            </Link>
            <Link to=''>
              <img src={instagram} alt='instagram' />
            </Link>
            <Link to=''>
              <img src={twitter} alt='twitter' />
            </Link>
          </SocialLinks>

          <div>&copy; {new Date().getFullYear()} fashion.co</div>
        </BottomContainer>
      </MaxWidthContainer>
    </FooterContainer>
  );
};

export default withRouter(Footer);
