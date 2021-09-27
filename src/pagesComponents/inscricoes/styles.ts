import SVG from 'react-inlinesvg';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-template-rows: initial;
    grid-template-columns: min-content 1fr;
    grid-gap: 1.5rem;
  }
`;

export const SectionOptions = styled.section`
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-row: 1;
  width: 100%;
  padding: 0 1rem 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.blacks[1]};
  border-radius: 0px 0px 15px 15px;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-row: initial;
    grid-column: 1;
    width: 356px;
    height: 100%;
    padding: 0 1.5rem 0.5rem 2rem;
    box-shadow: initial;
    border-radius: initial;
  }
`;

export const SectionCourses = styled.section`
  grid-row: 2;
  overflow: auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    grid-row: initial;
    grid-column: 2;
    padding-right: 2rem;
  }
`;

export const TextOption = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 0.75rem;
  width: 100%;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
  }
`;

export const SelectedCardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  margin-bottom: 0.5rem;
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-template-columns: initial;
    grid-gap: initial;
    margin-bottom: 2rem;
    margin-top: 0;
  }
`;

export const CardSelectCourseContainer = styled.div`
  width: 100%;
`;

export const SwapContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.blacks[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.blue};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blues[5]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.blues[4]};
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 3.75rem;
    height: 3.75rem;
    position: initial;
    top: initial;
    left: initial;
    transform: initial;
    margin: 2rem 0;
  }
`;

export const SwapIcon = styled(SVG)`
  width: 1rem;
  height: 1rem;

  path {
    fill: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 1rem;
  border-radius: 0.5rem;
  width: calc(100% - 2rem);
  padding: 1rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  margin: 1rem;
  margin-bottom: 0;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
    margin: 0;
    margin-top: 2rem;
    width: 100%;
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 1rem;
  margin-left: 1rem;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 1.5rem;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
  width: 75%;
  margin: 1.5rem 0;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
