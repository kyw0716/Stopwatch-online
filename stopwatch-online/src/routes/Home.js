import { useEffect, useState } from "react";
import Button from "../components/Button";
import Stopwatch from "../components/Stopwatch";
import styles from "./Home.module.css";

function Home(){
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
        setInterv(setInterval(()=>{
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
        setInterv(setInterval(()=>{
            cnt();
        }, 10));
        setChange(current => !current);
    }
    return(
        <div className={styles.container}>
            <Stopwatch hour={hour} minute={minute} milSecond={milSecond} second={second}/>
            <Button toggle={toggle} start={start} change={change} pause={pause} resume={resume} reset={reset} />
        </div>
    );
}

export default Home;