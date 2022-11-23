import React from 'react';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      {total > 0 && (
        <>
          <h2>Statistics</h2>
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
