import React from "react";

const addZero = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${addZero(minutes)}:${addZero(seconds)}`;
};

function App() {
  const [time, setTime] = React.useState(0);
  const [timerId, setTimeId] = React.useState<any>(null);

  React.useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  const handleClear = () => {
    setTime(0);
  };

  const handleStart = () => {
    const id = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    setTimeId(id);
  };

  const handleEnd = () => {
    if (timerId) clearInterval(timerId);
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <div className="time-wrapper">
          <div className="time-back">88:88</div>
          <div className="time">{formatTime(time)}</div>
        </div>
      </div>

      <div className="action">
        <button onClick={handleClear}>清零</button>
        <button onClick={handleStart}>开始</button>
        <button onClick={handleEnd}>停止</button>
      </div>
    </div>
  );
}

export default App;
