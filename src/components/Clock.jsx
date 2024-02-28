export default function Clock({ time }) {
  let hours = time.getHours();
  console.log(hours);
  if (hours >= 0 && hours <= 6) {
    // document.getElementById('time').className = 'night';
    console.log(`Night`);
  } else {
    // document.getElementById('time').className = 'day';
    console.log(`Day`);
  }
  //   return <h1 id="time">{hours.toLocaleTimeString()}</h1>;
  return console.log(time.toLocaleTimeString());
}
