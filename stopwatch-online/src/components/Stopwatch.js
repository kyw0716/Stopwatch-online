import { useEffect, useState } from "react";

function Stopwatch({onClickB}) {

    const [milSecond, setMilSecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [interv, setInterv] = useState();
    const [change, setChange] = useState(true);
    
    useEffect(() => {
        if (milSecond === 100) {
            setSecond(current => current + 1);
            setMilSecond(0);
        }
        if (second === 60) {
            setMinute(current => current + 1);
            setSecond(0);
        }
        if (minute === 60) {
            setHour(current => current + 1);
            setMinute(0);
        }
    }, [milSecond, second, minute]);
    const cnt = () => {
        setMilSecond((current) => current + 1);
    }
    const start = () => {
        setInterv(setInterval(() => {
            cnt();
        }, 10));
        setToggle((current) => !current);
    }
    const reset = () => {
        setMilSecond(0);
        setSecond(0);
        setHour(0);
        setMinute(0);
        setInterv(clearInterval(interv));
        setChange(true);
        setToggle(true);
    }
    const pause = () => {
        setInterv(clearInterval(interv));
        setChange(current => !current);
    }
    const resume = () => {
        setInterv(setInterval(() => {
            cnt();
        }, 10));
        setChange(current => !current);
    }


    return (
        <div>
            <div >
                <span>
                    <span>{hour < 10 ? `0${hour}` : hour}</span>:
                    <span>{minute < 10 ? `0${minute}` : minute}</span>:
                    <span>{second < 10 ? `0${second}` : second}</span>.
                    <span>{milSecond < 10 ? `0${milSecond}` : milSecond}</span>
                </span>
            </div>
            <div>
                {toggle ?
                    <button onClick={start}>start</button> :
                    <div>
                        {change ? <button onClick={pause}>pause</button> : <button onClick={resume}>resume</button>}
                        <button onClick={reset}>reset</button>
                    </div>
                }
                <button onClick={onClickB}>Home</button>
            </div>
        </div>
    );
}

export default Stopwatch;