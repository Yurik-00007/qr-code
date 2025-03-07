import React from 'react'
import ReactDOM from 'react-dom/client'
import {Layout} from "./Layout.jsx";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </div>,
)
