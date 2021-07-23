import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { BrowserRouter as Router } from "react-router-dom";
import { GoFigure } from "./components/GoFigure";

import 'bulma/css/bulma.min.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <GoFigure />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

