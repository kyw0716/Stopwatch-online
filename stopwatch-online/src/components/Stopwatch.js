import styles from "../routes/Home.module.css";

function Stopwatch({hour, minute, second, milSecond}) {
    return (
        <div className={styles.left}>
            <span>
                <span className={styles.spanBox}>{hour < 10 ? `0${hour}` : hour}</span>:
                <span className={styles.spanBox}>{minute < 10 ? `0${minute}` : minute}</span>:
                <span className={styles.spanBox}>{second < 10 ? `0${second}` : second}</span>.
                <span className={styles.spanBox}>{milSecond < 10 ? `0${milSecond}` : milSecond}</span>
            </span>
        </div>
    );
}

export default Stopwatch;