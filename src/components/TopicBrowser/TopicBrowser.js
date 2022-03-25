import React, { Component } from "react";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import EvenAndOdd from "../Topics/EvenAndOdd";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

// function TopicBrowser2(props) {
//   return <p>Hello World</p>;
// }
