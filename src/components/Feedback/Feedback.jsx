import { Component } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  handleIncrementFeedback = event => {
    const text = event.target.textContent;
    if (text === 'Good') {
      this.setState(curState => {
        return { good: curState.good + 1 };
      });
    }
    if (text === 'Neutral') {
      this.setState(curState => {
        return { neutral: curState.neutral + 1 };
      });
    }
    if (text === 'Bad') {
      this.setState(curState => {
        return { bad: curState.bad + 1 };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.feedbackWrapper}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.handleIncrementFeedback}
            onLeaveFeedback={'Please leave feedback'}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
          {total === 0 && <Notification message={'There is no feedback'} />}
        </Section>
      </div>
    );
  }
}

export default Feedback;
