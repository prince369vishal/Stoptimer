import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval); //memory leaks
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">Stop timer</h1>

      <div className="text-6xl mb-8 font-mono" >
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="flex space-x-4">
        <button className={`px-4 py-2 rounded text-white transition ${running ? "bg-red-500" : "bg-blue-500"}`} onClick={() => setRunning(!running)}>
          {running ? "Stop" : "Start"}
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default App;
