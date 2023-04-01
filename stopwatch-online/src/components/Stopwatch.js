import { useState } from 'react';
import styles from './Stopwatch.module.css';
import { getTime, getTimeDifference } from '../utils/TimeUtils';

function Stopwatch({ onClickB }) {
  const [toggle, setToggle] = useState(true);
  const [interv, setInterv] = useState();
  const [change, setChange] = useState(true);

  const [startTime, setStartTime] = useState();
  const [timeDiff, setTimeDiff] = useState();
  const [pauseTime, setPauseTime] = useState(0);

  const start = () => {
    const time = getTime();

    setStartTime(time);

    setInterv(
      setInterval(() => {
        const currentTime = getTime();
        setTimeDiff(getTimeDifference(Number(time), Number(currentTime)));
      }, 10)
    );

    setToggle((current) => !current);
  };

  const reset = () => {
    setTimeDiff();
    setInterv(clearInterval(interv));
    setChange(true);
    setToggle(true);
  };

  const pause = () => {
    setInterv(clearInterval(interv));
    setPauseTime(getTime());
    setChange((current) => !current);
  };

  const resume = () => {
    const restartTime = getTime();
    const newStartTime = startTime + (restartTime - pauseTime);

    setInterv(
      setInterval(() => {
        const currentTime = getTime();

        setTimeDiff(
          getTimeDifference(Number(newStartTime), Number(currentTime))
        );
      }, 10)
    );

    setStartTime(newStartTime);
    setChange((current) => !current);
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <span>
          <span>{timeDiff ? timeDiff.hours : '00'}</span>:
          <span>{timeDiff ? timeDiff.minutes : '00'}</span>:
          <span>{timeDiff ? timeDiff.seconds : '00'}</span>.
          <span>{timeDiff ? timeDiff.milliSeconds : '00'}</span>
        </span>
        <div className={styles.btnContainer}>
          {toggle ? (
            <button className={styles.btn} onClick={start}>
              start
            </button>
          ) : (
            <div className={styles.btnPlusContainer}>
              {change ? (
                <button className={styles.btnPlus} onClick={pause}>
                  pause
                </button>
              ) : (
                <button className={styles.btnPlus} onClick={resume}>
                  resume
                </button>
              )}
              <button className={styles.btnPlus} onClick={reset}>
                reset
              </button>
            </div>
          )}
          <button className={styles.homeBtn} onClick={onClickB}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
