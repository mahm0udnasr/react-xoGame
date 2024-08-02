// import "./BoxStyle.css";
// import crossIcon from "../assets/cross.png";
// import circleIcon from "../assets/circle.png";
// import { useRef, useState } from "react";

// let BoxesData = ["", "", "", "", "", "", "", "", ""];

// export default function Box() {
//   let [count, setCount] = useState(0);
//   let [lock, setLock] = useState(false);
//   let titleRef = useRef(null);
//   let box1 = useRef(null);
//   let box2 = useRef(null);
//   let box3 = useRef(null);
//   let box4 = useRef(null);
//   let box5 = useRef(null);
//   let box6 = useRef(null);
//   let box7 = useRef(null);
//   let box8 = useRef(null);
//   let box9 = useRef(null);
//   let boxList = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
//   const resetBtnHandelClick = () => {
//     setLock(false);
//     BoxesData = ["", "", "", "", "", "", "", "", ""];
//     titleRef.current.innerHTML = `Tic Tac Toe In<span>React</span>`;
//     boxList.map((e) => {
//       e.current.innerHTML = "";
//     });
//   };
//   const boxToggleHandelClick = (event, index) => {
//     if (lock) {
//       return 0;
//     }
//     if (count % 2 == 0) {
//       event.target.innerHTML = `<img src="${crossIcon}" alt="Cross Player" loading="lazy"/>`;
//       BoxesData[index] = "x";
//       setCount(++count);
//     } else {
//       event.target.innerHTML = `<img src="${circleIcon}" alt="Circle Player" loading="lazy"/>`;
//       BoxesData[index] = "o";
//       setCount(++count);
//     }
//     checkWin();
//   };
//   const checkWin = () => {
//     if (
//       BoxesData[0] == BoxesData[1] &&
//       BoxesData[1] == BoxesData[2] &&
//       BoxesData[2] != ""
//     ) {
//       playerWon(BoxesData[0]);
//     } else if (
//       BoxesData[3] == BoxesData[4] &&
//       BoxesData[4] == BoxesData[5] &&
//       BoxesData[5] != ""
//     ) {
//       playerWon(BoxesData[3]);
//     } else if (
//       BoxesData[6] == BoxesData[7] &&
//       BoxesData[7] == BoxesData[8] &&
//       BoxesData[8] != ""
//     ) {
//       playerWon(BoxesData[6]);
//     } else if (
//       BoxesData[0] == BoxesData[4] &&
//       BoxesData[4] == BoxesData[8] &&
//       BoxesData[8] != ""
//     ) {
//       playerWon(BoxesData[0]);
//     } else if (
//       BoxesData[2] == BoxesData[4] &&
//       BoxesData[4] == BoxesData[6] &&
//       BoxesData[6] != ""
//     ) {
//       playerWon(BoxesData[2]);
//     } else if (
//       BoxesData[0] == BoxesData[3] &&
//       BoxesData[3] == BoxesData[6] &&
//       BoxesData[6] != ""
//     ) {
//       playerWon(BoxesData[0]);
//     } else if (
//       BoxesData[1] == BoxesData[4] &&
//       BoxesData[4] == BoxesData[7] &&
//       BoxesData[7] != ""
//     ) {
//       playerWon(BoxesData[1]);
//     } else if (
//       BoxesData[2] == BoxesData[5] &&
//       BoxesData[5] == BoxesData[8] &&
//       BoxesData[8] != ""
//     ) {
//       playerWon(BoxesData[2]);
//     }
//   };
//   const playerWon = (winner) => {
//     setLock(true);
//     titleRef.current.innerHTML = `Congratulations : <img src="${
//       winner === "x" ? crossIcon : circleIcon
//     }" alt="Cross Player" loading="lazy"/> Wins`;
//   };
//   return (
//     <div className="container">
//       <h1 className="title" ref={titleRef}>
//         Tic Tac Toe In<span>React</span>
//       </h1>
//       <div className="board">
//         <div className="row1">
//           <div
//             className="boxes"
//             ref={box1}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 0);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box2}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 1);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box3}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 2);
//             }}
//           ></div>
//         </div>
//         <div className="row2">
//           <div
//             className="boxes"
//             ref={box4}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 3);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box5}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 4);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box6}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 5);
//             }}
//           ></div>
//         </div>
//         <div className="row3">
//           <div
//             className="boxes"
//             ref={box7}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 6);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box8}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 7);
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box9}
//             onClick={(e) => {
//               boxToggleHandelClick(e, 8);
//             }}
//           ></div>
//         </div>
//       </div>
//       <button className="reset" onClick={resetBtnHandelClick}>
//         Reset
//       </button>
//     </div>
//   );
// }

import "./BoxStyle.css";
import crossIcon from "../assets/cross.png";
import circleIcon from "../assets/circle.png";
import { useRef, useState } from "react";

export default function Box() {
  const [boxesData, setBoxesData] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const titleRef = useRef(null);

  const resetBtnHandelClick = () => {
    setLock(false);
    setBoxesData(Array(9).fill(""));
    setCount(0);
    titleRef.current.innerHTML = `Tic Tac Toe In<span>React</span>`;
  };

  const resetWinsPlayerClick = () => {
    setXWins(0);
    setOWins(0);
  };

  const boxToggleHandelClick = (index) => {
    if (lock || boxesData[index]) return;

    const newData = [...boxesData];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setBoxesData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (data) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        playerWon(data[a]);
        return;
      }
    }
    checkDraw(data);
  };

  const checkDraw = (data) => {
    if (data.every((box) => box !== "")) {
      titleRef.current.innerHTML = `It's a Draw!`;
      setLock(true);
    }
  };

  const playerWon = (winner) => {
    setLock(true);
    if (winner === "x") {
      setXWins(xWins + 1);
    } else {
      setOWins(oWins + 1);
    }
    titleRef.current.innerHTML = `Congratulations : <img src="${
      winner === "x" ? crossIcon : circleIcon
    }" alt="Player Icon" loading="lazy"/> Wins`;
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe In<span>React</span>
      </h1>
      <div className="scoreboard">
        <div>
          Score <span>X</span> : {xWins}
        </div>
        <div>
          Score <span>O</span> : {oWins}
        </div>
      </div>
      <div className="board">
        {boxesData.map((box, index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => boxToggleHandelClick(index)}
            dangerouslySetInnerHTML={{
              __html: box
                ? `<img src="${
                    box === "x" ? crossIcon : circleIcon
                  }" alt="Player Icon" loading="lazy"/>`
                : "",
            }}
          ></div>
        ))}
      </div>
      <button
        className="reset"
        onClick={resetBtnHandelClick}
        onDoubleClick={resetWinsPlayerClick}
      >
        Reset
      </button>
    </div>
  );
}
