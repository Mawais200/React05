import { useState } from "react";
import { RandomNumber,Sum } from "./assets/Helper";


export default  function  Lottery() {
    const [ticket, Setticket] = useState(RandomNumber(3));
    const updateTicket = () => {
        Setticket(RandomNumber(3));
    };

    let isWinning = Sum(ticket) === 15;

    
    return(
    
    <div>
        <h1>Lottery Game</h1>
            <div className="">
                <h1>{isWinning && "Congratulation You Won the Match"}</h1>
          
                <span>{ticket[0]}</span>
                <span>{ticket[0]}</span>
                <span>{ticket[0]}</span>
                <br />
                <button onClick={updateTicket}>Get New Ticket</button>
                
            </div>
            
            </div>
      
    )
}

