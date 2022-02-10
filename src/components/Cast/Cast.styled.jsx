import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
  margin-left: -20px;
  li {
    margin-bottom: 20px;
    margin-left: 20px;
    flex-basis: calc(100% / 5 - 20px);
  }
`;
