import React, { useState, useEffect } from 'react';
const Timer = ({ duration, onLap }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleLap = () => {
  const alarmSound = document.getElementById('alarm-sound');
  if (alarmSound) {
    alarmSound.play(); // Play the sound when the lap button is clicked
  }
     console.log('Lap recorded!');
    onLap(); // Call the onLap prop function
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1 style={{ fontSize: 64 }}>{time}</h1>
      <button onClick={handleLap}>Lap</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
