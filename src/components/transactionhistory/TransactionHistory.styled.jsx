import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  width: 380px;
`;

export const TableHeadRow = styled.tr`
  background-color: aqua;
`;

export const TableHead = styled.th`
  padding: 8px;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: lightgray;
  }
`;

export const TableData = styled.td`
  padding: 8px;
`;
