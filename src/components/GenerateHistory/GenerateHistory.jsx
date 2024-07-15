import {GANERATE_DATA} from '../../constants.js'
import {QRCodeSVG} from "qrcode.react";
import s from './GenerateHistory.module.css'


export const GenerateHistory = () => {
  const arrGene = JSON.parse(localStorage.getItem(GANERATE_DATA))||[]
  console.log(arrGene)
  return (
    <div className={s.container}>
      {arrGene.map((item, i) =>
        <div key={i} className={s.items}>
          <div className={s.item}>Исходное значение: <b>{item}</b></div>
          <QRCodeSVG value={item} size={100}/>
          <hr/>
        </div>
      )}
    </div>
  )
};

