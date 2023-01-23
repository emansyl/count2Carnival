import React from "react";
import { useCountdown } from "../../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";

interface Count {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: Count) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate, nameOfCarnival, color }: { targetDate: Date, nameOfCarnival: string,color: string}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className={`timerBox ${color}`}>
        <h1>Countdown</h1>
        <h1>To</h1>
        <h1>{nameOfCarnival}</h1>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default CountdownTimer;
