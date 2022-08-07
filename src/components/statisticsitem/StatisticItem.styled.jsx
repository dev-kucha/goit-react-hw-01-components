import styled from '@emotion/styled';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'brown'];

export const StatCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${p => colors[p.id[3]]};
`;

export const StatCardLabel = styled.span``;
export const StatCardPercentage = styled.span``;
