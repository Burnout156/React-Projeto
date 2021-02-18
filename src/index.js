import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Operators from './components/Operators'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <React.StrictMode>
    <Operators/> {/*aqui eu coloquei o operators afim de executar a página do operators, mas poderia deixar o App */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
