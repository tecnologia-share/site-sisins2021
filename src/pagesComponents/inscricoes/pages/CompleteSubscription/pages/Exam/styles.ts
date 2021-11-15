import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;

  padding: 1rem;
  padding-top: 2rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 65rem;

  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Information = styled.p`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 0.5rem;

  &:last-of-type {
    margin-bottom: 1.75rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    &:last-of-type {
      margin-bottom: 3rem;
    }
  }
`;

export const QuestionContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grays[6]};
  border-radius: 5px;

  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: 3rem;
    border-radius: 15px;
    padding: 2rem;
  }
`;

export const QuestionTitle = styled.h3`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
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

interface QuestionAnswerProps {
  active?: boolean;
}

export const QuestionAnswer = styled.div<QuestionAnswerProps>`
  display: flex;
  cursor: pointer;

  span {
    flex-shrink: 0;
    padding: 0.5rem;
    padding-left: 0;
    width: 1.5rem;
    border-right: 1px solid ${({ theme }) => theme.colors.grays[6]};

    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme, active }) =>
      active ? theme.colors.blues[9] : theme.colors.grays[6]};
  }

  p {
    padding: 0.5rem;
    padding-left: 1rem;

    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme, active }) =>
      active ? theme.colors.blues[9] : theme.colors.grays[6]};
  }

  &:hover {
    span,
    p {
      color: ${({ theme }) => theme.colors.blues[9]};
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
`;
