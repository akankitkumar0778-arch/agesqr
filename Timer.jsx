import { useTimer } from 'react-timer-hook';
import './Timer.css';
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    } = useTimer({ expiryTimestamp, autoStart:true});


  return (
    <div className='timer_clock'>
        <span>{minutes}</span>:<span>{String(seconds).padStart(2,'0')}</span>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}