import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHeadRow,
  TableHead,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

const TransactionHistory = function ({ items }) {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <TableHeadRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableHeadRow>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
