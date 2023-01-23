import React from 'react';
import CountDownTimer from './components/CountdownTimer'


export default function Home() {

  let TRINIDAD_CARNIVAL_DATE_IN_MS = new Date(2023,1,20);

  return (
    <div className='timerBox'>
      <h1>Countdown</h1>
      <h1>To</h1>
      <h1>Trinidad Carnival</h1>
      <CountDownTimer targetDate = {TRINIDAD_CARNIVAL_DATE_IN_MS}/>
    </div>
  )
}
