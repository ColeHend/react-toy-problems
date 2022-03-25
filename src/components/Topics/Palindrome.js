import React, { useState } from "react";

export default function Palindrome() {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");
  const onClickHandle = () => {
    const reversePalindrome = palindrome.split("").reverse().join("");

    reversePalindrome === palindrome
      ? setPalindrome("True")
      : setPalindrome("False");
  };
  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palidrome</h4>
      <input
        className="inputLine"
        value={userInput}
        onChange={(ev) => setUserInput(ev.target.value)}
        type="text"
      />
      <button onClick={onClickHandle} className="confirmationButton">
        Submit
      </button>
      <span className="resultsBox">Palidrome:{palindrome}</span>
    </div>
  );
}
