import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsitem/StatisticItem';

const Statistics = function (p) {
  const { title, stats } = p;
  //   console.log(p);
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(item => (
          <StatisticsItem item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
