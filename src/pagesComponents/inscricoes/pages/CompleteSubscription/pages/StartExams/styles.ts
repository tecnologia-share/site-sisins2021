import styled from 'styled-components';
import { ExamCard } from './ExamCard';

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  min-height: 100%;
  padding: 3rem 1rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    text-align: center;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    & > h1 {
      font-size: 2rem;
      margin-bottom: 5rem;
    }
  }
`;

export const StyledExamCard = styled(ExamCard)`
  margin-bottom: 1rem;
`;
