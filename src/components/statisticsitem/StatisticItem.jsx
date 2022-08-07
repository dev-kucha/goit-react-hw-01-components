import PropTypes from 'prop-types';

const StatisticsItem = function ({ item: { label, percentage } }) {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default StatisticsItem;
