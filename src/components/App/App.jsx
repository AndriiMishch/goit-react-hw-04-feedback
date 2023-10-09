import { useState, useEffect, useRef } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notifications';

import { RatingButton } from 'components/FeedbackOptions/FeedbackOptions.styled';
import { AppContainer } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const mount = useRef(true);

  useEffect(() => {
    if (mount.current) {
      mount.current = false;
      return;
    }

    localStorage.setItem('feedback', JSON.stringify({ good, neutral, bad }));
  }, [good, neutral, bad]);

  useEffect(() => {
    const parsedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (parsedFeedback) {
      const { good, neutral, bad } = parsedFeedback;
      setGood(good);
      setNeutral(neutral);
      setBad(bad);
    }
  }, []);

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const totalFeedback = good + neutral + bad;

  const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

  const feedbackClickHadler = type => {
    switch (type) {
      case 'good':
        setGood(prev => prev + 1);
        return;

      case 'bad':
        setBad(prev => prev + 1);
        return;

      case 'neutral':
        setNeutral(prev => prev + 1);
        return;

      default:
        throw new Error(`Unknown type of feedback: ${type}`);
    }
  };

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={feedbackClickHadler}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />

            <RatingButton
              style={{ float: 'right' }}
              type="button"
              onClick={resetFeedback}
            >
              Reset
            </RatingButton>
          </>
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
    </AppContainer>
  );
}