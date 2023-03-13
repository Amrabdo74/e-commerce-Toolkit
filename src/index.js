import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  { store }  from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter} from 'react-router-dom';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Allproduct from './Components/Allproduct';
// import ProductIdDetailes from './Components/ProductIdDetailes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Provider store={store}> 
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(); 