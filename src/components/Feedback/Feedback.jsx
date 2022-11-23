import { Component } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
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
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
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
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          percentage={percentage}
        />
      </div>
    );
  }
}

export default Feedback;
