//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const currentTime = new Date(); // Get the current date and time
const currentHour = currentTime.getHours(); // Get the current hour (0-23)

let greeting;
let customStyle = {};

// Dynamically set greeting and color
if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDom.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
