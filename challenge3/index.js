const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const currentDay = new Date();
  const decimalDate = xmasDay.getTime() - currentDay.getTime();
  const resultDay = Math.floor(decimalDate / (1000 * 60 * 60 * 24));
  const resultHour = Math.floor(
    (decimalDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const resultMinute = Math.floor(
    (decimalDate % (1000 * 60 * 60)) / (1000 * 60)
  );
  const resultSecond = Math.floor((decimalDate % (1000 * 60)) / 1000);
  clockTitle.innerText = `${resultDay}d ${
    resultHour < 10 ? `0${resultHour}` : resultHour
  }h ${resultMinute < 10 ? `0${resultMinute}` : resultMinute}m ${
    resultSecond < 10 ? `0${resultSecond}` : resultSecond
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
