// import "./App.css";
// import Board from "./components/Board/Board";
// import { useState } from "react";

// function App() {
//   const [winner, setWinner] = useState('');
//   const [reset, setReset] = useState(false);
//   console.log(setWinner)

//   return (
//     <div className="App">
//       <Board reset={reset} setReset={setReset} winner={winner}
// 				setWinner={setWinner} />
//       <div className="player-detail">
//         <div className="player">Player 1: X</div>
//         <div className="player">Player 2: O</div>
//       </div>
//     </div>
//   );
// }

// export default App;

import Board from "./components/Board/Board";

import "./App.css";

import { useState } from "react";

function App() {
  const [reset, setReset] = useState(false);

  const [winner, setWinner] = useState("");

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      {winner ? (
        <div className="pop-up">
          <hi>{winner}</hi>
          <button onClick={resetBoard} className="button">Reset</button>
        </div>
      ) : null}
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <div className="player-detail">
        <div className="player">Player 1: X</div>
        <div className="player">Player 2: O</div>
      </div>
    </div>
  );
}

export default App;
