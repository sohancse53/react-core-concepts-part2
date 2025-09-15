import { useState } from "react"

export default function Bowler(){
    const [balls,setBall]=useState(0)
    const [overs,setOver]=useState(0)

    const handleBall  = () =>{
        let countBall = balls + 1;
        setBall(countBall);
        if(countBall === 6 ){
            handleOver();
            setBall(0)
        }
        else{
           countBall = balls + 1 
        }
    }
    
    const handleOver  = () =>{
        let countOvers = overs + 1;
        setOver(countOvers);
        
    }


    return(
        <div style={
            {
            border:'1px solid green',
            marginBottom:'10px'
        }
        }>
            <h3>Bowler</h3>
            <p>Overs: {overs} </p>
            <p>Legal Ball: {balls} </p>
            <button onClick={handleBall}>Ball</button>
        </div>
    )
}






