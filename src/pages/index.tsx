import React from 'react';
import CountDownTimer from './components/CountdownTimer'


export default function Home() {

  let TRINIDAD_CARNIVAL_DATE_IN_MS = new Date(2023,1,20);
  let JAMAICA_CARNIVAL_DATE_IN_MS = new Date(2023,3,16);
  let CROPOVER_CARNIVAL_DATE_IN_MS = new Date(2023,7,7);

  return (
    <div >
      
      <CountDownTimer targetDate = {TRINIDAD_CARNIVAL_DATE_IN_MS} nameOfCarnival={'Trinidad Carnival'} color={'purple'}/>
      <CountDownTimer targetDate = {JAMAICA_CARNIVAL_DATE_IN_MS} nameOfCarnival={'Jamaica Carnival'} color={'blue'}/>
      <CountDownTimer targetDate = {CROPOVER_CARNIVAL_DATE_IN_MS} nameOfCarnival={'Cropover'} color={'aquamarine'}/>
    </div>
  )
}
