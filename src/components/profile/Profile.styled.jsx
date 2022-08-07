import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 1.6em;
  font-weight: bold;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Location = styled.p`
  color: grey;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StatsItemLabel = styled.span`
  margin-bottom: 8px;
  color: grey;
`;
export const StatsQuantity = styled.span`
  font-size: 1.2em;
`;
