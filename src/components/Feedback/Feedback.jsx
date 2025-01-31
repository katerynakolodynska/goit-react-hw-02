import s from './Feedback.module.css';

const Feedback = ({ state, total, positive }) => {
  return (
    <div>
      <p className={s.item}>Good:{state.good}</p>
      <p className={s.item}>Neutral: {state.neutral}</p>
      <p className={s.item}>Bad:{state.bad}</p>
      <p className={s.item}>Total:{total}</p>
      <p className={s.item}>Positive:{positive}%</p>
    </div>
  );
};

export default Feedback;
