import styles from "../routes/Home.module.css";

function Stopwatch({hour, minute, second, milSecond}) {
    return (
        <div className={styles.left}>
            <span>
                {hour < 10 ? `0${hour}` : hour}:
                {minute < 10 ? `0${minute}` : minute}:
                {second < 10 ? `0${second}` : second}.
                {milSecond < 10 ? `0${milSecond}` : milSecond}
            </span>
        </div>
    );
}

export default Stopwatch;