import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Stats = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  width: 250px;
`;

export const StatsItem = styled.li`
  padding: 8px;
`;

export const StatsItemLabel = styled.span`
  display: block;
`;
export const StatsQuantity = styled.span`
  display: block;
`;
