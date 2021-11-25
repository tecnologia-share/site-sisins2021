import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: auto;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const FormSection = styled.section`
  width: 100%;
  padding: 2rem;
  padding-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    overflow: auto;
    padding-top: 4rem;
    grid-row: 1;
    grid-column: 2;
  }
`;

export const FormSectionContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    max-width: 28rem;
    margin: 0 auto;
  }
`;

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

export const FooterSection = styled.section`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.colors.blues[8]};
  padding: 1rem;

  display: none;
  /* grid-template-columns: 7.75rem minmax(0, 1fr); */
  /* gap: 1rem; */

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    gap: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    padding: 4rem;
    grid-row: 1;
    grid-column: 1;
  }
`;

export const LottieWrapper = styled.div`
  display: flex;
  width: 7.75rem;

  > * {
    border-radius: 1rem;
    width: 100% !important;
    height: auto !important;
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 50%;
    margin-bottom: 4rem;
  }
`;
