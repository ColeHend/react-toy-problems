import React, { useState } from "react";

export default function EvenAndOdd() {
  let [evenArray, setEvenArray] = useState([]);
  let [oddArray, setOddArray] = useState([]);
  let [userInput, setUserInput] = useState("");
  const onChangeHandle = (ev) => setUserInput(ev.target.value);
  const onClickHandle = () => {
    let inputArray = userInput.split(",").map((element) => +element);
    let evens = inputArray.filter((ele) => ele % 2 === 0);
    let odds = inputArray.filter((ele) => ele % 2 !== 0);
    setEvenArray(evens);
    setOddArray(odds);
  };
  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        onChange={onChangeHandle}
        value={userInput}
        type="text"
        className="inputLine"
      />
      <button onClick={onClickHandle} className="confirmationButton">
        Submit
      </button>
      <span className="resultsBox">Evens:{JSON.stringify(evenArray)}</span>
      <span className="resultsBox">Odds:{JSON.stringify(oddArray)}</span>
    </div>
  );
}
