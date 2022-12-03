import React from 'react';
import PropTypes from 'prop-types';
import css from '../Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      {total > 0 && (
        <>
          <p className={css.statisticsCount}>Good: {good}</p>
          <p className={css.statisticsCount}>Neutral: {neutral}</p>
          <p className={css.statisticsCount}>Bad: {bad}</p>
          <p className={css.statisticsCount}>Total: {total}</p>
          <p className={css.statisticsCount}>
            Positive feedback: {percentage}%
          </p>
        </>
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};
