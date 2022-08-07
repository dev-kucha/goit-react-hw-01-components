import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  box-shadow: 10px 5px 5px lightgrey;
  padding-left: 15px;
  padding-right: 15px;
  margin: 20px;
`;

export const Indicator = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  margin-right: 15px;
`;
