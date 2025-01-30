import s from './Feedback.module.css';

const Feedback = ({ state, total }) => {
  return (
    <div>
      <p className={s.item}>Good:{state.good}</p>
      <p className={s.item}>Neutral: {state.neutral}</p>
      <p className={s.item}>Bad:{state.bad}</p>
      <p className={s.item}>Total:{total}</p>
      <p className={s.item}>
        Positive:{Math.round((state.good / total) * 100)}%
      </p>
    </div>
  );
};

export default Feedback;
