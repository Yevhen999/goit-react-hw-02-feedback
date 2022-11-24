import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options }) => {
  console.log({ options });
  return (
    <div className={css.btnWrapper}>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.handleIncrementFeedback}
      >
        Good
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.handleIncrementFeedback}
      >
        Neutral
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.handleIncrementFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
