function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 14 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  document.getElementById("clock").innerHTML = timeString;

  requestAnimationFrame(clock);
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

clock();