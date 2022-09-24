// CONSTANTS
const h1Element = document.createElement("h1");
const mainDiv = document.createElement("div");
const time = document.createElement("div");
const date = document.createElement("h1");
const button = document.createElement("button");
const currentDateTime = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// CODE EXECUTION
document.body.appendChild(mainDiv);
mainDiv.appendChild(h1Element);
mainDiv.appendChild(time);
mainDiv.appendChild(date);
mainDiv.appendChild(button);
h1Element.innerText = "A Simple Digital Clock";
mainDiv.classList.add("clock");
time.classList.add("time");
button.innerText = "Switch to Military Time Format";
date.innerText = currentDateTime.toLocaleDateString("en-US", options);

setTimeout(function () {
  window.location.reload();
}, 1000);
time.innerText = getCurrentTime(currentDateTime);

// FUNCTIONS
function getCurrentTime(date) {
  const partOfDay = date.getHours() < 12 ? "AM" : "PM";
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());

  return `${hours}:${minutes}:${seconds} ${partOfDay}`;
}
function getMilitaryTime(date) {
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  return `${hours}${minutes}`;
}
function addZero(number) {
  return number.toString().length < 2 ? `0${number}` : number;
}
button.addEventListener("mousedown", () => {
  time.innerText = getMilitaryTime(currentDateTime);
});
