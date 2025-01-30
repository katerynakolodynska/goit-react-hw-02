import s from './Options.module.css';

const Options = ({ feedback, total, reset }) => {
  return (
    <div className={s.containerBtn}>
      <button className={s.button} onClick={() => feedback('good')}>
        Good
      </button>
      <button className={s.button} onClick={() => feedback('neutral')}>
        Neutral
      </button>
      <button className={s.button} onClick={() => feedback('bad')}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.button} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
