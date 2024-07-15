import React from 'react';
import {GANERATE_DATA, SCAN_DATA} from '../../constants.js'
import s from "../GenerateHistory/GenerateHistory.module.css";
import {QRCodeSVG} from "qrcode.react";

export const ScanHistory = () => {
  const arrScan = JSON.parse(localStorage.getItem(SCAN_DATA))||[]
  // console.log(arrScan)
  return (
    <div className={s.container}>
      {arrScan.map((item, i) =>
        <div key={i} className={s.items}>
          <div className={s.item}>Исходное значение: <b>{item}</b></div>
          <QRCodeSVG value={item} size={100}/>
          <hr/>
        </div>
      )}
    </div>
  )
};

