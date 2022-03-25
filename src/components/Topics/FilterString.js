import React, { useState } from "react";

export default function FilterString() {
  const [userInput, setUserInput] = useState("");
  const [unFilteredArray] = useState([
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ]);
  const [filteredArray, setFilteredArray] = useState([]);
  const onChangeHandle = (ev) => {
    return setUserInput(ev.target.value);
  };
  const onClickHandle = () => {
    setUserInput("");
    const theArray = unFilteredArray.filter((ele) => ele.includes(userInput));
    setFilteredArray(theArray);
  };
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Filter String</h4>
      <span className="puzzleText">
        Names: {"[ " + unFilteredArray.join(", ") + "]"}
      </span>
      <input
        value={userInput}
        onChange={onChangeHandle}
        className="inputLine"
        type="text"
      />
      <button onClick={onClickHandle} className="confirmationButton">
        Submit
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}
