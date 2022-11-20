import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  super() {}
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    console.log('increase');
    setTimeout(() => {
      console.log(event.target);
    }, 1000);
  };

  render() {
    return (
      <div className={css.feedbackWrapper}>
        <h1>Please leave feedback</h1>
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
      </div>
    );
  }
}

export default Feedback;
