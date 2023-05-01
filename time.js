const dayElement = document.getElementById("day");
const clockElement = document.getElementById("clock");

let currentDate = new Date();
currentDate.setHours(9, 0, 0); // 9:00 AM

const updateClock = () => {
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let amPm = hours >= 12 ? "PM" : "AM";
  let prevAmPm = clockElement.textContent.includes("PM") ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  let timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${amPm}`;

  clockElement.textContent = timeString;

  if (prevAmPm === "PM" && amPm === "AM") {
    let day = parseInt(dayElement.textContent.split(" ")[1]);
    dayElement.textContent = `Day: ${day + 1}`;
  }
};

const addTime = (hours, minutes) => {
  currentDate.setHours(currentDate.getHours() + hours);
  currentDate.setMinutes(currentDate.getMinutes() + minutes);
  updateClock();
};

updateClock();

document.getElementById("sleep-option").addEventListener("click", () => {
  addTime(8, 0);
});

document.getElementById("look-out-window").addEventListener("click", () => {
  addTime(0, 15);
});
