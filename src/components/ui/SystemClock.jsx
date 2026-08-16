import { useEffect, useState } from "react";

function SystemClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal-font text-green-500">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default SystemClock;
