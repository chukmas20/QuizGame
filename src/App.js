import './App.css';
import moneyPyramid from "./data/moneyPyramid";
import data from "./data/data";

import React, {useState, useEffect} from 'react'
import Trivial from './components/Trivial';
import Timer from './components/Timer';
import Start from "./components/Start";



function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(" 0 ₦");



   useEffect(()=>{
     questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
   }, [questionNumber])
  return (
    <div className="App">
      {username ? (
        <>
            <div className="main">
         {stop ? <h1 className="endText"> You Won :{earned}</h1> : (
           <>
            <div className="top">
            <div className="timer"> <Timer setStop={setStop} questionNumber={questionNumber}/> </div>
         </div>
         <div className="bottom"> 
             <Trivial data={data}
              setStop={setStop}
               setQuestionNumber={setQuestionNumber}
               questionNumber={questionNumber}
               /> 
         </div>
         </>
         )}
      </div>
      <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m)=>(
               <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} key={m.id}>
               <span className="moneyListItemNumber">{m.id}</span>
               <span className="moneyListItemAmount">{m.amount}</span>
           </li>
            ))}
          </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername} />}
    </div>
  );
}

export default App;
