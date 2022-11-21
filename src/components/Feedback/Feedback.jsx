import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = () => {
    console.log(this.state.good);

    this.setState({ good: (this.state.good += 1) });
    console.log(this.state.good);
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
        <p className={css.statisticsCount}>Good: {this.state.good}</p>
        <p className={css.statisticsCount}>Neutral: {this.state.neutral}</p>
        <p className={css.statisticsCount}>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default Feedback;
