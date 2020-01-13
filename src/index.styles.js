import styled from 'styled-components';

export const PageContainer = styled.div`
  margin-top: ${({ theme }) => theme.navHt};
  padding: 0 50px;
  max-width: 1450px;
  margin: ${({ theme }) => theme.navHt} auto 0 auto;
  width: 100%;
  text-align: center;

`;

export const MaxWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
`;
