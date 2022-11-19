import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
import App from './App';
import ButtonClick from './Ui/ButtonClick';
import InputRedes from './Ui/InputRedes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />,
    <ButtonClick/>,
    <InputRedes/>

  </React.StrictMode>
);


