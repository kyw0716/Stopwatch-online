import { useEffect, useRef, useState } from "react";

function Home(){
    const [milSecond, setMilSecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [toggle, setToggle] = useState(true);
    let timer = useRef();
    useEffect(()=>{
        if(milSecond === 100){
            setSecond(current => current + 1);
            setMilSecond(0);
        }
        if(second === 60){
            setMinute(current => current + 1);
            setSecond(0);
        }
        if(minute === 60){
            setHour(current => current + 1);
            setMinute(0);
        }
    },[milSecond, second, minute]);
    const cnt = () => {
        setMilSecond((current) => current + 1);
    }
    const start = () => {
        timer = setInterval(()=>{
            cnt();
        }, 10);
        setToggle((current) => !current);
    }
    const reset = () => {
        setMilSecond(0);
        setSecond(0);
        setHour(0);
        setMinute(0);
    }
    const pause = () => {
        clearInterval(timer.current);
        setToggle((current) => !current);
    }
    return(
        <div>
            <span>
                {hour < 10 ? `0${hour}` : hour}:
                {minute < 10 ? `0${minute}` : minute}:
                {second < 10 ? `0${second}` : second}.
                {milSecond < 10 ? `0${milSecond}` : milSecond}
            </span>
            {toggle ? <button onClick={start}>start</button> : <button onClick={pause}>pause</button>}
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Home;