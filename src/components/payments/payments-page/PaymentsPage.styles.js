import styled from 'styled-components';

export const Container = styled.div`
  width: max-content;
  margin: 0 auto;
  padding: 2rem;
`;

export const CardInfo = styled.p`
  color: red;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

export const Amount = styled.div`
  font-size: 2rem;
  margin: 2rem auto;

  span {
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export const OrderSuccess = styled.div`
  padding: 2rem;
  line-height: 4rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d8fad8;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
