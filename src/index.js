import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistStor} from './redux/store';


import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistStor}>   
          <App />    
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


 
