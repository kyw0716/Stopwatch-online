import { useEffect, useState } from "react";

function Home({timer}){
    const [milSecond, setMilSecond] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [interv, setInterv] = useState();
    const [change, setChange] = useState(true);
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
        setInterv(timer = setInterval(()=>{
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
        setToggle((current) => !current);
    }
    const pause = () => {
        setInterv(clearInterval(interv));
        setChange(current => !current);
    }
    const resume = () =>{
        setInterv(timer = setInterval(()=>{
            cnt();
        }, 10));
        setChange(current => !current);
    }
    return(
        <div>
            <span>
                {hour < 10 ? `0${hour}` : hour}:
                {minute < 10 ? `0${minute}` : minute}:
                {second < 10 ? `0${second}` : second}.
                {milSecond < 10 ? `0${milSecond}` : milSecond}
            </span>
            {toggle ? 
                <button onClick={start}>start</button> : 
                <div>
                    {change ? <button onClick={pause}>pause</button> : <button onClick={resume}>resume</button> }
                    <button onClick={reset}>reset</button>
                </div>
            }
        </div>
    );
}

export default Home;