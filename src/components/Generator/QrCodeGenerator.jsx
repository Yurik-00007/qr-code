import React from 'react';
import {QRCodeSVG} from 'qrcode.react';
import s from './QrCodeGenerator.module.css'
import {GANERATE_DATA} from '../../constants.js'


export const QrCodeGenerator = () => {
  const [value, setValue] = React.useState('')
  const [resultQR, setResultQR] = React.useState('')

  const onClickHandler = () => {
    setResultQR(value)
    setValue('')

    const prevData=JSON.parse(localStorage.getItem(GANERATE_DATA))||[]
    console.log('prevData=',prevData)
    localStorage.setItem(GANERATE_DATA, JSON.stringify([...prevData,value]))
  }
  const onChangeHandler=(e)=>{
    setValue(e.currentTarget.value);
    setResultQR('')
  }
  console.log('resultQR:',resultQR)
  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        onChange={onChangeHandler}
        value={value}
        placeholder={'Введите текст...'}
      />
      <button className={s.button} onClick={onClickHandler}>Cгенерировать QR</button>
      {resultQR!=='' && (
        <div >
          <QRCodeSVG value={value} size={200}/>
        </div>
      )}
    </div>
  );
};

