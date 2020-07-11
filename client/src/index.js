import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import { AuthProvider, } from "./providers/AuthProvider";
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware, } from 'devise-axios';
import CatProvider from "./providers/CatProvider";
import FoodProvider from "./providers/FoodProvider";
import DogProvider from "./providers/DogProvider";
import ToyProvider from "./providers/ToyProvider";

initMiddleware();

ReactDOM.render(
  <React.StrictMode> 
  <AuthProvider>
    <CatProvider>
    <DogProvider>
    <ToyProvider>
    <FoodProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FoodProvider>
    </ToyProvider>
    </DogProvider>
    </CatProvider>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);