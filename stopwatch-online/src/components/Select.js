function Select({onClickS, onClickT}){
    return(
        <div>
            <button onClick={onClickS}>
                stopwatch
            </button>
            <button onClick={onClickT}>
                timer
            </button>
        </div>
    );
}

export default Select;