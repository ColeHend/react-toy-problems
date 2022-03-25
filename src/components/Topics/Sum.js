import React, { useState } from "react";

export default function Sum() {
  const [numOne, setNumOne] = useState("0");
  const [numTwo, setNumTwo] = useState("0");
  const [sum, setSum] = useState("");
  const submitHandle = () => {
    let newSum = +numOne + +numTwo;
    setSum(String(newSum));
  };
  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        onChange={(ev) => setNumOne(ev.target.value)}
        value={numOne}
        className="inputLine"
        type="number"
      />
      <input
        onChange={(ev) => setNumTwo(ev.target.value)}
        value={numTwo}
        className="inputLine"
        type="number"
      />
      <button onClick={submitHandle} className="confirmationButton">
        Submit
      </button>
      <span className="resultsBox">Sum:{sum}</span>
    </div>
  );
}
