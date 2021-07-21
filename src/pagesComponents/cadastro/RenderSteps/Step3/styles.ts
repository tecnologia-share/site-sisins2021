import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Questions = styled.h1`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 1.5rem;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;
