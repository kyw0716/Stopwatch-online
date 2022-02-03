import styles from "./Select.module.css";

function Select({onClickS, onClickT}){
    return(
        <div className={styles.container}>
            <button className={styles.rightBtn} onClick={onClickS}>
                stopwatch
            </button>
            <button className={styles.leftBtn} onClick={onClickT}>
                timer
            </button>
        </div>
    );
}

export default Select;