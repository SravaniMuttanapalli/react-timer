import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Timer from './components/Timer';
import './Timer.css';
function App() {
    const handleLap = () => {
    console.log('Lap recorded!');
    document.getElementById('alarm-sound').play();
  };
   return (
    <div className="app">
      <HelloWorld />
      <Timer duration={6000} onLap={handleLap} />
      <audio id="alarm-sound" src="../sounds/alarm.mp3" />
    </div>
 );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
