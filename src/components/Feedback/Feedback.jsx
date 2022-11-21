import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGoodFeedback = () => {
    this.setState(curState => {
      return { good: curState.good + 1 };
    });
  };

  handleIncrementNeutralFeedback = () => {
    this.setState(curState => {
      return { neutral: curState.neutral + 1 };
    });
  };

  handleIncrementBadFeedback = () => {
    this.setState(curState => {
      return { bad: curState.bad + 1 };
    });
  };

  render() {
    return (
      <div className={css.feedbackWrapper}>
        <h2>Please leave feedback</h2>
        <div className={css.btnWrapper}>
          <button
            className={css.btnFeedback}
            type="button"
            onClick={this.handleIncrementGoodFeedback}
          >
            Good
          </button>
          <button
            className={css.btnFeedback}
            type="button"
            onClick={this.handleIncrementNeutralFeedback}
          >
            Neutral
          </button>
          <button
            className={css.btnFeedback}
            type="button"
            onClick={this.handleIncrementBadFeedback}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p className={css.statisticsCount}>Good: {this.state.good}</p>
        <p className={css.statisticsCount}>Neutral: {this.state.neutral}</p>
        <p className={css.statisticsCount}>Bad: {this.state.bad}</p>
        <p className={css.statisticsCount}>
          Total: {this.state.good + this.state.neutral + this.state.bad}
        </p>
        <p className={css.statisticsCount}>
          Positive feedback:{' '}
          {(this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100}
          %
        </p>
      </div>
    );
  }
}

export default Feedback;
