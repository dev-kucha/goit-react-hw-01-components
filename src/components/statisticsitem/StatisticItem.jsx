import PropTypes from 'prop-types';
import {
  StatCard,
  StatCardLabel,
  StatCardPercentage,
} from './StatisticItem.styled';

const StatisticsItem = function ({ item: { label, percentage, id } }) {
  return (
    <StatCard className="item" id={id}>
      <StatCardLabel className="label">{label}</StatCardLabel>
      <StatCardPercentage className="percentage">
        {percentage}%
      </StatCardPercentage>
    </StatCard>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
