import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [secs, setSecs] = useState(0);
  const [mins, setMins] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let clearSecs = setTimeout(() => {
      if (start) {
        setSecs((secs) => secs + 1);
      }
    }, 1000);

    if (secs > 59) {
      setSecs(0);
      setMins((mins) => mins + 1);
    }

    if (mins > 59) {
      setMins(0);
      setHrs((hrs) => hrs + 1);
    }

    return () => clearInterval(clearSecs);
  }, [secs, mins, hrs, start]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div>
        {hrs}:{mins}:{secs}
      </div>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </div>
  );
}
