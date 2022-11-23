import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options }) => {
  return (
    <div className={css.btnWrapper}>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.onGoodFeedback}
      >
        Good
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.onNeutralFeedback}
      >
        Neutral
      </button>
      <button
        className={css.btnFeedback}
        type="button"
        onClick={options.onBadFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
