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
        // <div className={styles.container}>
        //     {select === "default" ? <>press button</> :
        //         select === "stopwatch" ? 
        //         <>
        //             <Stopwatch hour={hour} minute={minute} milSecond={milSecond} second={second} />
        //             <Button toggle={toggle} start={start} change={change} pause={pause} resume={resume} reset={reset} />
        //         </> :
        //         <>
        //             timer
        //         </>

        //     }
        //     <div className={styles.frame}></div>
        //     <div className={styles.selectBtn}>
        //         <button onClick={stopwatch}>stopwatch</button>
        //         <button onClick={timer}>timer</button>
        //     </div>
        // </div>
    );
}

export default Home;