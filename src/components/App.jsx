import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

function App() {
  const [state, setState] = useState(() => {
    const savedState = JSON.parse(localStorage.getItem('state'));
    return savedState || { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    return setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description />
      <Options
        state={state}
        feedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback state={state} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
