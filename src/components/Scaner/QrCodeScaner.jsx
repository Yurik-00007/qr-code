import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './QrCodeScaner.module.css'
import {SCAN_DATA} from '../../constants.js'

export const QrCodeScaner = () => {
  const [resultQR, setResultQR] = React.useState('');
  const scanHandler=(result)=>{
    // result=result.map(el=>el.rawValue).join()
    const res=result[0].rawValue
    setResultQR(res)
    console.log(res)
    const prevData=JSON.parse(localStorage.getItem(SCAN_DATA))||[]
    console.log('prevData=',prevData)
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData,res]))
  }

  const settings={
    audio: true,
    finder:false
  }
  console.log(SCAN_DATA)
  return (
    <div
    className={s.container}>
{/*
      {resultQR==='' && <Scanner onScan={scanHandler} allowMultiple />}
*/}
      <Scanner onScan={scanHandler} allowMultiple={false} components={settings} styles={{
        container:{width: 300}
      }}/>
      <div className={s.result}>Тут будет резултат:<br/><b><i className={s.resultQR}>{resultQR}</i></b></div>
    </div>
);
};

