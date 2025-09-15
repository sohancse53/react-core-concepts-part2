import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] =useState(0);
    const [sixes,setSixes] =useState(0);

    const handleSingle = () =>{
        let newRun = runs + 1;
        setRuns(newRun);
    }
    const handleFour = () =>{
        let newRun = runs + 4;
        setRuns(newRun);
    }
    const handleSix = () =>{
        let countSixes = sixes + 1;
        let newRun = runs + 6;
        setRuns(newRun);
        setSixes(countSixes);
    }

 
 
 


    return(
        <div style={{
            border:'1px solid blue',
            marginBottom:'10px'
        }}>
            <h3>Player: bangladesh Batsman</h3>
            <p>six: {sixes}</p> 
            {
                runs>50 && <p>You score 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}