import styled from 'styled-components';

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.grays[11]};
`;
