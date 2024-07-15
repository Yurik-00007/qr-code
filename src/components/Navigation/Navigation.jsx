import {NavLink} from "react-router-dom";
import s from './Navigation.module.css'
export const Navigation = () => {
  // const styleFn=({isActive})=>isActive?{color:'lightgreen',textDecoration:'underline'}:{}
  const styleFn=({isActive}) =>isActive ? s.active : ''
  return (
    <nav className={s.navigation}>
      <NavLink to={'/'} className={styleFn}>Генерировать QR </NavLink>
      <NavLink to={'/scan'} className={styleFn}>Сканировать QR </NavLink>
      <NavLink to={'/scan-history'} className={styleFn}>История сканирования</NavLink>
      <NavLink to={'/generate-history'} className={styleFn}>История Генерирования</NavLink>
    </nav>
  );
};

