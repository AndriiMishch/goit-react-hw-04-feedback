import PropTypes from 'prop-types';
import { Stats, StatsType } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Stats>
      <StatsType>
        Good: <span>{good}</span>
      </StatsType>
      <StatsType>
        Neutral: <span>{neutral}</span>
      </StatsType>
      <StatsType>
        Bad: <span>{bad}</span>
      </StatsType>
      <StatsType>
        Total: <span>{total}</span>
      </StatsType>
      <StatsType>
        Positive percentage: <span>{positivePercentage.toFixed()}%</span>
      </StatsType>
    </Stats>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};