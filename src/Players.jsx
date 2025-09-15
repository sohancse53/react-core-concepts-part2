import { useEffect, useState } from "react"

export default function Players(){

    const [players,setPlayers]=useState(0);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data => setPlayers(data))
    },[])

    return(
        <div className="borderedCard">
            <h4>Players {players.length}</h4>
           <ol>
             {
                players.map(player => <li>{player.name}</li>)
            }
           </ol>
        </div>
    )
}