import React, { useState } from "react";

export default function FilterObject() {
  const ogArrOb = [
    { name: "Jimmy Joe", title: "Hack0r", age: 12 },
    { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
    { name: "Carly Armstrong", title: "CEO" },
  ];
  const [userInput, setUserInput] = useState("");
  const [unFilteredArray] = useState(ogArrOb);
  const [filteredArray, setFilteredArray] = useState([]);
  const onChangeHandle = (ev) => setUserInput(ev.target.value);
  const onClickHandle = () => {
    const theFilter = unFilteredArray.filter((ele) =>
      Object.keys(ele).includes(userInput)
    );
    setFilteredArray(theFilter);
  };
  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">
        Original:{JSON.stringify(unFilteredArray)}
      </span>
      <input
        onChange={onChangeHandle}
        value={userInput}
        className="inputLine"
        type="text"
      />
      <button onClick={onClickHandle} className="confirmationButton">
        Submit
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}
