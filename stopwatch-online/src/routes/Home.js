import { useState } from "react";
import Select from "../components/Select";
import Stopwatch from "../components/Stopwatch";
import Timer from "../components/Timer";

function Home() {
    const [selectPage, setSelectPage] = useState("default");

    const onClickS = () => {
        setSelectPage("stopwatch");
    }
    const onClickT = () => {
        setSelectPage("timer");
    }
    const onClickB = () => {
        setSelectPage("default");
    }

    return (
        <>
        {
            selectPage === "default" ? 
                <Select onClickS={onClickS} onClickT={onClickT}/> :
                selectPage === "stopwatch" ?
                    <Stopwatch onClickB={onClickB}/>
                    :
                    <Timer onClickB={onClickB}/>
        }
        </>
    );
}

export default Home;