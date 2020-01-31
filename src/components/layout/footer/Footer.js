import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../../assets/Logo';
import InstagramIcon from '../../../assets/InstagramIcon';
import FacebookIcon from '../../../assets/FacebookIcon';
import TwitterIcon from '../../../assets/TwitterIcon';
import { MaxWidthContainer } from '../../../index.styles';
import {
  FooterContainer,
  SiteLinks,
  MailList,
  TopContainer,
  BottomContainer,
  SocialLinks,
  SocialLink,
  StyledLogo
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

  const handleMaillist = e => {
    e.preventDefault();
  };

  return (
    <FooterContainer show={show}>
      <MaxWidthContainer>
        <TopContainer>
          <StyledLogo>
            <Link to='/'>
              <Logo />
            </Link>
          </StyledLogo>

          <SiteLinks>
            <div>
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
            </div>
          </SiteLinks>

          <SiteLinks>
            <div>
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
            </div>
          </SiteLinks>

          <MailList>
            <h3>Stay up to date from fashion.co</h3>
            <form onSubmit={handleMaillist}>
              <input type='text' placeholder='enter your email' />
              <button>Submit</button>
            </form>
          </MailList>
        </TopContainer>
        <BottomContainer>
          <SocialLinks>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </SocialLinks>

          <div>&copy; {new Date().getFullYear()} fashion.co</div>
        </BottomContainer>
      </MaxWidthContainer>
    </FooterContainer>
  );
};

export default withRouter(Footer);
