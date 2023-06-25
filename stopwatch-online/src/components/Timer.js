import { useEffect, useState, useRef, useMemo } from 'react';
import sound from '../static/alarm.mp3';
import styles from './Timer.module.css';

function Timer({ onClickB }) {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [interv, setInterv] = useState();
  const [change, setChange] = useState(true);

  const audio = useMemo(() => new Audio(sound), []);

  const alarm = () => {
    audio.play();

    setTimeout(() => {
      const intervForAlarm = setInterval(() => {
        audio.play();
      }, 4000);

      clearInterval(intervForAlarm);
    }, 12000);
  };

  const reset = () => {
    clearInterval(interv);
    setSecond(0);
    setMinute(1);
    setChange(true);
  };

  const timerStart = () => {
    setSecond((current) => current - 1);
  };

  const start = () => {
    setInterv(
      setInterval(() => {
        timerStart();
      }, 1000)
    );
  };

  useEffect(() => {
    if (minute === -1) {
      alarm();
      reset();
    }
    if (second === -1) {
      setMinute((current) => current - 1);
      setSecond(59);
    }
  }, [minute, second]);

  useEffect(() => {
    audio.load();
  }, [audio]);

  return (
    <div className={styles.background}>
      {change ? (
        <div className={styles.container}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              setChange(false);
            }}
          >
            <div className={styles.formDiv}>
              <input
                className={styles.input}
                onChange={(e) => setMinute(e.target.value)}
                value={minute}
                id="minute"
                type="number"
              />
              <span className={styles.middleSpan}>:</span>
              <input
                className={styles.input}
                onChange={(e) => setSecond(e.target.value)}
                value={second}
                id="second"
                type="number"
              />
            </div>
            <button className={styles.btn} onClick={start}>
              start
            </button>
          </form>
          <button className={styles.homeBtn} onClick={onClickB}>
            Home
          </button>
        </div>
      ) : (
        <div className={styles.timerBox}>
          <div className={styles.numberBox}>
            <span>{String(minute).padStart(2, '0')}</span>
            &nbsp;:&nbsp;
            <span>{String(second).padStart(2, '0')}</span>
          </div>
          <button className={styles.btn} onClick={reset}>
            reset
          </button>
          <button className={styles.homeBtn} onClick={onClickB}>
            Home
          </button>
        </div>
      )}
    </div>
  );
}

export default Timer;
