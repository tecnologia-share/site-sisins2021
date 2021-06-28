import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: 700px) {
    flex-direction: row-reverse;
  }
`;

export const FormSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px;
`;

export const FormSectionContent = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
`;

export const FooterSection = styled.section`
  width: 100%;
  background-color: blue;
  padding: 64px;

  @media (min-width: 700px) {
    width: min-content;
  }
`;
