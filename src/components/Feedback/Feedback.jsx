import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  super() {}
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button
          className={css.btnFeedback}
          type="button"
          onClick={() => {
            console.log('Клік');
          }}
        >
          Good
        </button>
        <button
          className={css.btnFeedback}
          type="button"
          onClick={() => {
            console.log('Клік');
          }}
        >
          Neutral
        </button>
        <button
          className={css.btnFeedback}
          type="button"
          onClick={() => {
            console.log('Клік');
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default Feedback;
