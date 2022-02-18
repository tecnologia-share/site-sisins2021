import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
`;

export const ReasonsContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 2.2rem;
  }
`;

export const ReasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-style: solid;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-color: ${({ theme }) => theme.colors.grays[9]};
`;

export const CourseName = styled.h1`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 2.2rem;
  }
`;

export const Reason = styled.h2`
  font-size: 1.25rem;
`;

export const ReasonInput = styled.div`
  margin-top: 1rem;
  width: 100%;
  margin-right: 1rem;
`;

export const VideoLink = styled.h2`
  font-size: 1.25rem;
  margin-top: 2rem;
`;

export const VideoLinkInput = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: 0.25rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
