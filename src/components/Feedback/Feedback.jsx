import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleIncrement = event => {
    console.log('increase');
    setTimeout(() => {
      console.log(event.target.textContent);
    }, 1000);
  };

  render() {
    return (
      <div className={css.feedbackWrapper}>
        <h2>Please leave feedback</h2>
        <div className={css.btnWrapper}>
          <button
            className={css.btnFeedback}
            type="button"
            onClick={this.handleIncrement}
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
        <h2>Statistics</h2>
        <p className={css.statisticsCount}>Good:</p>
        <p className={css.statisticsCount}>Neutral:</p>
        <p className={css.statisticsCount}>Bad:</p>
      </div>
    );
  }
}

export default Feedback;
