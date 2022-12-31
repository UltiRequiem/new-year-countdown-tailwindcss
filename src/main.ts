export function nextYearFromNow() {
  const start = new Date();

  start.setFullYear(start.getFullYear() + 1);

  return start.getFullYear();
}

const nextYear = nextYearFromNow();

const endTime = new Date(nextYear, 0, 1, 0, 0).getTime();

function timeLeft() {
  const now = new Date();

  const remainingTime = endTime - now.getTime();

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
}

const [dayText, hourText, minuteText, secondText] = [
  "day",
  "hour",
  "minute",
  "second",
].map((id) => document.getElementById(id)!);

function updateTimeLeft() {
  const { days, hours, minutes, seconds } = timeLeft();

  dayText.textContent = `${days}`;
  hourText.textContent = `${hours}`;
  minuteText.textContent = `${minutes}`;
  secondText.textContent = `${seconds}`;
}

setInterval(updateTimeLeft, 1000);

const left = document.getElementById("left")!;

left.textContent = `Left for ${nextYear}.`;
