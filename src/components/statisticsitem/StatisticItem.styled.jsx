import styled from '@emotion/styled';

const colors = ['yellow', 'red', 'blue', 'green', 'orange', 'brown'];

export const StatCard = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${p => colors[p.id[3]]};
`;

export const StatCardLabel = styled.span`
  color: white;
  margin-bottom: 6px;
`;
export const StatCardPercentage = styled.span`
  color: white;
  font-size: 1.2em;
`;
