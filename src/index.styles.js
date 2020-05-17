import styled from 'styled-components';
import sizes from 'sizes';

export const PageContainer = styled.div`
  padding: 15px ${({ theme }) => theme.padding.xxl} 30px
    ${({ theme }) => theme.padding.xxl};
  max-width: 1450px;
  margin: ${({ theme }) => theme.navHt} auto 0 auto;
  width: 100%;
  text-align: center;
  color: ${({theme}) => theme.colors.black};

  @media ${sizes.md} {
    padding: 15px ${({ theme }) => theme.padding.md} 30px
      ${({ theme }) => theme.padding.md};
  }

  @media ${sizes.mob} {
    padding: 15px ${({ theme }) => theme.padding.mob} 30px
      ${({ theme }) => theme.padding.mob};
  }
`;

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
`;
