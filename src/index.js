import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
<body className='main'>
  <React.StrictMode>
    <BrowserRouter>
   
      <App />
    
    </BrowserRouter>
  </React.StrictMode>
  </body>
  </>
);


reportWebVitals();
