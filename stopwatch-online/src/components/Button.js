import styles from "../routes/Home.module.css";

function Button({toggle, start, change, pause, resume, reset}) {
    return (
        <div className={styles.right}>
            {toggle ?
                <button onClick={start} className={styles.btnStart}>start</button> :
                <div className={styles.twoButtonContainer}>
                    {change ? <button onClick={pause} className={styles.btnPause}>pause</button> : <button onClick={resume} className={styles.btnResume}>resume</button>}
                    <button onClick={reset} className={styles.btnReset}>reset</button>
                </div>
            }
        </div>
    );
}

export default Button;