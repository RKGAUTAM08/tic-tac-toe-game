import "./Board.css";
import { useState, useRef, useEffect } from "react";

const Board = ({ reset, setReset, winner, setWinner }) => {
  const boardRef = useRef(null);

  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState(0);

  const play = (e, index) => {
    if (data[index - 1] === "" && winner === "") {
      const current = turn === 0 ? "X" : "O";
      data[index - 1] = current;
      e.target.innerText = current;
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  useEffect(() => {
    setData(["", "", "", "", "", "", "", "", ""]);

    const cells = boardRef.current.children;
    for (let i = 0; i < 9; i++) {
      cells[i].innerText=''
    }

    setTurn(0);

    setWinner("");
    setReset(false);
  }, [reset, setReset, setWinner]);

  useEffect(() => {
    const checkRows = () => {
      let ans = false;
      for (let i = 0; i < 9; i += 3) {
        ans |=
          data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
      }
      return ans;
    };

    const checkCols = () => {
      let ans = false;
      for (let i = 0; i < 3; i++) {
        ans |=
          data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
      }
      return ans;
    };
    const checkDiagonals = () => {
      return (
        (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
        (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
      );
    };

    const checkWin = () => {
      return checkRows() || checkCols() || checkDiagonals();
    };

    const checkTie = () => {
      let count = 0;
      data.forEach((cell) => {
        if (cell !== "") {
          count++;
        }
      });
      return count === 9;
    };

    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      setWinner("It's a Tie!");
    }
  });

  return (
    <div ref={boardRef} className="board">
      <div className="cell" onClick={(e) => play(e, 1)}></div>
      <div className="cell" onClick={(e) => play(e, 2)}></div>
      <div className="cell" onClick={(e) => play(e, 3)}></div>
      <div className="cell" onClick={(e) => play(e, 4)}></div>
      <div className="cell" onClick={(e) => play(e, 5)}></div>
      <div className="cell" onClick={(e) => play(e, 6)}></div>
      <div className="cell" onClick={(e) => play(e, 7)}></div>
      <div className="cell" onClick={(e) => play(e, 8)}></div>
      <div className="cell" onClick={(e) => play(e, 9)}></div>
    </div>
  );
};

export default Board;
