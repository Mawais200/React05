import { useState } from "react";
import { RandomNumber, Sum } from "./assets/Helper";

export default function Lottery() {
    const [ticket, setTicket] = useState(RandomNumber(3));
    
    const updateTicket = () => {
        setTicket(RandomNumber(3));
    };

    const isWinning = Sum(ticket) === 15;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
            <h1 className="text-3xl font-bold mb-4">Lottery Game</h1>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h2 className={`text-xl font-semibold ${isWinning ? 'text-green-400' : 'text-red-400'}`}>
                    {isWinning ? "Congratulations! You Won the Match " : "Try Again!"}
                </h2>
                <div className="flex justify-center space-x-4 text-2xl my-4">
                    {ticket.map((num, index) => (
                        <span key={index} className="p-3 bg-gray-700 rounded-lg">{num}</span>
                    ))}
                </div>
                <button 
                    onClick={updateTicket} 
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow">
                    Get New Ticket
                </button>
            </div>
        </div>
    );
}