import {QrCodeGenerator} from "./components/Generator/QrCodeGenerator.jsx";
import {QrCodeScaner} from "./components/Scaner/QrCodeScaner.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {ScanHistory} from "./components/ScanHistory/ScanHistory.jsx";
import {GenerateHistory} from "./components/GenerateHistory/GenerateHistory.jsx";


export const Layout = () => {
  return (

    <div>
      <Navigation/>
      <Routes>
        <Route  path={'/'} element={<QrCodeGenerator/>}/>
        <Route path={"/scan"} element={<QrCodeScaner/>}/>
        <Route path={"/generate-history"} element={<GenerateHistory/>}/>
        <Route path={"/scan-history"} element={<ScanHistory/>}/>
        <Route path={"/404"} element={<h1>404: PAGE NOT FOUND</h1>}/>
        <Route path={'*'} element={<Navigate to={'/404'}/>}/>
      </Routes>

    </div>
  );
};
