import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;

  padding: 1rem;
  padding-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 1rem;
`;

export const Information = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 1.75rem;
  }
`;

export const QuestionContainer = styled.div``;

export const QuestionTitle = styled.h3`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 1rem;
`;

export const QuestionUtterance = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 1.5rem;
`;

export const QuestionAnswers = styled.div`
  margin-top: 1.5rem;
`;

export const QuestionAnswer = styled.div`
  span {
  }

  p {
  }
`;
