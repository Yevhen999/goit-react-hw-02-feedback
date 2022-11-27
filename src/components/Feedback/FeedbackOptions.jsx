import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <>
      <div className={css.btnWrapper}>
        <button className={css.btnFeedback} type="button" onClick={options}>
          Good
        </button>
        <button className={css.btnFeedback} type="button" onClick={options}>
          Neutral
        </button>
        <button className={css.btnFeedback} type="button" onClick={options}>
          Bad
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
