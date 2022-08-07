import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsitem/StatisticItem';
import { StatisticsCard, StatList } from './Statistics.styled';

const Statistics = function (p) {
  const { title, stats } = p;
  //   console.log(p);
  return (
    <StatisticsCard className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <StatList className="stat-list">
        {stats.map(item => (
          <StatisticsItem item={item} key={item.id} />
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
